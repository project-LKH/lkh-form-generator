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
npm install lkh-form-generator
```
## Usage

### Using the Full App

To use the complete form generator application:

```jsx
import React from 'react';
import { FormGeneratorApp } from 'lkh-form-builder';

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
import { FormBuilder, FormPreview } from 'lkh-form-builder';

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

- fields: Array - The form schema. eg:
```json
[
  {
    "label": "Full Name",
    "type": "text",
    "name": "fullName",
    "required": true
  },
  {
    "label": "Email Address",
    "type": "email",
    "name": "email",
    "required": true
  },
  {
    "label": "Age",
    "type": "number",
    "name": "age",
    "required": false
  },
  {
    "label": "Password",
    "type": "password",
    "name": "password",
    "required": true
  },
  {
    "label": "Country",
    "type": "select",
    "name": "country",
    "required": true,
    "options": [
      { "value": "us", "label": "United States" },
      { "value": "ca", "label": "Canada" },
      { "value": "uk", "label": "United Kingdom" }
    ]
  },
  {
    "label": "Subscribe to newsletter",
    "type": "checkbox",
    "name": "newsletter",
    "required": false
  }
]
```
- onSubmit: Function(formData) - Callback when the form is submitted

## License

This project is licensed under the MIT License.

