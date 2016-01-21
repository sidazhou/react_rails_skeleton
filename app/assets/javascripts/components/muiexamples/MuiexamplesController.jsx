import React from 'react';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import _MyRawTheme from '../../util/_MyRawTheme.js';

import AppBarExampleIconMenu from './AppBarExampleIconMenu.jsx';
import DatePickerExampleSimple from './DatePickerExampleSimple.jsx';
import BadgeExampleContent from './BadgeExampleContent.jsx';
import ReactGithubExample1 from './ReactGithubExample1.jsx';
import SelectFieldExampleSimple from './SelectFieldExampleSimple.jsx';
import Divider from 'material-ui/lib/divider';

export default class WidgetsController extends React.Component {
  static childContextTypes = { //https://github.com/callemall/material-ui/issues/866
      muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(_MyRawTheme),
    };
  };


  render() {
    return (
      <div style={{ marginLeft: '330px', width: '50%' }} >
        <p>I'm MuiexamplesController</p>

        <Divider/>

        <SelectFieldExampleSimple></SelectFieldExampleSimple>
        <AppBarExampleIconMenu></AppBarExampleIconMenu>
        <DatePickerExampleSimple></DatePickerExampleSimple>
        <BadgeExampleContent></BadgeExampleContent>
        <ReactGithubExample1></ReactGithubExample1>
      </div>
    )
  };
}
