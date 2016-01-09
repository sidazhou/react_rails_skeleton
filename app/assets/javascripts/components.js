// require(''); // somehow this is necessary, why?! Otherwise we get: "SyntaxError: Unexpected token import"
import React from 'react';
import ReactDOM from 'react-dom';

// tap plugin for material ui, remove upon release of react 1.x
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import WidgetsController from './components/WidgetsController.jsx';
ReactDOM.render( <WidgetsController />, document.getElementById('react_component') );
