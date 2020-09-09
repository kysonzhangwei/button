'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNative2 = require('@ant-design/react-native');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _visable = require('../_utils/visable');

var _utils = require('../_utils');

var _InitComponent = require('../_utils/InitComponent');

var _InitComponent2 = _interopRequireDefault(_InitComponent);

var _formatStyle = require('../_utils/formatStyle');

var _formatStyle2 = _interopRequireDefault(_formatStyle);

var _Button2 = require('./style/Button.js');

var _Button3 = _interopRequireDefault(_Button2);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * Button按钮
   * Created by Li Jie on 2017/12/26.
   * Update by pangys on 2019/04/04.{更新icon}
   */

//组件名称
var selfName = "Button";

var _Button = function (_PureComponent) {
    _inherits(_Button, _PureComponent);

    function _Button(props) {
        _classCallCheck(this, _Button);

        var _this = _possibleConstructorReturn(this, (_Button.__proto__ || Object.getPrototypeOf(_Button)).call(this, props));

        _initialiseProps.call(_this);

        var type = _this.props.type;

        //字体颜色

        var color = type === "default" ? "#000" : type === "ghost" ? "#108ee9" : "#fff";

        _this.state = {
            isClick: true,
            disabled: (0, _utils.boolSwitch)(_this.props.disabled),
            visable: (0, _utils.boolSwitch)(_this.props.visable),
            containerStyle: _this.props.containerStyle,
            textStyle: _extends({
                fontSize: (0, _utils.px2dp)(18),
                //color: color,
                fontWeight: "normal"
            }, _this.props.textStyle),
            text: _this.props.text
        };

        var autoref = props.autoref;

        _this.id = autoref ? 'Button_' + autoref : (0, _uniqueId2.default)('button_auto_ref');

        window.$instanceMap.set(_this.id, _this);

        return _this;
    }

    /**
     * 设置按钮是否可见
     * @param visable
     */

    /**
     * 获取按钮是否可见
     * @returns {Boolean|*}
     */

    /**
     * 设置按钮不可用状态
     */

    /**
     * 获取按钮是否可用
     */

    /**
     * 设置字体加粗
     * @param bold
     */

    /**
     * 获取字体加粗值
     * @returns {String|string|*}
     */

    _createClass(_Button, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getBold();
        }
    }, {
        key: 'setContainerStyle',
        value: function setContainerStyle(containerStyle) {
            this.setState({
                containerStyle: _extends({}, this.state.containerStyle, this.toJSX(containerStyle))
            });
        }
    }, {
        key: 'setTextStyle',
        value: function setTextStyle(textStyle) {
            this.setState({
                textStyle: _extends({}, this.state.textStyle, this.toJSX(textStyle))
            });
        }
    }, {
        key: 'toJSX',
        value: function toJSX(style) {
            if (!style) {
                return null;
            }
            return new _formatStyle2.default(style).toJSXString();
        }

        /**
         * 返回当前组件所有元素
         */

        // 获取覆盖样式

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
                this.setState({
                    disabled: (0, _utils.boolSwitch)(nextProps.disabled),
                    text: nextProps.text
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.$instanceMap.delete(this.id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                type = _props.type,
                size = _props.size,
                icon = _props.icon,
                loading = _props.loading;
            var containerStyle = this.state.containerStyle;

            var _style = this.getStyle(type, containerStyle);
            var _props$themeStyle = this.props.themeStyle,
                button_text = _props$themeStyle.button_text,
                button_bg = _props$themeStyle.button_bg,
                button_icon = _props$themeStyle.button_icon,
                button_text_disabled = _props$themeStyle.button_text_disabled,
                button_bg_disabled = _props$themeStyle.button_bg_disabled,
                button_icon_disabled = _props$themeStyle.button_icon_disabled;

            return _react2.default.createElement(_reactNative2.Button, {
                ref: this.id,
                type: type,
                size: size,
                disabled: this.state.disabled,
                styles: _style
                //   activeStyle={{opacity:0.9}}
                , style: [type === "default" && { backgroundColor: this.state.disabled ? button_bg_disabled : button_bg }, this.state.visable ? containerStyle : [containerStyle, _extends({}, _visable.visStyle)]],
                onPress: this.clickFn,
                loading: (0, _utils.boolSwitch)(loading)
            }, icon ? _react2.default.createElement(_reactNative.Text, null, _react2.default.createElement(_icon2.default, { type: icon, color: [type === "default" && { color: this.state.disabled ? button_icon_disabled : button_icon }, this.state.textStyle.color] }), '  ') : null, _react2.default.createElement(_reactNative.Text, {
                ref: function ref(t) {
                    return _this2.BtnText = t;
                },
                style: [this.state.disabled && (type === 'ghost' || type === "default") && { color: 'rgba(0,0,0,.1)' }, type === "default" && { color: this.state.disabled ? button_text_disabled : button_text }, this.state.textStyle]
            }, this.state.text));
        }
    }]);

    return _Button;
}(_react.PureComponent);

