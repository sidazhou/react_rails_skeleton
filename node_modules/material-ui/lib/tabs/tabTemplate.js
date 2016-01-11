'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabTemplate = _react2.default.createClass({
  displayName: 'TabTemplate',

  propTypes: {
    children: _react2.default.PropTypes.node,
    selected: _react2.default.PropTypes.bool
  },

  render: function render() {
    var styles = {
      height: 0,
      overflow: 'hidden',
      width: '100%',
      position: 'relative',
      textAlign: 'initial'
    };

    if (this.props.selected) {
      delete styles.height;
      delete styles.overflow;
    }

    return _react2.default.createElement(
      'div',
      { style: styles },
      this.props.children
    );
  }
});

exports.default = TabTemplate;
module.exports = exports['default'];