import React from 'react';
import { Link } from 'react-router';
import Widgets from './Widgets.jsx';

// this would be the smart component, that feeds data to child, which are dumb

const WidgetsController = React.createClass({
  render() {
    return (
      <div>
        <p>I'm WidgetsController</p>
        <Link to={`/widgets`}> link to widgets.jsx </Link>
        <Widgets></Widgets>
      </div>
    )
  }
})

export default WidgetsController;