_Button.defaultProps = {
    text: 'default',
    type: 'default',
    visable: 'true',
    size: 'large',
    disabled: 'false'
};

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setVisable = function (visable) {
        _this3.setState({ visable: visable });
    };

    this.getVisable = function () {
        return _this3.state.visable;
    };

    this.setDisabled = function (disabled) {
        _this3.setState({ disabled: disabled });
    };

    this.getDisabled = function () {
        return _this3.state.disabled;
    };

    this.setBold = function (bold) {

        if (!bold) return;

        if (_this3.state.textStyle.fontWeight !== bold) {

            var newStyle = _extends({}, _this3.state.textStyle, {
                fontWeight: bold
            });

            _this3.setState({
                textStyle: newStyle
            });
        }
    };

    this.getBold = function () {
        var boldStatus = _this3.state.textStyle.fontWeight;
        return boldStatus;
    };

    this.toJson = function () {
        return _extends({}, _this3.props, _this3.state, {
            id: _this3.props.autoref
        });
    };

    this.clickFn = function () {
        window.$KeyboardDismiss(); // 点击按钮前，先收起键盘
        var isClick = _this3.state.isClick;

        if (isClick) {

            _this3.setState({ isClick: false });

            var onClick = _this3.props.onClick;

            var obj = {
                componentName: selfName
            };
            onClick && onClick(obj);

            var that = _this3;
            setTimeout(function () {
                // 设置延迟事件，1秒后将执行
                that.setState({ isClick: true }); // 将isClick设置为true
            }, 1000);
        }
    };

    this.getStyle = function (type, containerStyle) {
        var typeStyle = {}; // 覆盖样式
        if (containerStyle && containerStyle.backgroundColor) {
            typeStyle[type + "Highlight"] = {
                backgroundColor: containerStyle.backgroundColor,
                borderColor: containerStyle.backgroundColor
            };
            typeStyle[type + "Raw"] = {
                borderColor: containerStyle.backgroundColor
            };
        }

        return _reactNative.StyleSheet.create((0, _Button3.default)(typeStyle));
    };
};

_Button.propTypes = {
    /* 设置按钮文本 |  */
    text: _propTypes2.default.string.isRequired,
    /* 是否可用  | {true, false} */
    disabled: _propTypes2.default.string,
    /* 按钮类型 | {"primary","ghost","warning","default"} */
    type: _propTypes2.default.string,
    /* 组件尺寸 | {"large","small"} */
    size: _propTypes2.default.string,
    /* 点击事件(事件对象：$event: {componentName: 'Button'}) |  */
    onClick: _propTypes2.default.func,
    /* 按钮是否可见 | {true, false} */
    visable: _propTypes2.default.string,
    /* 组件样式（不包含文字） |  */
    containerStyle: _propTypes2.default.object,
    /* 组件文字样式 |  */
    textStyle: _propTypes2.default.object,
    /* icon 类型 | */
    icon: _propTypes2.default.string,
    /* 按钮文字前 提示的加载中 | */
    loading: _propTypes2.default.string,
    /* 组件初始化方法(事件对象：$event: 组件实例) |  */
    init: _propTypes2.default.func
};

exports.default = (0, _InitComponent2.default)(_Button);