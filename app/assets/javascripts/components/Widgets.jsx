import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

var Widgets = React.createClass({
  render() {
    return (
      <div className="widgets">
        <h2>h2 title smaller and h2er</h2>
        <RaisedButton label='button'></RaisedButton>
      </div>
    );
  }
});

export default Widgets;
