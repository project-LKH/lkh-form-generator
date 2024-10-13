import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import FormBuilder from './FormBuilder';
import FormPreview from './FormPreview';

const FormGeneratorApp = () => {
  const [formFields, setFormFields] = useState(null);
  const [showBuilder, setShowBuilder] = useState(true);

  const handlePreview = (fields) => {
    setFormFields(fields);
    setShowBuilder(false);
  };

  const handleBack = () => {
    setShowBuilder(true);
  };

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
  };

  const handleDownload = () => {
    const schema = JSON.stringify(formFields, null, 2);
    const blob = new Blob([schema], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form-schema.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {showBuilder ? 'Form Builder' : 'Form Preview'}
        </Typography>
        {showBuilder ? (
          <FormBuilder onPreview={handlePreview} />
        ) : (
          <FormPreview 
            fields={formFields}
            onSubmit={handleSubmit}
            onBack={handleBack}
            onDownload={handleDownload}
          />
        )}
      </Box>
    </Container>
  );
};

export default FormGeneratorApp;
