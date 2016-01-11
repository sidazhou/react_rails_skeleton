import React from 'react';

import Widgets1 from './Widgets1.jsx'; // broken material ui
import Widgets2 from './Widgets2.jsx'; // working exmaple from react written in es5
import Widgets3 from './Widgets3.jsx'; // same as Widget2, but in es6

import AppBarExampleIconMenu from './AppBarExampleIconMenu.jsx';
import DatePickerExampleSimple from './DatePickerExampleSimple.jsx';
import BadgeExampleContent from './BadgeExampleContent.jsx';
import ReactGithubExample1 from './ReactGithubExample1.jsx';
import SelectFieldExampleSimple from './SelectFieldExampleSimple.jsx';

export default class Widgets extends React.Component {
  render() {
    return (
      <div style={{marginLeft:'330px', width:'50%'}}>
      	<p>I'm Widgets.jsx</p>
        <Widgets1></Widgets1>
        <Widgets2></Widgets2>
        <Widgets3></Widgets3>
        <SelectFieldExampleSimple></SelectFieldExampleSimple>
        <AppBarExampleIconMenu></AppBarExampleIconMenu>
        <DatePickerExampleSimple></DatePickerExampleSimple>
        <BadgeExampleContent></BadgeExampleContent>
        <ReactGithubExample1></ReactGithubExample1>
      </div>
    );
  }
}
