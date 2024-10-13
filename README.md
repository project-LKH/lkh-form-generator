# Form Generator Package

A flexible and reusable React component library for building dynamic forms.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Using the Full App](#using-the-full-app)
  - [Using Individual Components](#using-individual-components)
- [Components](#components)
  - [FormGeneratorApp](#formgeneratorapp)
  - [FormBuilder](#formbuilder)
  - [FormPreview](#formpreview)
  - [FormGenerator](#formgenerator)
- [API Reference](#api-reference)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install form-generator
```
## Usage

### Using the Full App

To use the complete form generator application:

```jsx
import React from 'react';
import { FormGeneratorApp } from 'form-generator-package';

function App() {
  return (
    <div>
      <h1>My Form Generator</h1>
      <FormGeneratorApp />
    </div>
  );
}

export default App;
```
### Using Individual Components

```jsx
import React from 'react';
import { FormBuilder, FormPreview } from 'form-generator-package';

function CustomFormBuilder() {
  const handlePreview = (fields) => {
    // Custom preview logic
  };

  return <FormBuilder onPreview={handlePreview} />;
}

export default CustomFormBuilder;
```
## Components

### FormGeneratorApp

The main component that includes the entire form generation workflow.

### FormBuilder

A component for building form schemas with various field types.

### FormPreview

A component for previewing and testing generated forms.

### FormGenerator

A component that renders a form based on a provided schema.

## API Reference

### FormGeneratorApp

Props: None

### FormBuilder

Props:

- onPreview: Function(fields) - Callback when the preview button is clicked

### FormPreview

Props:

- fields: Array - The form schema
- onSubmit: Function(formData) - Callback when the form is submitted
- onBack: Function - Callback to return to the form builder
- onDownload: Function - Callback to download the form schema

### FormGenerator

Props:

- fields: Array - The form schema
- onSubmit: Function(formData) - Callback when the form is submitted

## License

This project is licensed under the MIT License.

