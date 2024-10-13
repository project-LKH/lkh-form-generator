"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FormField = _ref => {
  let {
    field,
    value,
    onChange
  } = _ref;
  const {
    label,
    type,
    name,
    required,
    options
  } = field;
  if (type === 'select') {
    return /*#__PURE__*/_react.default.createElement(_material.TextField, {
      select: true,
      fullWidth: true,
      label: label,
      name: name,
      value: value,
      onChange: onChange,
      required: required,
      margin: "normal"
    }, options.map(option => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
      key: option.value,
      value: option.value
    }, option.label)));
  }
  return /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    label: label,
    type: type,
    name: name,
    value: value,
    onChange: onChange,
    required: required,
    margin: "normal"
  });
};
var _default = exports.default = FormField;