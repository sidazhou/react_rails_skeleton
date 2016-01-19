import React from 'react';
import WidgetStores from '../../stores/WidgetStores.js';

export default class Widgets4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: WidgetStores.getState().counter,
    };
  };

  handleIncrement = (event) => {
    WidgetStores.dispatch({ type: 'INCREMENT' });
    this.setState({counter: WidgetStores.getState().counter});
  };

  handleDecrement = (event) => {
    WidgetStores.dispatch({ type: 'DECREMENT' });
    this.setState({counter: WidgetStores.getState().counter});
  };

  render() {
    return (
      <p onClick={this.handleIncrement}
         onMouseEnter={this.handleDecrement} >
        My counter is {this.state.counter}. Click to increment. -Widgets4
      </p>
    );
  }
}
