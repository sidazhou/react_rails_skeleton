'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../mixins/style-propable');

var _stylePropable2 = _interopRequireDefault(_stylePropable);

var _windowListenable = require('../mixins/window-listenable');

var _windowListenable2 = _interopRequireDefault(_windowListenable);

var _timePickerDialog = require('./time-picker-dialog');

var _timePickerDialog2 = _interopRequireDefault(_timePickerDialog);

var _textField = require('../text-field');

var _textField2 = _interopRequireDefault(_textField);

var _themeManager = require('../styles/theme-manager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _lightRawTheme = require('../styles/raw-themes/light-raw-theme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var emptyTime = new Date();
emptyTime.setHours(0);
emptyTime.setMinutes(0);
emptyTime.setSeconds(0);
emptyTime.setMilliseconds(0);

var TimePicker = _react2.default.createClass({
  displayName: 'TimePicker',

  propTypes: {
    autoOk: _react2.default.PropTypes.bool,
    defaultTime: _react2.default.PropTypes.object,
    format: _react2.default.PropTypes.oneOf(['ampm', '24hr']),
    onChange: _react2.default.PropTypes.func,
    onDismiss: _react2.default.PropTypes.func,
    onFocus: _react2.default.PropTypes.func,
    onShow: _react2.default.PropTypes.func,
    onTouchTap: _react2.default.PropTypes.func,
    pedantic: _react2.default.PropTypes.bool,

    /**
     * Override the inline-styles of the root element.
     */
    style: _react2.default.PropTypes.object,
    textFieldStyle: _react2.default.PropTypes.object
  },

  contextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  mixins: [_stylePropable2.default, _windowListenable2.default],

  getDefaultProps: function getDefaultProps() {
    return {
      defaultTime: null,
      format: 'ampm',
      pedantic: false,
      autoOk: false,
      style: {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      time: this.props.defaultTime || emptyTime,
      dialogTime: new Date(),
      muiTheme: this.context.muiTheme ? this.context.muiTheme : _themeManager2.default.getMuiTheme(_lightRawTheme2.default)
    };
  },

  windowListeners: {
    'keyup': '_handleWindowKeyUp'
  },

  formatTime: function formatTime(date) {
    var hours = date.getHours();
    var mins = date.getMinutes().toString();

    if (this.props.format === 'ampm') {
      var isAM = hours < 12;
      hours = hours % 12;
      var additional = isAM ? ' am' : ' pm';
      hours = (hours || 12).toString();

      if (mins.length < 2) mins = '0' + mins;

      if (this.props.pedantic) {
        // Treat midday/midnight specially http://www.nist.gov/pml/div688/times.cfm
        if (hours === '12' && mins === '00') {
          return additional === ' pm' ? '12 noon' : '12 midnight';
        }
      }

      return hours + (mins === '00' ? '' : ':' + mins) + additional;
    }

    hours = hours.toString();

    if (hours.length < 2) hours = '0' + hours;
    if (mins.length < 2) mins = '0' + mins;

    return hours + ':' + mins;
  },
  getTime: function getTime() {
    return this.state.time;
  },
  setTime: function setTime(time) {
    this.setState({ time: time ? time : emptyTime });
  },

  /**
   * Alias for `openDialog()` for an api consistent with TextField.
   */
  focus: function focus() {
    this.openDialog();
  },
  openDialog: function openDialog() {
    this.setState({
      dialogTime: this.getTime()
    });

    this.refs.dialogWindow.show();
  },
  _handleDialogAccept: function _handleDialogAccept(t) {
    this.setTime(t);
    if (this.props.onChange) this.props.onChange(null, t);
  },
  _handleInputFocus: function _handleInputFocus(e) {
    e.target.blur();
    if (this.props.onFocus) this.props.onFocus(e);
  },
  _handleInputTouchTap: function _handleInputTouchTap(e) {
    e.preventDefault();

    this.openDialog();

    if (this.props.onTouchTap) this.props.onTouchTap(e);
  },
  render: function render() {
    var _props = this.props;
    var autoOk = _props.autoOk;
    var format = _props.format;
    var onFocus = _props.onFocus;
    var onTouchTap = _props.onTouchTap;
    var onShow = _props.onShow;
    var onDismiss = _props.onDismiss;
    var style = _props.style;
    var textFieldStyle = _props.textFieldStyle;

    var other = _objectWithoutProperties(_props, ['autoOk', 'format', 'onFocus', 'onTouchTap', 'onShow', 'onDismiss', 'style', 'textFieldStyle']);

    var time = this.state.time;

    return _react2.default.createElement(
      'div',
      { style: this.prepareStyles(style) },
      _react2.default.createElement(_textField2.default, _extends({}, other, {
        style: textFieldStyle,
        ref: 'input',
        value: time === emptyTime ? null : this.formatTime(time),
        onFocus: this._handleInputFocus,
        onTouchTap: this._handleInputTouchTap })),
      _react2.default.createElement(_timePickerDialog2.default, {
        ref: 'dialogWindow',
        initialTime: this.state.dialogTime,
        onAccept: this._handleDialogAccept,
        onShow: onShow,
        onDismiss: onDismiss,
        format: format,
        autoOk: autoOk })
    );
  }
});

exports.default = TimePicker;
module.exports = exports['default'];