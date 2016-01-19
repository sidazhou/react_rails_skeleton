import React from 'react';
import WidgetStores from '../../stores/WidgetStores.js';

let nextTodoId = 0;

export default class Widgets6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      text: WidgetStores.getState().myStoreText,
      todos: WidgetStores.getState().todos,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleClick = () => {
    WidgetStores.dispatch({
      type: 'ADD_TODO',
      text: this.state.inputValue,
      id: nextTodoId++,
    });
    this.setState({
      todos: WidgetStores.getState().todos,
      inputValue: '',
     })
  };

  render() {
    return (
      <div>
        ==========<br/>
        Widgets6:<br/>
        <input value={this.state.inputValue} onChange={this.handleInputChange} />
        <br/>
        <button onClick={this.handleClick}>
          Add Todo
        </button>
        <ul>
          { this.state.todos.map( (todo) => (
              <li key={todo.id}>
                {todo.text}
              </li>
          ))}
        </ul>
        ==========<br/>
      </div>
    );
  }
}
