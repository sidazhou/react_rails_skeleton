import React from 'react';
import WidgetStores from '../../stores/WidgetStores.js';

import Widgets6button from './Widgets6button.jsx';
import Widgets6listItem from './Widgets6listItem.jsx';
import { addTodo, toggleTodo, getDataFromApi, setInputValue } from '../../actions/WidgetActions.js';

let nextTodoId = 0;

export default class Widgets6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'LOADING...',
      text: WidgetStores.getState().myStoreText,
      todos: WidgetStores.getState().todos,
    };
  };

  handleInputChange= (event) => {
    // this.setState({
    //   inputValue: event.target.value
    // });
    WidgetStores.dispatch(setInputValue(event.target.value))
  };

  handleClick = () => {
    WidgetStores.dispatch(addTodo(this.state.inputValue));

    this.setState({
      todos: WidgetStores.getState().todos,
      // inputValue: '',
     });

    WidgetStores.dispatch(setInputValue(''));
  };

  handleToggle = (todo) => {
    WidgetStores.dispatch(toggleTodo(todo));
    this.setState({
      todos: WidgetStores.getState().todos,
    })
  };

  handleGetData = () => {
    WidgetStores.dispatch(getDataFromApi())
  };

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
    this.unsubscribe = WidgetStores.subscribe(() => { // subscribing
      this.setState({
        todos: this.filterTodosView(WidgetStores.getState().todos, WidgetStores.getState().visibilityFilter),
        inputValue: WidgetStores.getState().inputValue,
      });
    });

    WidgetStores.dispatch(getDataFromApi())
  }

  componentWillUnmount() {
    this.unsubscribe(); // unsubscribe
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

        <input value={this.state.inputValue} onChange={this.handleInputChange} />
        <br/>
        <button onClick={this.handleClick}>
          Add Todo
        </button>

        <button onClick={ this.handleGetData }>
          get data from api
        </button>

        <ul>
          { this.state.todos.map( (todo) => (
            <Widgets6listItem key={todo.id} text={todo.text} onClick={this.handleToggle.bind(this,todo)} completed={todo.completed}/>
          ))}


        </ul>
        ==========<br/>
      </div>
    );
  }
}
