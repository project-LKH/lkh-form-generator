// FormGeneratorApp.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import FormBuilder from "./FormBuilder";
import FormPreview from "./FormPreview";
import { useFormGenerator } from "./useFormGenerator";

const FormGeneratorApp = ({ useForm, onSubmitOverride }) => {
  const { formFields, showBuilder, handlePreview, handleBack, handleDownload } =
    useFormGenerator();

  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {showBuilder ? "Form Builder" : "Form Preview"}
        </Typography>
        {showBuilder ? (
          <FormBuilder onPreview={handlePreview} useForm={useForm} />
        ) : (
          <FormPreview
            fields={formFields}
            onSubmit={useForm ? onSubmitOverride : handleSubmit}
            onBack={handleBack}
            onDownload={handleDownload}
            useForm={useForm}
          />
        )}
      </Box>
    </Container>
  );
};

export default FormGeneratorApp;
