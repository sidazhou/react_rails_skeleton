import React from 'react';
import WidgetStores from '../../stores/WidgetStores.js'

var Widgets4 = React.createClass({
  getInitialState: function() {
    return {counter: WidgetStores.getState().counter};
  },
  handleIncrement: function(event) {
    WidgetStores.dispatch({ type: 'INCREMENT' });
    this.setState({counter: WidgetStores.getState().counter});
  },
  handleDecrement: function(event) {
    WidgetStores.dispatch({ type: 'DECREMENT' });
    this.setState({counter: WidgetStores.getState().counter});
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
