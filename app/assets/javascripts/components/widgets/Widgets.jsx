import React from 'react';

import Widgets1 from './Widgets1.jsx';
import Widgets2 from './Widgets2.jsx';
import Widgets3 from './Widgets3.jsx';
import Widgets3button from './Widgets3button.jsx';
import Widgets4 from './Widgets4.jsx';
import Widgets5 from './Widgets5.jsx';
import Widgets6 from './Widgets6.jsx';
import Widgets7 from './Widgets7.jsx';

export default class Widgets extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: '330px', width: '50%' }}>
        <p>I'm Widgets.jsx</p>
        <Widgets1/>
        <Widgets2/>
        <Widgets3 message={this.props.message4widget3} />
        <Widgets3button/>
        <Widgets4/>
        <Widgets5/>
        <Widgets6/>
        <Widgets7/>
      </div>
    );
  }
}
