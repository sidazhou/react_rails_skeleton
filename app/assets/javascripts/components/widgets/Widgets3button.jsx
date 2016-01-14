import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

import WidgetActions from '../../actions/WidgetActions.js'


export default class Widgets3button extends React.Component {

  constructor(props) {
    super(props);
  };

  handleClick = () => {
    console.log('hep Widgets3button pressed');
    WidgetActions.changeWidget3data();
  };

  render() {
    return (
      <RaisedButton label="change data for widgets3"
        onClick={this.handleClick} />
    );
  }
}


