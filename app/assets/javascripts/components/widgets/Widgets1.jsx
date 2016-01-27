import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) { // react-redux
  return {
    todoArrLength: state.widgets.todos.length, // was store.getState().widgets.todos.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

class Widgets1 extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   counter: this.props.todoArrLength,
    // };
  }

  componentWillMount() {
    // this.unsubscribe = store.subscribe(() => {
    //   this.setState({
    //     counter: this.props.todoArrLength,
    //   });
    // });
  }

  componentWillUnmount() {
    // this.unsubscribe(); // unsubscribe
  }

  render() {
    return (
      <div>
        <h2 style={{ display: 'inline' }}>todolist counter: {this.props.todoArrLength}</h2> -Widgets1
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets1);
