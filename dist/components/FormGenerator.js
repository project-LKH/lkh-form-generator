"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _FormField = _interopRequireDefault(require("./FormField"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FormGenerator = _ref => {
  let {
    fields,
    onSubmit
  } = _ref;
  const [formData, setFormData] = (0, _react.useState)({});
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };
  return /*#__PURE__*/_react.default.createElement(_material.Paper, {
    elevation: 3
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    component: "form",
    onSubmit: handleSubmit,
    p: 3
  }, fields.map(field => /*#__PURE__*/_react.default.createElement(_FormField.default, {
    key: field.name,
    field: field,
    value: formData[field.name] || '',
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement(_material.Button, {
    type: "submit",
    variant: "contained",
    color: "primary",
    fullWidth: true,
    sx: {
      mt: 2
    }
  }, "Submit")));
};
var _default = exports.default = FormGenerator;