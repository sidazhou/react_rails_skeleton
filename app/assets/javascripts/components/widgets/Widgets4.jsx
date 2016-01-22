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

class Widgets4 extends React.Component {
  constructor(props) {
    super(props);
  };

  // handleIncrement = (event) => {
  //   store.dispatch({ type: 'INCREMENT' });
  // };

  // handleDecrement = (event) => {
  //   store.dispatch({ type: 'DECREMENT' });
  // };

  componentWillMount() {
    // this.unsubscribe = store.subscribe(() => { // subscribing
    //   this.setState({
    //     counter: this.props.counter,
    //   });
    // });
  }

  componentWillUnmount() {
    // this.unsubscribe(); // unsubscribe
  }

  render() {
    return (
      <p onClick={this.props.handleIncrement}
        onMouseEnter={this.props.handleDecrement}
      >
        My counter is {this.props.counter}. Click to increment. -Widgets4
      </p>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets4);
