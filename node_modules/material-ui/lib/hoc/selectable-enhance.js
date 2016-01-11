'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectableContainerEnhance = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _themeManager = require('../styles/theme-manager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _stylePropable = require('../mixins/style-propable');

var _stylePropable2 = _interopRequireDefault(_stylePropable);

var _colorManipulator = require('../utils/color-manipulator');

var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

var _lightRawTheme = require('../styles/raw-themes/light-raw-theme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectableContainerEnhance = exports.SelectableContainerEnhance = function SelectableContainerEnhance(Component) {
  var composed = _react2.default.createClass({

    displayName: 'Selectable' + Component.displayName,

    propTypes: {
      children: _react2.default.PropTypes.node,
      selectedItemStyle: _react2.default.PropTypes.object,
      valueLink: _react2.default.PropTypes.shape({
        value: _react2.default.PropTypes.any,
        requestChange: _react2.default.PropTypes.func
      }).isRequired
    },

    contextTypes: {
      muiTheme: _react2.default.PropTypes.object
    },

    childContextTypes: {
      muiTheme: _react2.default.PropTypes.object
    },

    mixins: [_stylePropable2.default],

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
    componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
      var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
      this.setState({ muiTheme: newMuiTheme });
    },

    getValueLink: function getValueLink(props) {
      return props.valueLink || {
        value: props.value,
        requestChange: props.onChange
      };
    },

    _extendChild: function _extendChild(child, styles, selectedItemStyle) {
      var _this = this;

      if (child.type && child.type.displayName === 'ListItem') {
        var selected = this._isChildSelected(child, this.props);
        var selectedChildrenStyles = {};
        if (selected) {
          selectedChildrenStyles = this.mergeStyles(styles, selectedItemStyle);
        }

        var mergedChildrenStyles = this.mergeStyles(child.props.style || {}, selectedChildrenStyles);

        this._keyIndex += 1;

        return _react2.default.cloneElement(child, {
          onTouchTap: function onTouchTap(e) {
            _this._handleItemTouchTap(e, child);
            if (child.props.onTouchTap) {
              child.props.onTouchTap(e);
            }
          },
          key: this._keyIndex,
          style: mergedChildrenStyles,
          nestedItems: child.props.nestedItems.map(function (child) {
            return _this._extendChild(child, styles, selectedItemStyle);
          })
        });
      } else {
        return child;
      }
    },
    _isChildSelected: function _isChildSelected(child, props) {
      var itemValue = this.getValueLink(props).value;
      var childValue = child.props.value;

      return itemValue && itemValue === childValue;
    },
    _handleItemTouchTap: function _handleItemTouchTap(e, item) {
      var valueLink = this.getValueLink(this.props);
      var itemValue = item.props.value;
      var menuValue = valueLink.value;
      if (itemValue !== menuValue) {
        valueLink.requestChange(e, itemValue);
      }
    },
    render: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var selectedItemStyle = _props.selectedItemStyle;

      this._keyIndex = 0;
      var styles = {};

      if (!selectedItemStyle) {
        var textColor = this.state.muiTheme.rawTheme.palette.textColor;
        var selectedColor = _colorManipulator2.default.fade(textColor, 0.2);
        styles = {
          backgroundColor: selectedColor
        };
      }

      var newChildren = _react2.default.Children.map(children, function (child) {
        return _this2._extendChild(child, styles, selectedItemStyle);
      });

      return _react2.default.createElement(
        Component,
        _extends({}, this.props, this.state),
        newChildren
      );
    }
  });

  return composed;
};

exports.default = SelectableContainerEnhance;