'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enhancedSwitch = require('./enhanced-switch');

var _enhancedSwitch2 = _interopRequireDefault(_enhancedSwitch);

var _stylePropable = require('./mixins/style-propable');

var _stylePropable2 = _interopRequireDefault(_stylePropable);

var _transitions = require('./styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _checkBoxOutlineBlank = require('./svg-icons/toggle/check-box-outline-blank');

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = require('./svg-icons/toggle/check-box');

var _checkBox2 = _interopRequireDefault(_checkBox);

var _lightRawTheme = require('./styles/raw-themes/light-raw-theme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('./styles/theme-manager');

var _themeManager2 = _interopRequireDefault(_themeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Checkbox = _react2.default.createClass({
  displayName: 'Checkbox',

  propTypes: {
    checked: _react2.default.PropTypes.bool,
    checkedIcon: _react2.default.PropTypes.element,
    defaultChecked: _react2.default.PropTypes.bool,
    disabled: _react2.default.PropTypes.bool,
    iconStyle: _react2.default.PropTypes.object,
    labelPosition: _react2.default.PropTypes.oneOf(['left', 'right']),
    labelStyle: _react2.default.PropTypes.object,
    onCheck: _react2.default.PropTypes.func,
    unCheckedIcon: _react2.default.PropTypes.element,
    valueLink: _react2.default.PropTypes.object
  },

  contextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  mixins: [_stylePropable2.default],

  getInitialState: function getInitialState() {
    return {
      switched: this.props.checked || this.props.defaultChecked || this.props.valueLink && this.props.valueLink.value || false,
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
    this.setState({
      muiTheme: newMuiTheme,
      switched: this.props.checked !== nextProps.checked ? nextProps.checked : this.state.switched
    });
  },
  getTheme: function getTheme() {
    return this.state.muiTheme.checkbox;
  },
  getStyles: function getStyles() {
    var checkboxSize = 24;
    var styles = {
      icon: {
        height: checkboxSize,
        width: checkboxSize
      },
      check: {
        position: 'absolute',
        opacity: 0,
        transform: 'scale(0)',
        transitionOrigin: '50% 50%',
        transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('0ms', 'transform', '450ms'),
        fill: this.getTheme().checkedColor
      },
      box: {
        position: 'absolute',
        opacity: 1,
        fill: this.getTheme().boxColor,
        transition: _transitions2.default.easeOut('2s', null, '200ms')
      },
      checkWhenSwitched: {
        opacity: 1,
        transform: 'scale(1)',
        transition: _transitions2.default.easeOut('0ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('800ms', 'transform', '0ms')
      },
      boxWhenSwitched: {
        transition: _transitions2.default.easeOut('100ms', null, '0ms'),
        fill: this.getTheme().checkedColor
      },
      checkWhenDisabled: {
        fill: this.getTheme().disabledColor
      },
      boxWhenDisabled: {
        fill: this.getTheme().disabledColor
      },
      label: {
        color: this.props.disabled ? this.getTheme().labelDisabledColor : this.getTheme().labelColor
      }
    };

    return styles;
  },
  isChecked: function isChecked() {
    return this.refs.enhancedSwitch.isSwitched();
  },
  setChecked: function setChecked(newCheckedValue) {
    this.refs.enhancedSwitch.setSwitched(newCheckedValue);
  },
  _handleCheck: function _handleCheck(e, isInputChecked) {
    if (this.props.onCheck) this.props.onCheck(e, isInputChecked);
  },
  _handleStateChange: function _handleStateChange(newSwitched) {
    this.setState({ switched: newSwitched });
  },
  render: function render() {
    var _props = this.props;
    var iconStyle = _props.iconStyle;
    var onCheck = _props.onCheck;
    var checkedIcon = _props.checkedIcon;
    var unCheckedIcon = _props.unCheckedIcon;

    var other = _objectWithoutProperties(_props, ['iconStyle', 'onCheck', 'checkedIcon', 'unCheckedIcon']);

    var styles = this.getStyles();
    var boxStyles = this.mergeStyles(styles.box, this.state.switched && styles.boxWhenSwitched, iconStyle, this.props.disabled && styles.boxWhenDisabled);
    var checkStyles = this.mergeStyles(styles.check, this.state.switched && styles.checkWhenSwitched, iconStyle, this.props.disabled && styles.checkWhenDisabled);

    var checkedElement = checkedIcon ? _react2.default.cloneElement(checkedIcon, {
      style: this.mergeStyles(checkStyles, checkedIcon.props.style)
    }) : _react2.default.createElement(_checkBox2.default, {
      style: checkStyles
    });

    var unCheckedElement = unCheckedIcon ? _react2.default.cloneElement(unCheckedIcon, {
      style: this.mergeStyles(boxStyles, unCheckedIcon.props.style)
    }) : _react2.default.createElement(_checkBoxOutlineBlank2.default, {
      style: boxStyles
    });

    var checkboxElement = _react2.default.createElement(
      'div',
      null,
      unCheckedElement,
      checkedElement
    );

    var rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
    var mergedIconStyle = this.mergeStyles(styles.icon, iconStyle);

    var labelStyle = this.mergeStyles(styles.label, this.props.labelStyle);

    var enhancedSwitchProps = {
      ref: 'enhancedSwitch',
      inputType: 'checkbox',
      switched: this.state.switched,
      switchElement: checkboxElement,
      rippleColor: rippleColor,
      iconStyle: mergedIconStyle,
      onSwitch: this._handleCheck,
      labelStyle: labelStyle,
      onParentShouldUpdate: this._handleStateChange,
      defaultSwitched: this.props.defaultChecked,
      labelPosition: this.props.labelPosition ? this.props.labelPosition : 'right'
    };

    return _react2.default.createElement(_enhancedSwitch2.default, _extends({}, other, enhancedSwitchProps));
  }
});

exports.default = Checkbox;
module.exports = exports['default'];