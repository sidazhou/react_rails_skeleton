
//= require_self
//= require react_ujs

var React = require('react');

//add other modules as needed, eg:
//ReactDnD = require('react-dnd');

// import injectTapEventPlugin from 'react-tap-event-plugin';
var injectTapEventPlugin = require("react-tap-event-plugin");

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


var Widgets = require('./components/Widgets.jsx');

