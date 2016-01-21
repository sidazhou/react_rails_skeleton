import React from 'react';
import store from '../../_react_store.js';

export default class Widgets1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().widgets.todos.length,
    };
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().widgets.todos.length,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe(); // unsubscribe
  }

  render() {
    return (
      <div>
        <h2 style={{display: 'inline'}}>todolist counter: {this.state.counter}</h2> -Widgets1
      </div>
    );
  }
}
