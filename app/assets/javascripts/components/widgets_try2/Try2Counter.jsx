import React from 'react';
import store from '../../_react_store.js';

export default class Try2Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().widgetsTry2.counter,
    };
  };

  handleIncrement = (event) => {
    store.dispatch({ type: 'INCREMENT' });
  };

  handleDecrement = (event) => {
    store.dispatch({ type: 'DECREMENT' });
  };

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => { // subscribing
      this.setState({
        counter: store.getState().widgetsTry2.counter,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe(); // unsubscribe
  }

  render() {
    return (
      <p onClick={this.handleIncrement}
         onMouseEnter={this.handleDecrement} >
        My counter is {this.state.counter}. Click to increment. -Try2Counter
      </p>
    );
  }
}
