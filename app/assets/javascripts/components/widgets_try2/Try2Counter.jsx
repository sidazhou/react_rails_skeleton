import React from 'react';
import WidgetTry2Stores from '../../stores/WidgetTry2Stores.js';

export default class Try2Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: WidgetTry2Stores.getState().counter,
    };
  };

  handleIncrement = (event) => {
    WidgetTry2Stores.dispatch({ type: 'INCREMENT' });
  };

  handleDecrement = (event) => {
    WidgetTry2Stores.dispatch({ type: 'DECREMENT' });
  };

  componentWillMount() {
    this.unsubscribe = WidgetTry2Stores.subscribe(() => { // subscribing
      this.setState({
        counter: WidgetTry2Stores.getState().counter,
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
