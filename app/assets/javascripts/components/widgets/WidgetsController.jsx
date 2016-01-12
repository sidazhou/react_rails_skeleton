import React from 'react';
import { Link } from 'react-router';
import Widgets from './Widgets.jsx';


import ThemeManager from 'material-ui/lib/styles/theme-manager';
import _MyRawTheme from '../../util/_MyRawTheme.js';


// this would be the smart component, that feeds data to child, which are dumb

export default class WidgetsController extends React.Component {

  //the key passed through context must be called "muiTheme"
  // get childContextTypes() {
  //   return {
  //     muiTheme: React.PropTypes.object,
  //   };
  // };

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
      <div>
        <p>I'm WidgetsController</p>
        <Link to={`/widgets`}> link to widgets.jsx </Link>
        <Widgets></Widgets>
      </div>
    )
  };
}
