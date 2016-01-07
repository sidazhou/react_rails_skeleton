import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Widgets1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Simple Controlled LeftNav"
          onClick={this.handleToggle} />
        <LeftNav openRight={true} open={false}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}
