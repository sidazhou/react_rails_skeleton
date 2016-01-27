import React from 'react';
import { connect } from 'react-redux';

import Widgets6button from './Widgets6button.jsx';
import Widgets6listItem from './Widgets6listItem.jsx';
import { addTodo, toggleTodo, getDataFromApi, setInputValue } from '../../actions/WidgetActions.js';


function mapStateToProps(state) { // react-redux
  return {
    todos: state.widgets.todos,
    visibilityFilter: state.widgets.visibilityFilter,
    inputValue: state.widgets.inputValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInputChange: (event) => {
      dispatch(setInputValue(event.target.value))
    },
    handleClick: (boundInputVal) => {
      // dispatch(addTodo(this.props.inputValue)); // .bind(this) somehow doesnt work, this is undefined
      dispatch(addTodo(boundInputVal)); // hence boundInputVal need to be passed
      dispatch(setInputValue(''));
    },
    handleToggle: (todo) => {
      dispatch(toggleTodo(todo));
    },
    handleGetData: () => {
      dispatch(getDataFromApi())
    },

  };
}

class Widgets6 extends React.Component {

  filterTodosView = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
        break;
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed)
        break;
      case 'SHOW_INCOMPLETED':
        return todos.filter(todo => !todo.completed)
        break;
      default:
        return todos;
        break;
    }
  };

  componentWillMount() {
    this.props.handleGetData();
  }

  render() {
    return (
      <div>
        ==========<br/>
        Widgets6:<br/>

        <Widgets6button filter='SHOW_ALL'/> &nbsp;&nbsp;
        <Widgets6button filter='SHOW_COMPLETED'/>&nbsp;&nbsp;
        <Widgets6button filter='SHOW_INCOMPLETED'/>&nbsp;&nbsp;
        <br/>

        <input value={this.props.inputValue} onChange={this.props.handleInputChange} />
        <br/>
        <button onClick={this.props.handleClick.bind(this, this.props.inputValue)}>
          Add Todo
        </button>

        <button onClick={ this.props.handleGetData }>
          get data from api
        </button>

        <ul>
          { this.filterTodosView(this.props.todos, this.props.visibilityFilter).map( (todo) => (
            <Widgets6listItem key={todo.id} text={todo.text} onClick={this.props.handleToggle.bind(this,todo)} completed={todo.completed}/>
          ))}


        </ul>
        ==========<br/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets6);
