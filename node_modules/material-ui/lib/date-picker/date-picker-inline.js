'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _paper = require('../paper');

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = {
  actions: {
    marginRight: 8,
    paddingBottom: 12,
    textAlign: 'right'
  },
  container: {
    zIndex: 3,
    width: '100%',
    position: 'relative',
    display: 'block'
  },
  subContainer: {
    position: 'absolute',
    height: 'auto'
  }
};

var DatePickerInline = _react2.default.createClass({
  displayName: 'DatePickerInline',

  propTypes: {
    actions: _react2.default.PropTypes.node,
    children: _react2.default.PropTypes.node,
    open: _react2.default.PropTypes.bool,

    /**
     * Override the inline-styles of the root element.
     */
    style: _react2.default.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      open: false
    };
  },
  render: function render() {
    var _props = this.props;
    var actions = _props.actions;
    var children = _props.children;
    var open = _props.open;
    var style = _props.style;

    var other = _objectWithoutProperties(_props, ['actions', 'children', 'open', 'style']);

    if (!open) {
      return _react2.default.createElement('span', null);
    }

    return _react2.default.createElement(
      'div',
      { style: styles.container },
      _react2.default.createElement(
        'div',
        { style: styles.subContainer },
        _react2.default.createElement(
          _paper2.default,
          other,
          children,
          _react2.default.createElement(
            'div',
            { style: styles.actions },
            actions
          )
        )
      )
    );
  }
});

exports.default = DatePickerInline;
module.exports = exports['default'];