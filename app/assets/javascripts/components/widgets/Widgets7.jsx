// testing store namespacing, conflicting with Widgets4

import React from 'react';
import WidgetStores from '../../stores/WidgetStores.js';

export default class Widgets7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: WidgetStores.getState().counter,
    };
  };

  handleIncrement = (event) => {
    WidgetStores.dispatch({ type: 'INCREMENT' });
  };

  handleDecrement = (event) => {
    WidgetStores.dispatch({ type: 'DECREMENT' });
  };

  componentWillMount() {
    this.unsubscribe = WidgetStores.subscribe(() => { // subscribing
      this.setState({
        counter: WidgetStores.getState().counter,
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
