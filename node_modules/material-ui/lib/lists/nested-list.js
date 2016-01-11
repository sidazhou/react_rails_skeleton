'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutabilityHelper = require('../utils/immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NestedList = _react2.default.createClass({
  displayName: 'NestedList',

  propTypes: {
    children: _react2.default.PropTypes.node,
    nestedLevel: _react2.default.PropTypes.number,
    open: _react2.default.PropTypes.bool,

    /**
     * Override the inline-styles of the root element.
     */
    style: _react2.default.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      nestedLevel: 1,
      open: false
    };
  },
  render: function render() {
    var _props = this.props;
    var children = _props.children;
    var open = _props.open;
    var nestedLevel = _props.nestedLevel;
    var style = _props.style;

    var styles = {
      root: {
        display: open ? null : 'none'
      }
    };

    return _react2.default.createElement(
      _list2.default,
      { style: _immutabilityHelper2.default.merge(styles.root, style) },
      _react2.default.Children.map(children, function (child) {
        return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, {
          nestedLevel: nestedLevel + 1
        }) : child;
      })
    );
  }
});

exports.default = NestedList;
module.exports = exports['default'];