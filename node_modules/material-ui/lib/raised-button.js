'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stylePropable = require('./mixins/style-propable');

var _stylePropable2 = _interopRequireDefault(_stylePropable);

var _transitions = require('./styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = require('./utils/color-manipulator');

var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

var _children = require('./utils/children');

var _children2 = _interopRequireDefault(_children);

var _typography = require('./styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _enhancedButton = require('./enhanced-button');

var _enhancedButton2 = _interopRequireDefault(_enhancedButton);

var _paper = require('./paper');

var _paper2 = _interopRequireDefault(_paper);

var _lightRawTheme = require('./styles/raw-themes/light-raw-theme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('./styles/theme-manager');

var _themeManager2 = _interopRequireDefault(_themeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function validateLabel(props, propName, componentName) {
  if (!props.children && !props.label) {
    return new Error('Required prop label or children was not ' + 'specified in ' + componentName + '.');
  }
}

var RaisedButton = _react2.default.createClass({
  displayName: 'RaisedButton',

  propTypes: {
    backgroundColor: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,

    /**
     * The css class name of the root element.
     */
    className: _react2.default.PropTypes.string,
    disabled: _react2.default.PropTypes.bool,
    disabledBackgroundColor: _react2.default.PropTypes.string,
    disabledLabelColor: _react2.default.PropTypes.string,
    fullWidth: _react2.default.PropTypes.bool,
    label: validateLabel,
    labelColor: _react2.default.PropTypes.string,
    labelPosition: _react2.default.PropTypes.oneOf(['before', 'after']),
    labelStyle: _react2.default.PropTypes.object,
    onMouseDown: _react2.default.PropTypes.func,
    onMouseEnter: _react2.default.PropTypes.func,
    onMouseLeave: _react2.default.PropTypes.func,
    onMouseUp: _react2.default.PropTypes.func,
    onTouchEnd: _react2.default.PropTypes.func,
    onTouchStart: _react2.default.PropTypes.func,
    primary: _react2.default.PropTypes.bool,
    secondary: _react2.default.PropTypes.bool,

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

  mixins: [_stylePropable2.default],

  getDefaultProps: function getDefaultProps() {
    return {
      labelPosition: 'before' };
  },

  // Should be after but we keep it like for now (prevent breaking changes)
  getInitialState: function getInitialState() {
    var zDepth = this.props.disabled ? 0 : 1;
    return {
      hovered: false,
      touched: false,
      initialZDepth: zDepth,
      zDepth: zDepth,
      muiTheme: this.context.muiTheme ? this.context.muiTheme : _themeManager2.default.getMuiTheme(_lightRawTheme2.default)
    };
  },
  getChildContext: function getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
    var zDepth = nextProps.disabled ? 0 : 1;
    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      zDepth: zDepth,
      initialZDepth: zDepth,
      muiTheme: newMuiTheme
    });
  },
  _getBackgroundColor: function _getBackgroundColor() {
    var disabledColor = this.props.disabledBackgroundColor ? this.props.disabledBackgroundColor : this.getTheme().disabledColor;

    return this.props.disabled ? disabledColor : this.props.backgroundColor ? this.props.backgroundColor : this.props.primary ? this.getTheme().primaryColor : this.props.secondary ? this.getTheme().secondaryColor : this.getTheme().color;
  },
  _getLabelColor: function _getLabelColor() {
    var disabledColor = this.props.disabledLabelColor ? this.props.disabledLabelColor : this.getTheme().disabledTextColor;

    return this.props.disabled ? disabledColor : this.props.labelColor ? this.props.labelColor : this.props.primary ? this.getTheme().primaryTextColor : this.props.secondary ? this.getTheme().secondaryTextColor : this.getTheme().textColor;
  },
  getThemeButton: function getThemeButton() {
    return this.state.muiTheme.button;
  },
  getTheme: function getTheme() {
    return this.state.muiTheme.raisedButton;
  },
  getStyles: function getStyles() {

    var amount = this.props.primary || this.props.secondary ? 0.4 : 0.08;
    var styles = {
      root: {
        display: 'inline-block',
        minWidth: this.props.fullWidth ? '100%' : this.getThemeButton().minWidth,
        height: this.getThemeButton().height,
        transition: _transitions2.default.easeOut()
      },
      container: {
        position: 'relative',
        height: '100%',
        width: '100%',
        padding: 0,
        overflow: 'hidden',
        borderRadius: 2,
        transition: _transitions2.default.easeOut(),
        backgroundColor: this._getBackgroundColor(),
        /*
          This is need so that ripples do not bleed
          past border radius.
          See: http://stackoverflow.com/questions/17298739/
            css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
         */
        transform: 'translate3d(0, 0, 0)'
      },
      label: {
        position: 'relative',
        opacity: 1,
        fontSize: '14px',
        letterSpacing: 0,
        textTransform: this.getTheme().textTransform ? this.getTheme().textTransform : this.getThemeButton().textTransform ? this.getThemeButton().textTransform : 'uppercase',
        fontWeight: _typography2.default.fontWeightMedium,
        margin: 0,
        padding: '0px ' + this.state.muiTheme.rawTheme.spacing.desktopGutterLess + 'px',
        userSelect: 'none',
        lineHeight: this.props.style && this.props.style.height ? this.props.style.height : this.getThemeButton().height + 'px',
        color: this._getLabelColor()
      },
      overlay: {
        transition: _transitions2.default.easeOut(),
        top: 0
      },
      overlayWhenHovered: {
        backgroundColor: _colorManipulator2.default.fade(this._getLabelColor(), amount)
      }
    };
    return styles;
  },
  _handleMouseDown: function _handleMouseDown(e) {
    //only listen to left clicks
    if (e.button === 0) {
      this.setState({ zDepth: this.state.initialZDepth + 1 });
    }
    if (this.props.onMouseDown) this.props.onMouseDown(e);
  },
  _handleMouseUp: function _handleMouseUp(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onMouseUp) this.props.onMouseUp(e);
  },
  _handleMouseLeave: function _handleMouseLeave(e) {
    if (!this.refs.container.isKeyboardFocused()) this.setState({ zDepth: this.state.initialZDepth, hovered: false });
    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
  },
  _handleMouseEnter: function _handleMouseEnter(e) {
    if (!this.refs.container.isKeyboardFocused() && !this.state.touch) {
      this.setState({ hovered: true });
    }
    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
  },
  _handleTouchStart: function _handleTouchStart(e) {
    this.setState({
      touch: true,
      zDepth: this.state.initialZDepth + 1
    });
    if (this.props.onTouchStart) this.props.onTouchStart(e);
  },
  _handleTouchEnd: function _handleTouchEnd(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onTouchEnd) this.props.onTouchEnd(e);
  },
  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
    if (keyboardFocused && !this.props.disabled) {
      this.setState({ zDepth: this.state.initialZDepth + 1 });
      var amount = this.props.primary || this.props.secondary ? 0.4 : 0.08;
      _reactDom2.default.findDOMNode(this.refs.overlay).style.backgroundColor = _colorManipulator2.default.fade(this.prepareStyles(this.getStyles().label, this.props.labelStyle).color, amount);
    } else if (!this.state.hovered) {
      this.setState({ zDepth: this.state.initialZDepth });
      _reactDom2.default.findDOMNode(this.refs.overlay).style.backgroundColor = 'transparent';
    }
  },
  render: function render() {
    var _props = this.props;
    var children = _props.children;
    var disabled = _props.disabled;
    var label = _props.label;
    var labelPosition = _props.labelPosition;
    var labelStyle = _props.labelStyle;
    var primary = _props.primary;
    var secondary = _props.secondary;

    var other = _objectWithoutProperties(_props, ['children', 'disabled', 'label', 'labelPosition', 'labelStyle', 'primary', 'secondary']);

    var styles = this.getStyles();

    var labelElement = undefined;
    if (label) {
      labelElement = _react2.default.createElement(
        'span',
        { style: this.prepareStyles(styles.label, labelStyle) },
        label
      );
    }

    var rippleColor = styles.label.color;
    var rippleOpacity = !(primary || secondary) ? 0.1 : 0.16;

    var buttonEventHandlers = disabled ? null : {
      onMouseDown: this._handleMouseDown,
      onMouseUp: this._handleMouseUp,
      onMouseLeave: this._handleMouseLeave,
      onMouseEnter: this._handleMouseEnter,
      onTouchStart: this._handleTouchStart,
      onTouchEnd: this._handleTouchEnd,
      onKeyboardFocus: this._handleKeyboardFocus
    };

    // Place label before or after children.
    var childrenFragment = labelPosition === 'before' ? { labelElement: labelElement, children: children } : { children: children, labelElement: labelElement };
    var enhancedButtonChildren = _children2.default.create(childrenFragment);

    return _react2.default.createElement(
      _paper2.default,
      {
        style: this.mergeStyles(styles.root, this.props.style),
        zDepth: this.state.zDepth },
      _react2.default.createElement(
        _enhancedButton2.default,
        _extends({}, other, buttonEventHandlers, {
          ref: 'container',
          disabled: disabled,
          style: this.mergeStyles(styles.container),
          focusRippleColor: rippleColor,
          touchRippleColor: rippleColor,
          focusRippleOpacity: rippleOpacity,
          touchRippleOpacity: rippleOpacity }),
        _react2.default.createElement(
          'div',
          { ref: 'overlay', style: this.prepareStyles(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered) },
          enhancedButtonChildren
        )
      )
    );
  }
});

exports.default = RaisedButton;
module.exports = exports['default'];