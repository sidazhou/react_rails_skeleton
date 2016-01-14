import React from 'react';
import { Link } from 'react-router';
import Widgets from './Widgets.jsx';
import WidgetStore from '../../stores/WidgetStores.js'

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import _MyRawTheme from '../../util/_MyRawTheme.js';


// this would be the smart component, that feeds data to child, which are dumb

export default class WidgetsController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message4widget3: WidgetStore.getMyData() };
  };

  componentDidMount() {
    WidgetStore.addChangeListener(this._onChange);
  };

  componentWillUnmount() {
    WidgetStore.removeChangeListener(this._onChange);
  };

  _onChange = () => {
    this.setState({message4widget3: WidgetStore.getMyData() }) ;
  };

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
        <Widgets message4widget3={this.state.message4widget3} ></Widgets>
      </div>
    )
  };
}

// this.setState({message4widget3: WidgetStore.getMyData()})

