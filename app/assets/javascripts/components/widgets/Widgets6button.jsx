import React from 'react';
import WidgetStores from '../../stores/WidgetStores.js';

export default class FilterLink extends React.Component {
  render() {
    return (
      <a href="#"
        onClick={ e => {
          e.preventDefault();
          WidgetStores.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: this.props.filter,
          });
        }}
      >
        {this.props.filter}
      </a>
    );
  }
}
