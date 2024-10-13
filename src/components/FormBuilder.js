import React, { useState, useRef } from "react";
import {
  Button,
  Paper,
  Box,
  TextField,
  MenuItem,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PreviewIcon from "@mui/icons-material/Preview";

const fieldTypes = ["text", "email", "password", "number", "select"];

const FormBuilder = ({ onPreview, useForm }) => {
  const [fields, setFields] = useState([]);
  const [currentField, setCurrentField] = useState({
    label: "",
    type: "text",
    name: "",
    required: false,
    options: "",
  });
  const fileInputRef = useRef(null);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setCurrentField((prev) => ({ ...prev, [name]: value }));
  };

  const addField = () => {
    const newField = {
      ...currentField,
      options:
        currentField.type === "select"
          ? currentField.options.split(",").map((option) => ({
              value: option.trim(),
              label: option.trim(),
            }))
          : undefined,
    };
    setFields((prev) => [...prev, newField]);
    setCurrentField({
      label: "",
      type: "text",
      name: "",
      required: false,
      options: "",
    });
  };

  const removeField = (index) => {
    setFields((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const schema = JSON.parse(e.target.result);
          setFields(schema);
        } catch (error) {
          console.error("Error parsing JSON:", error);
          alert("Invalid JSON file. Please upload a valid schema.");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Paper elevation={3}>
      <Box p={3}>
        <TextField
          fullWidth
          label="Field Label"
          name="label"
          value={currentField.label}
          onChange={handleFieldChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Field Name"
          name="name"
          value={currentField.name}
          onChange={handleFieldChange}
          margin="normal"
        />
        <TextField
          select
          fullWidth
          label="Field Type"
          name="type"
          value={currentField.type}
          onChange={handleFieldChange}
          margin="normal"
        >
          {fieldTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        {currentField.type === "select" && (
          <TextField
            fullWidth
            label="Options (comma-separated)"
            name="options"
            value={currentField.options}
            onChange={handleFieldChange}
            margin="normal"
          />
        )}
        <TextField
          select
          fullWidth
          label="Required"
          name="required"
          value={currentField.required}
          onChange={handleFieldChange}
          margin="normal"
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </TextField>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          onClick={addField}
          fullWidth
          sx={{ mt: 2 }}
        >
          Add Field
        </Button>

        <Button
          startIcon={<UploadFileIcon />}
          variant="outlined"
          color="primary"
          onClick={() => fileInputRef.current.click()}
          fullWidth
          sx={{ mt: 2 }}
        >
          Upload Schema
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
          accept=".json"
        />

        <List sx={{ mt: 2 }}>
          {fields.map((field, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={field.label}
                secondary={`${field.type} - ${field.name}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeField(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

        <Button
          startIcon={<PreviewIcon />}
          variant="contained"
          color="primary"
          onClick={() => onPreview(fields)}
          fullWidth
          sx={{ mt: 2 }}
        >
          {useForm ? "Use Form" : "Preview Form"}
        </Button>
      </Box>
    </Paper>
  );
};

export default FormBuilder;
