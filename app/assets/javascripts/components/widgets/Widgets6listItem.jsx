import React from 'react';

export default class Widgets6listItem extends React.Component {
  render() {
    return (
      <li key={this.props.key}
        style={{
          color: this.props.completed ? 'lightgrey' : 'black',
        }}
        onClick={this.props.onClick}>
        {this.props.text}
      </li>
    );
  }
}
