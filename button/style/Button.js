'use strict';

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
}; /**
    * Created by Li Jie on 2018/1/10.
    * 复写Button样式
    */

var _index = require('@ant-design/react-native/lib/button/style/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../lib/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (props) {
  var container = _index2.default.container;

  var defaultHighlight = _extends({}, _index2.default.defaultHighlight, props.defaultHighlight);

  var primaryHighlight = _extends({}, _index2.default.primaryHighlight, props.primaryHighlight);

  var ghostHighlight = _extends({}, _index2.default.ghostHighlight, props.ghostHighlight);

  var warningHighlight = _extends({}, _index2.default.warningHighlight, props.warningHighlight);

  var wrapperStyle = _extends({}, _index2.default.wrapperStyle, props.wrapperStyle);

  var largeRaw = _extends({}, _index2.default.largeRaw, props.largeRaw);

  var smallRaw = _extends({}, _index2.default.smallRaw, props.smallRaw);

  var defaultRaw = _extends({}, _index2.default.defaultRaw, props.defaultRaw);

  var primaryRaw = _extends({}, _index2.default.primaryRaw, props.primaryRaw);

  var ghostRaw = _extends({}, _index2.default.ghostRaw, props.ghostRaw);

  var warningRaw = _extends({}, _index2.default.warningRaw, props.warningRaw);

  var defaultDisabledRaw = _extends({}, _index2.default.defaultDisabledRaw, props.defaultDisabledRaw);

  var primaryDisabledRaw = _extends({}, _index2.default.primaryDisabledRaw, props.primaryDisabledRaw);

  var ghostDisabledRaw = _extends({}, _index2.default.ghostDisabledRaw, props.ghostDisabledRaw);

  var warningDisabledRaw = _extends({}, _index2.default.warningDisabledRaw, props.warningDisabledRaw);

  var defaultHighlightText = _extends({}, _index2.default.defaultHighlightText, props.defaultHighlightText);

  var primaryHighlightText = _extends({}, _index2.default.primaryHighlightText, props.primaryHighlightText);

  var ghostHighlightText = _extends({}, _index2.default.ghostHighlightText, props.ghostHighlightText);

  var warningHighlightText = _extends({}, _index2.default.warningHighlightText, props.warningHighlightText);

  var largeRawText = _extends({}, _index2.default.largeRawText, props.largeRawText);

  var smallRawText = _extends({}, _index2.default.smallRawText, props.smallRawText);

  var defaultRawText = _extends({}, _index2.default.defaultRawText, props.defaultRawText);

  var primaryRawText = _extends({}, _index2.default.primaryRawText, props.primaryRawText);

  var ghostRawText = _extends({}, _index2.default.ghostRawText, props.ghostRawText);

  var warningRawText = _extends({}, _index2.default.warningRawText, props.warningRawText);

  var defaultDisabledRawText = _extends({}, _index2.default.defaultDisabledRawText, props.defaultDisabledRawText);

  var primaryDisabledRawText = _extends({}, _index2.default.primaryDisabledRawText, props.primaryDisabledRawText);

  var ghostDisabledRawText = _extends({}, _index2.default.ghostDisabledRawText, props.ghostDisabledRawText);

  var warningDisabledRawText = _extends({}, _index2.default.warningDisabledRawText, props.warningDisabledRawText);

  var indicator = _extends({}, _index2.default.indicator, props.indicator);

  var ButtonMapper = _index4.default.ButtonMapper;

  for (var pop in ButtonMapper) {
    var elMapper = ButtonMapper[pop];
    for (var sPop in elMapper) {
      if (props[elMapper[sPop]]) {
        switch (pop) {
          case 'container':
            container[sPop] = props[elMapper[sPop]];
            break;
          case 'defaultHighlight':
            defaultHighlight[sPop] = props[elMapper[sPop]];
            break;
          case 'primaryHighlight':
            primaryHighlight[sPop] = props[elMapper[sPop]];
            break;
          case 'ghostHighlight':
            ghostHighlight[sPop] = props[elMapper[sPop]];
            break;
          case 'warningHighlight':
            warningHighlight[sPop] = props[elMapper[sPop]];
            break;
          case 'wrapperStyle':
            wrapperStyle[sPop] = props[elMapper[sPop]];
            break;
          case 'largeRaw':
            largeRaw[sPop] = props[elMapper[sPop]];
            break;
          case 'smallRaw':
            smallRaw[sPop] = props[elMapper[sPop]];
            break;
          case 'defaultRaw':
            defaultRaw[sPop] = props[elMapper[sPop]];
            break;
          case 'primaryRaw':
            primaryRaw[sPop] = props[elMapper[sPop]];
            break;
          case 'ghostRaw':
            ghostRaw[sPop] = props[elMapper[sPop]];
            break;
          case 'warningRaw':
            warningRaw[sPop] = props[elMapper[sPop]];
            break;
          case 'defaultDisabledRaw':
            defaultDisabledRaw[sPop] = props[elMapper[sPop]];
            break;
          case 'primaryDisabledRaw':
            primaryDisabledRaw[sPop] = props[elMapper[sPop]];
            break;
          case 'ghostDisabledRaw':
            ghostDisabledRaw[sPop] = props[elMapper[sPop]];
            break;
          case 'warningDisabledRaw':
            warningDisabledRaw[sPop] = props[elMapper[sPop]];
            break;
          case 'defaultHighlightText':
            defaultHighlightText[sPop] = props[elMapper[sPop]];
            break;
          case 'primaryHighlightText':
            primaryHighlightText[sPop] = props[elMapper[sPop]];
            break;
          case 'ghostHighlightText':
            ghostHighlightText[sPop] = props[elMapper[sPop]];
            break;
          case 'warningHighlightText':
            warningHighlightText[sPop] = props[elMapper[sPop]];
            break;
          case 'largeRawText':
            largeRawText[sPop] = props[elMapper[sPop]];
            break;
          case 'smallRawText':
            smallRawText[sPop] = props[elMapper[sPop]];
            break;
          case 'defaultRawText':
            defaultRawText[sPop] = props[elMapper[sPop]];
            break;
          case 'primaryRawText':
            primaryRawText[sPop] = props[elMapper[sPop]];
            break;
          case 'ghostRawText':
            ghostRawText[sPop] = props[elMapper[sPop]];
            break;
          case 'warningRawText':
            warningRawText[sPop] = props[elMapper[sPop]];
            break;
          case 'defaultDisabledRawText':
            defaultDisabledRawText[sPop] = props[elMapper[sPop]];
            break;
          case 'primaryDisabledRawText':
            primaryDisabledRawText[sPop] = props[elMapper[sPop]];
            break;
          case 'ghostDisabledRawText':
            ghostDisabledRawText[sPop] = props[elMapper[sPop]];
            break;
          case 'warningDisabledRawText':
            warningDisabledRawText[sPop] = props[elMapper[sPop]];
            break;
          case 'indicator':
            indicator[sPop] = props[elMapper[sPop]];
            break;
        }
      }
    }
  }
  return _extends({}, _index2.default, {
    container: container,
    defaultHighlight: defaultHighlight,
    primaryHighlight: primaryHighlight,
    ghostHighlight: ghostHighlight,
    warningHighlight: warningHighlight,
    wrapperStyle: wrapperStyle,
    largeRaw: largeRaw,
    smallRaw: smallRaw,
    defaultRaw: defaultRaw,
    primaryRaw: primaryRaw,
    ghostRaw: ghostRaw,
    warningRaw: warningRaw,
    defaultDisabledRaw: defaultDisabledRaw,
    primaryDisabledRaw: primaryDisabledRaw,
    ghostDisabledRaw: ghostDisabledRaw,
    warningDisabledRaw: warningDisabledRaw,
    defaultHighlightText: defaultHighlightText,
    primaryHighlightText: primaryHighlightText,
    ghostHighlightText: ghostHighlightText,
    warningHighlightText: warningHighlightText,
    largeRawText: largeRawText,
    smallRawText: smallRawText,
    defaultRawText: defaultRawText,
    primaryRawText: primaryRawText,
    ghostRawText: ghostRawText,
    warningRawText: warningRawText,
    defaultDisabledRawText: defaultDisabledRawText,
    primaryDisabledRawText: primaryDisabledRawText,
    ghostDisabledRawText: ghostDisabledRawText,
    warningDisabledRawText: warningDisabledRawText,
    indicator: indicator
  });
};