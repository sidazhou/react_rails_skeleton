import React from 'react';
import store from '../../_react_store.js';

export default class Widgets5 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: store.getState().widgets.myStoreText };
  }

  handleClick = () => {
    store.dispatch({
      type: 'CHANGE_WIDGET5_TEXT'
    })
    this.setState({ text: store.getState().widgets.myStoreText })
  };

  render() {
    return (
      <div style={{ color: 'grey' }} onClick={this.handleClick}>
        {this.state.text + ' -Widgets5'}
      </div>
    );
  }
}
