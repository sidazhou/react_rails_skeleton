import React from 'react';
import WidgetStores from '../../stores/WidgetStores.js';

export default class Widgets6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: WidgetStores.getState().todos.length,
    };

    WidgetStores.subscribe(() => {
      this.setState({
        counter: WidgetStores.getState().todos.length,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>todolist counter: {this.state.counter}</h2>
      </div>
    );
  }
}
