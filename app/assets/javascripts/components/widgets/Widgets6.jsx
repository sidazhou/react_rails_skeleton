import React from 'react';
import WidgetStores from '../../stores/WidgetStores.js';

import Widgets6button from './Widgets6button.jsx';
import { addTodo, toggleTodo } from '../../actions/WidgetActions.js';

let nextTodoId = 0;

export default class Widgets6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      text: WidgetStores.getState().myStoreText,
      todos: WidgetStores.getState().todos,
    };
  };

  handleInputChange= (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleClick = () => {
    // WidgetStores.dispatch({
    //   type: 'ADD_TODO',
    //   text: this.state.inputValue,
    //   id: nextTodoId++,
    // });

    WidgetStores.dispatch(addTodo(this.state.inputValue));

    this.setState({
      todos: WidgetStores.getState().todos,
      inputValue: '',
     })
  };

  handleToggle = (todo) => {
    WidgetStores.dispatch(toggleTodo(todo));
    this.setState({
      todos: WidgetStores.getState().todos,
    })
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
    this.unsubscribe = WidgetStores.subscribe(() => {
      this.setState({
        todos: this.filterTodosView(WidgetStores.getState().todos, WidgetStores.getState().visibilityFilter),
      });
    });
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


        <ul>
          { this.state.todos.map( (todo) => (
              <li key={todo.id}
                style={{
                  color: todo.completed ? 'lightgrey' : 'black',
                }}
                onClick={this.handleToggle.bind(this,todo)}>
                {todo.text}
              </li>
          ))}
        </ul>
        ==========<br/>
      </div>
    );
  }
}
