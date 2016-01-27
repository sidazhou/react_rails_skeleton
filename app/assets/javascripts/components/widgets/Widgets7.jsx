import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) { // react-redux
  return {
    counter: state.widgets.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleIncrement: () => { dispatch({ type: 'INCREMENT' }) },
    handleDecrement: () => { dispatch({ type: 'DECREMENT' }) },
  };
}

class Widgets7 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p onClick={this.props.handleIncrement}
        onMouseEnter={this.props.handleDecrement}
      >
        My counter is {this.props.counter}. Click to increment. -Widgets7
      </p>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets7);
