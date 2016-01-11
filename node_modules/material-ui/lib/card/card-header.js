'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _avatar = require('../avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _stylePropable = require('../mixins/style-propable');

var _stylePropable2 = _interopRequireDefault(_stylePropable);

var _themeManager = require('../styles/theme-manager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _lightRawTheme = require('../styles/raw-themes/light-raw-theme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardHeader = _react2.default.createClass({
  displayName: 'CardHeader',

  propTypes: {
    actAsExpander: _react2.default.PropTypes.bool,
    avatar: _react2.default.PropTypes.node,
    children: _react2.default.PropTypes.node,
    expandable: _react2.default.PropTypes.bool,
    showExpandableButton: _react2.default.PropTypes.bool,

    /**
     * Override the inline-styles of the root element.
     */
    style: _react2.default.PropTypes.object,
    subtitle: _react2.default.PropTypes.node,
    subtitleColor: _react2.default.PropTypes.string,
    subtitleStyle: _react2.default.PropTypes.object,
    textStyle: _react2.default.PropTypes.object,
    title: _react2.default.PropTypes.node,
    titleColor: _react2.default.PropTypes.string,
    titleStyle: _react2.default.PropTypes.object
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
      titleColor: _styles2.default.Colors.darkBlack,
      subtitleColor: _styles2.default.Colors.lightBlack,
      avatar: null
    };
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
  getStyles: function getStyles() {
    return {
      root: {
        height: 72,
        padding: 16,
        fontWeight: _styles2.default.Typography.fontWeightMedium,
        boxSizing: 'border-box',
        position: 'relative'
      },
      text: {
        display: 'inline-block',
        verticalAlign: 'top'
      },
      avatar: {
        marginRight: 16
      },
      title: {
        color: this.props.titleColor,
        display: 'block',
        fontSize: 15
      },
      subtitle: {
        color: this.props.subtitleColor,
        display: 'block',
        fontSize: 14
      }
    };
  },
  render: function render() {
    var styles = this.getStyles();
    var rootStyle = this.prepareStyles(styles.root, this.props.style);
    var textStyle = this.prepareStyles(styles.text, this.props.textStyle);
    var titleStyle = this.prepareStyles(styles.title, this.props.titleStyle);
    var subtitleStyle = this.prepareStyles(styles.subtitle, this.props.subtitleStyle);

    var avatar = this.props.avatar;
    if (_react2.default.isValidElement(this.props.avatar)) {
      var avatarMergedStyle = this.mergeStyles(styles.avatar, avatar.props.style);
      avatar = _react2.default.cloneElement(avatar, { style: avatarMergedStyle });
    } else if (avatar !== null) {
      avatar = _react2.default.createElement(_avatar2.default, { src: this.props.avatar, style: styles.avatar });
    }

    return _react2.default.createElement(
      'div',
      _extends({}, this.props, { style: rootStyle }),
      avatar,
      _react2.default.createElement(
        'div',
        { style: textStyle },
        _react2.default.createElement(
          'span',
          { style: titleStyle },
          this.props.title
        ),
        _react2.default.createElement(
          'span',
          { style: subtitleStyle },
          this.props.subtitle
        )
      ),
      this.props.children
    );
  }
});

exports.default = CardHeader;
module.exports = exports['default'];