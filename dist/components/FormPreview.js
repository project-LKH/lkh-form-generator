"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _FormGenerator = _interopRequireDefault(require("./FormGenerator"));
var _Download = _interopRequireDefault(require("@mui/icons-material/Download"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FormPreview = _ref => {
  let {
    fields,
    onSubmit,
    onBack,
    onDownload
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Paper, {
    elevation: 3
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    p: 3
  }, /*#__PURE__*/_react.default.createElement(_FormGenerator.default, {
    fields: fields,
    onSubmit: onSubmit
  }), /*#__PURE__*/_react.default.createElement(_material.Button, {
    startIcon: /*#__PURE__*/_react.default.createElement(_Download.default, null),
    variant: "contained",
    color: "primary",
    onClick: onDownload,
    fullWidth: true,
    sx: {
      mt: 2
    }
  }, "Download Schema"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "outlined",
    onClick: onBack,
    fullWidth: true,
    sx: {
      mt: 2
    }
  }, "Back to Form Builder")));
};
var _default = exports.default = FormPreview;