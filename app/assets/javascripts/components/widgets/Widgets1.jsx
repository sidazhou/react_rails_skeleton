import React from 'react';
import WidgetStores from '../../stores/WidgetStores.js';

export default class Widgets1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: WidgetStores.getState().todos.length,
    };


  }

  componentWillMount() {
    this.unsubscribe = WidgetStores.subscribe(() => {
      this.setState({
        counter: WidgetStores.getState().todos.length,
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
