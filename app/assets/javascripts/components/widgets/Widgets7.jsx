// testing store namespacing, conflicting with Widgets4

import React from 'react';
import store from '../../_react_store.js';

export default class Widgets7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().widgets.counter,
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
        counter: store.getState().widgets.counter,
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
        My counter is {this.state.counter}. Click to increment. OMG WHY IM ATTACHED TO Widgets4?? -Widgets7
      </p>
    );
  }
}
