// require(''); // somehow this is necessary, why?! Otherwise we get: "SyntaxError: Unexpected token import"
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import WidgetsController from './components/widgets/WidgetsController.jsx';
import Widgets from './components/widgets/Widgets.jsx';
import Widgets1 from './components/widgets/Widgets1.jsx';
import Widgets2 from './components/widgets/Widgets2.jsx';

import NotUsed from './util/reduxExamples.js';

// tap plugin for material ui, remove upon release of react 1.x
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const App = React.createClass({
  render() {
    return (
      <div>
        <p>I'm components.js</p>
        {this.props.children}
      </div>
    )
  }
});

const PageNotFound = React.createClass({
  render() {
    return (
      <div>
        <p>HTML ERROR 404</p>
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WidgetsController}/>
      <Route path="widgets" component={Widgets} />
      <Route path="1" component={Widgets1} />
      <Route path="2" component={Widgets2} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>, document.getElementById('react_entry_point') );
