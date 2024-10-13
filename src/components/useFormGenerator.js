// useFormGenerator.js
import { useState } from 'react';

export const useFormGenerator = (initialFields = null) => {
  const [formFields, setFormFields] = useState(initialFields);
  const [showBuilder, setShowBuilder] = useState(true);

  const handlePreview = (fields) => {
    setFormFields(fields);
    setShowBuilder(false);
  };

  const handleBack = () => {
    setShowBuilder(true);
  };

  const handleDownload = () => {
    const schema = JSON.stringify(formFields, null, 2);
    const blob = new Blob([schema], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "form-schema.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return {
    formFields,
    showBuilder,
    handlePreview,
    handleBack,
    handleDownload
  };
};
