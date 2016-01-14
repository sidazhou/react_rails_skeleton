import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Widgets3button extends React.Component {

  constructor(props) {
    super(props);
  };

  handleClick = () => {
    console.log('hep pressed');
  };

  render() {
    return (
      <RaisedButton label="change data for widgets3"
        onClick={this.handleClick} />
    );
  }
}


