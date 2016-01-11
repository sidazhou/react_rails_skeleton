'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  propTypes: {
    onChange: _react2.default.PropTypes.func,
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]),
    valueLink: _react2.default.PropTypes.shape({
      value: _react2.default.PropTypes.string.isRequired,
      requestChange: _react2.default.PropTypes.func.isRequired
    })
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onChange: function onChange() {}
    };
  },
  getValueLink: function getValueLink(props) {
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange
    };
  }
};
module.exports = exports['default'];