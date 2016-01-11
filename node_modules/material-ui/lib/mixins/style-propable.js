'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutabilityHelper = require('../utils/immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _styles = require('../utils/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This mixin isn't necessary and will be removed

/**
 *	@params:
 *	styles = Current styles.
 *  props = New style properties that will override the current style.
 */
exports.default = {

  propTypes: {
    style: _react2.default.PropTypes.object
  },

  //Moved this function to ImmutabilityHelper.merge
  mergeStyles: function mergeStyles() {
    return _immutabilityHelper2.default.merge.apply(this, arguments);
  },

  //Moved this function to /utils/styles.js
  mergeAndPrefix: function mergeAndPrefix() {
    return _styles2.default.mergeAndPrefix.apply(this, arguments);
  },

  // prepareStyles is used to merge multiple styles, make sure they are flipped to rtl
  // if needed, and then autoprefix them. It should probably always be used instead of
  // mergeAndPrefix.
  //
  // Never call this on the same style object twice. As a rule of thumb,
  // only call it when passing style attribute to html elements.
  // If you call it twice you'll get a warning anyway.
  prepareStyles: function prepareStyles() {
    return _styles2.default.prepareStyles.apply(_styles2.default, [this.state && this.state.muiTheme || this.context.muiTheme].concat([].slice.apply(arguments)));
  }
};
module.exports = exports['default'];