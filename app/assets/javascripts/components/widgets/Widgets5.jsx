import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) { // react-redux
  return {
    text: state.widgets.myStoreText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => { dispatch({ type: 'CHANGE_WIDGET5_TEXT' }) },
  };
}

class Widgets5 extends React.Component {
  render() {
    return (
      <div style={{ color: 'grey' }} onClick={this.props.handleClick}>
        {this.props.text + ' -Widgets5'}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets5);
