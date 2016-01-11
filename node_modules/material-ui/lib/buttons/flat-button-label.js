'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _contextPure = require('../mixins/context-pure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _stylePropable = require('../mixins/style-propable');

var _stylePropable2 = _interopRequireDefault(_stylePropable);

var _lightRawTheme = require('../styles/raw-themes/light-raw-theme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../styles/theme-manager');

var _themeManager2 = _interopRequireDefault(_themeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlatButtonLabel = _react2.default.createClass({
  displayName: 'FlatButtonLabel',

  propTypes: {
    label: _react2.default.PropTypes.node,

    /**
     * Override the inline-styles of the root element.
     */
    style: _react2.default.PropTypes.object
  },

  contextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  mixins: [_contextPure2.default, _stylePropable2.default],

  statics: {
    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
      return {
        spacingDesktopGutterLess: muiTheme.rawTheme.spacing.desktopGutterLess
      };
    }
  },

  getInitialState: function getInitialState() {
    return {
      muiTheme: this.context.muiTheme ? this.context.muiTheme : _themeManager2.default.getMuiTheme(_lightRawTheme2.default)
    };
  },
  getChildContext: function getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  },

  //to update theme inside state whenever a new theme is passed down
  //from the parent / owner using context
  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({ muiTheme: newMuiTheme });
  },

  render: function render() {
    var _props = this.props;
    var label = _props.label;
    var style = _props.style;

    var contextKeys = this.constructor.getRelevantContextKeys(this.state.muiTheme);

    var mergedRootStyles = this.mergeStyles({
      position: 'relative',
      padding: '0 ' + contextKeys.spacingDesktopGutterLess + 'px'
    }, style);

    return _react2.default.createElement(
      'span',
      { style: this.prepareStyles(mergedRootStyles) },
      label
    );
  }

});

exports.default = FlatButtonLabel;
module.exports = exports['default'];