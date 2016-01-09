import React from 'react'

// First we import some modules...
import { Router, Route, Link, browserHistory } from 'react-router'

import Widgets from './Widgets.jsx'; // broken material ui
import Widgets1 from './Widgets1.jsx'; // broken material ui
import Widgets2 from './Widgets2.jsx'; // working exmaple from react written in es5

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({
  render() {
    return (
      <div>
        <p>HTML ERROR 404</p>
        {this.props.children}
      </div>
    )
  }
})

const WidgetsController = React.createClass({
  render() {
    return (
      <div>
      <div>{this.props.children}</div>

      <Router history={browserHistory}>
        {/* <Route path="/" component={App}>
          <Route path="1" component={Widgets1} />
          <Route path="2" component={Widgets2} />
        </Route>*/}
        <Route path="/" component={Widgets} />
        <Route path="1" component={Widgets1} />
        <Route path="2" component={Widgets2} />
        <Route path="*" component={App} />
      </Router>
      </div>
    )
  }
})

export default WidgetsController;


// // Finally, we render a <Router> with some <Route>s.
// // It does all the fancy routing stuff for us.
// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <Route path="1" component={Widgets1} />
//       <Route path="2" component={Widgets2} />
//     </Route>
//   </Router>
// ), document.getElementById('react_component') )

