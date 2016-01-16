import React from 'react';

import Widgets1 from './Widgets1.jsx';
import Widgets2 from './Widgets2.jsx';
import Widgets3 from './Widgets3.jsx';
import Widgets3button from './Widgets3button.jsx';
import Widgets4 from './Widgets4.jsx';

import AppBarExampleIconMenu from '../muiexamples/AppBarExampleIconMenu.jsx';
import DatePickerExampleSimple from '../muiexamples/DatePickerExampleSimple.jsx';
import BadgeExampleContent from '../muiexamples/BadgeExampleContent.jsx';
import ReactGithubExample1 from '../muiexamples/ReactGithubExample1.jsx';
import SelectFieldExampleSimple from '../muiexamples/SelectFieldExampleSimple.jsx';
import Divider from 'material-ui/lib/divider';

export default class Widgets extends React.Component {
  render() {
    return (
      <div style={{marginLeft:'330px', width:'50%'}}>
      	<p>I'm Widgets.jsx</p>
        <Widgets1></Widgets1>
        <Widgets2></Widgets2>
        <Widgets3 message={this.props.message4widget3} ></Widgets3>
        <Widgets3button/>
        <Widgets4></Widgets4>

        <Divider/>

        <SelectFieldExampleSimple></SelectFieldExampleSimple>
        <AppBarExampleIconMenu></AppBarExampleIconMenu>
        <DatePickerExampleSimple></DatePickerExampleSimple>
        <BadgeExampleContent></BadgeExampleContent>
        <ReactGithubExample1></ReactGithubExample1>
      </div>
    );
  }
}
