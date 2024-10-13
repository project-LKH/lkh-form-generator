import React from "react";
import { Button, Paper, Box } from "@mui/material";
import FormGenerator from "./FormGenerator";
import DownloadIcon from "@mui/icons-material/Download";

const FormPreview = ({ fields, onSubmit, onBack, onDownload, useForm }) => {
  return (
    <Paper elevation={3}>
      <Box p={3}>
        <FormGenerator fields={fields} onSubmit={onSubmit} />
        {!useForm && (
          <Button
            startIcon={<DownloadIcon />}
            variant="contained"
            color="primary"
            onClick={onDownload}
            fullWidth
            sx={{ mt: 2 }}
          >
            Download Schema
          </Button>
        )}
        (
        <Button variant="outlined" onClick={onBack} fullWidth sx={{ mt: 2 }}>
          Back to Form Builder
        </Button>
        )
      </Box>
    </Paper>
  );
};

export default FormPreview;
