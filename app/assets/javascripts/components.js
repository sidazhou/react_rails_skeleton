// require(''); // somehow this is necessary, why?! Otherwise we get: "SyntaxError: Unexpected token import"
import React from 'react';
import ReactDOM from 'react-dom';

// tap plugin for material ui, remove upon release of react 1.x
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import Widgets from './components/Widgets.jsx';

ReactDOM.render( <Widgets />, document.getElementById('react_component') );
