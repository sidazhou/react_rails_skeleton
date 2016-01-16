import React from 'react';
import WidgetStores from '../../stores/WidgetStores.js'

var Widgets4 = React.createClass({
  getInitialState: function() {
    return {counter: WidgetStores.getState()};
  },
  handleIncrement: function(event) {
    WidgetStores.dispatch({ type: 'INCREMENT' });
    this.setState({counter: WidgetStores.getState()});
  },
  handleDecrement: function(event) {
    WidgetStores.dispatch({ type: 'DECREMENT' });
    this.setState({counter: WidgetStores.getState()});
  },
  render: function() {
    return (
      <p onClick={this.handleIncrement}
         onMouseEnter={this.handleDecrement} >
        My counter is {this.state.counter}. Click to increment. -Widgets4
      </p>
    );
  }
});

export default Widgets4;
