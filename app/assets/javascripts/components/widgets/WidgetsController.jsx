import React from 'react';
import Widgets from './Widgets.jsx';
// this would be the smart component, that feeds data to child, which are dumb

export default class WidgetsController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message4widget3: ['widgetscontroller_default_state_1','widgetscontroller_default_state_2']};
  };

  componentDidMount() {
    $.get('api/v1/messages', function(data) {
      this.setState({
        message4widget3: [data[0].title, data[0].body] //for format look at the api
      });
    }.bind(this));
  };


  render() {
    return (
      <div>
        <p>I'm WidgetsController</p>
        <Widgets message4widget3={this.state.message4widget3} ></Widgets>
      </div>
    )
  };
}
