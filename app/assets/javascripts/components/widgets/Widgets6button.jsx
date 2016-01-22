import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) { // react-redux
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (filterName, event) => { // omfg? .bind(this, arg1, arg2) maps onto (arg1, arg2, event) https://github.com/facebook/react/issues/3258
      event.preventDefault();
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: filterName,
      });
    },
  };
}

class FilterLink extends React.Component {

  render() {
    return (
      <a href="/should-not-be-reached"
        onClick = {this.props.handleClick.bind(this, this.props.filter)}
      >
        {this.props.filter}
      </a>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
