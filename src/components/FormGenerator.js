import React, { useState } from 'react';
import { Button, Paper, Box } from '@mui/material';
import FormField from './FormField';

const FormGenerator = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Paper elevation={3}>
      <Box component="form" onSubmit={handleSubmit} p={3}>
        {fields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={formData[field.name] || ''}
            onChange={handleChange}
          />
        ))}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default FormGenerator;
