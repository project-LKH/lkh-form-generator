import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const FormField = ({ field, value, onChange }) => {
  const { label, type, name, required, options } = field;

  if (type === 'select') {
    return (
      <TextField
        select
        fullWidth
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        margin="normal"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }

  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      margin="normal"
    />
  );
};

export default FormField;
