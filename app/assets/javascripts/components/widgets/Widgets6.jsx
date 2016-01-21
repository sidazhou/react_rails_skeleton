import React from 'react';
import store from '../../_react_store.js';

import Widgets6button from './Widgets6button.jsx';
import Widgets6listItem from './Widgets6listItem.jsx';
import { addTodo, toggleTodo, getDataFromApi, setInputValue } from '../../actions/WidgetActions.js';

let nextTodoId = 0;

export default class Widgets6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'LOADING...',
      text: store.getState().widgets.myStoreText,
      todos: store.getState().widgets.todos,
    };
  };

  handleInputChange= (event) => {
    store.dispatch(setInputValue(event.target.value))
  };

  handleClick = () => {
    store.dispatch(addTodo(this.state.inputValue));

    this.setState({
      todos: store.getState().widgets.todos,
      // inputValue: '',
     });

    store.dispatch(setInputValue(''));
  };

  handleToggle = (todo) => {
    store.dispatch(toggleTodo(todo));
    this.setState({
      todos: store.getState().widgets.todos,
    })
  };

  handleGetData = () => {
    store.dispatch(getDataFromApi())
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
    this.unsubscribe = store.subscribe(() => { // subscribing
      this.setState({
        todos: this.filterTodosView(store.getState().widgets.todos, store.getState().widgets.visibilityFilter),
        inputValue: store.getState().widgets.inputValue,
      });
    });

    store.dispatch(getDataFromApi())
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
