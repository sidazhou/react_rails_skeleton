import React from 'react';
import WidgetStores from '../../stores/WidgetStores.js';

export default class Widgets5 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: WidgetStores.getState().myStoreText };
  }

  handleClick = () => {
    WidgetStores.dispatch({
      type: 'CHANGE_WIDGET5_TEXT'
    })
    this.setState({ text: WidgetStores.getState().myStoreText })
  };

  render() {
    return (
      <div style={{ color: 'grey' }} onClick={this.handleClick}>
        {this.state.text}
      </div>
    );
  }
}
