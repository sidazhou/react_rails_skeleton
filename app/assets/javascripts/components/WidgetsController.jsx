import React from 'react'

// First we import some modules...
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Widgets from './Widgets.jsx'; // broken material ui

const WidgetsController = React.createClass({
  render() {
    return (
      <div>
        <p>I'm WidgetsController</p>
        <Widgets></Widgets>
      </div>
    )
  }
})

export default WidgetsController;
