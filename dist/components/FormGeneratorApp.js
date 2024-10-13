"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _FormBuilder = _interopRequireDefault(require("./FormBuilder"));
var _FormPreview = _interopRequireDefault(require("./FormPreview"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FormGeneratorApp = () => {
  const [formFields, setFormFields] = (0, _react.useState)(null);
  const [showBuilder, setShowBuilder] = (0, _react.useState)(true);
  const handlePreview = fields => {
    setFormFields(fields);
    setShowBuilder(false);
  };
  const handleBack = () => {
    setShowBuilder(true);
  };
  const handleSubmit = formData => {
    console.log('Form submitted:', formData);
  };
  const handleDownload = () => {
    const schema = JSON.stringify(formFields, null, 2);
    const blob = new Blob([schema], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form-schema.json';
    link.click();
    URL.revokeObjectURL(url);
  };
  return /*#__PURE__*/_react.default.createElement(_material.Container, {
    maxWidth: "sm"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      my: 4
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h4",
    component: "h1",
    gutterBottom: true
  }, showBuilder ? 'Form Builder' : 'Form Preview'), showBuilder ? /*#__PURE__*/_react.default.createElement(_FormBuilder.default, {
    onPreview: handlePreview
  }) : /*#__PURE__*/_react.default.createElement(_FormPreview.default, {
    fields: formFields,
    onSubmit: handleSubmit,
    onBack: handleBack,
    onDownload: handleDownload
  })));
};
var _default = exports.default = FormGeneratorApp;