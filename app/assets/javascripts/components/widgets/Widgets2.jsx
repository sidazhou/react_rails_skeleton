import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

export default class Widgets2 extends React.Component {
  render() {
    return (
      <div>
        <Button bsStyle="info">
          <Glyphicon glyph="link"/> My Button
        </Button>
      </div>
    );
  }
}
