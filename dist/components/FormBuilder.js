"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
var _UploadFile = _interopRequireDefault(require("@mui/icons-material/UploadFile"));
var _Preview = _interopRequireDefault(require("@mui/icons-material/Preview"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const fieldTypes = ['text', 'email', 'password', 'number', 'select'];
const FormBuilder = _ref => {
  let {
    onPreview
  } = _ref;
  const [fields, setFields] = (0, _react.useState)([]);
  const [currentField, setCurrentField] = (0, _react.useState)({
    label: '',
    type: 'text',
    name: '',
    required: false,
    options: ''
  });
  const fileInputRef = (0, _react.useRef)(null);
  const handleFieldChange = e => {
    const {
      name,
      value
    } = e.target;
    setCurrentField(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const addField = () => {
    const newField = {
      ...currentField,
      options: currentField.type === 'select' ? currentField.options.split(',').map(option => ({
        value: option.trim(),
        label: option.trim()
      })) : undefined
    };
    setFields(prev => [...prev, newField]);
    setCurrentField({
      label: '',
      type: 'text',
      name: '',
      required: false,
      options: ''
    });
  };
  const removeField = index => {
    setFields(prev => prev.filter((_, i) => i !== index));
  };
  const handleFileUpload = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        try {
          const schema = JSON.parse(e.target.result);
          setFields(schema);
        } catch (error) {
          console.error('Error parsing JSON:', error);
          alert('Invalid JSON file. Please upload a valid schema.');
        }
      };
      reader.readAsText(file);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_material.Paper, {
    elevation: 3
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    p: 3
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    label: "Field Label",
    name: "label",
    value: currentField.label,
    onChange: handleFieldChange,
    margin: "normal"
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    label: "Field Name",
    name: "name",
    value: currentField.name,
    onChange: handleFieldChange,
    margin: "normal"
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    select: true,
    fullWidth: true,
    label: "Field Type",
    name: "type",
    value: currentField.type,
    onChange: handleFieldChange,
    margin: "normal"
  }, fieldTypes.map(type => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    key: type,
    value: type
  }, type))), currentField.type === 'select' && /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    label: "Options (comma-separated)",
    name: "options",
    value: currentField.options,
    onChange: handleFieldChange,
    margin: "normal"
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    select: true,
    fullWidth: true,
    label: "Required",
    name: "required",
    value: currentField.required,
    onChange: handleFieldChange,
    margin: "normal"
  }, /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    value: true
  }, "Yes"), /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    value: false
  }, "No")), /*#__PURE__*/_react.default.createElement(_material.Button, {
    startIcon: /*#__PURE__*/_react.default.createElement(_Add.default, null),
    variant: "contained",
    color: "primary",
    onClick: addField,
    fullWidth: true,
    sx: {
      mt: 2
    }
  }, "Add Field"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    startIcon: /*#__PURE__*/_react.default.createElement(_UploadFile.default, null),
    variant: "outlined",
    color: "primary",
    onClick: () => fileInputRef.current.click(),
    fullWidth: true,
    sx: {
      mt: 2
    }
  }, "Upload Schema"), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    ref: fileInputRef,
    style: {
      display: 'none'
    },
    onChange: handleFileUpload,
    accept: ".json"
  }), /*#__PURE__*/_react.default.createElement(_material.List, {
    sx: {
      mt: 2
    }
  }, fields.map((field, index) => /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    key: index
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: field.label,
    secondary: `${field.type} - ${field.name}`
  }), /*#__PURE__*/_react.default.createElement(_material.ListItemSecondaryAction, null, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    edge: "end",
    "aria-label": "delete",
    onClick: () => removeField(index)
  }, /*#__PURE__*/_react.default.createElement(_Delete.default, null)))))), /*#__PURE__*/_react.default.createElement(_material.Button, {
    startIcon: /*#__PURE__*/_react.default.createElement(_Preview.default, null),
    variant: "contained",
    color: "primary",
    onClick: () => onPreview(fields),
    fullWidth: true,
    sx: {
      mt: 2
    }
  }, "Preview Form")));
};
var _default = exports.default = FormBuilder;