import React from 'react';
import Try2Counter from './Try2Counter.jsx';

export default class WidgetsTry2Controller extends React.Component {
  constructor(props) {
    super(props);
  };


  componentDidMount() {
  };

  render() {
    return (
      <div style={{ marginLeft: '330px', width: '50%' }} >
        <p>I'm WidgetsTry2Controller</p>
        <Try2Counter/>
      </div>
    )
  };
}
