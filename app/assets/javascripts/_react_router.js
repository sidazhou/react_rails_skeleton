// require(''); // somehow this is necessary, why?! Otherwise we get: "SyntaxError: Unexpected token import"
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { Provider } from 'react-redux';
import store from './_react_store.js';

import WidgetsController from './components/widgets/WidgetsController.jsx';
import WidgetsTry2controller from './components/widgets_try2/WidgetsTry2controller.jsx';
import Widgets from './components/widgets/Widgets.jsx';
import Widgets1 from './components/widgets/Widgets1.jsx';
import Widgets2 from './components/widgets/Widgets2.jsx';

import MuiexamplesController from './components/muiexamples/MuiexamplesController.jsx';

// import TestingAKAnotUsed from './util/reduxExamples.js';
import TestingAKAnotUsed from './util/jsOOExamples.js';

// tap plugin for material ui, remove upon release of react 1.x
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <div>
          <p>I'm components.js</p>
          <Link to={`/`}> link to home </Link>
          <br/>
          <Link to={`/widgets`}> link to Widgets.jsx </Link>
          <br/>
          <Link to={`/widgets-try2-controller`}> link to WidgetsTry2controller.jsx </Link>
          <br/>
          <Link to={`/mui`}> link to muiexmaplesController.jsx </Link>

          {this.props.children}
        </div>
      </Provider>
    );
  },
});

const PageNotFound = React.createClass({
  render() {
    return (
      <div>
        <p>HTML ERROR 404</p>
      </div>
    );
  },
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WidgetsController}/>
      <Route path="widgets" component={Widgets} />
      <Route path="widgets-try2-controller" component={WidgetsTry2controller} />
      <Route path="mui" component={MuiexamplesController} />
      <Route path="1" component={Widgets1} />
      <Route path="2" component={Widgets2} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>, document.getElementById('react_entry_point') );
