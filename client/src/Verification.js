import React, { useState } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import axios from "axios";

export default function Verification() {
  const [hash, setHash] = useState("");
  const [result, setResult] = useState(null);

  const verifyCertificate = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/certificates/${hash}`
      );
      setResult(response.data.exists);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Verify Certificate
        </Typography>
        <TextField
          label="Certificate Hash"
          variant="outlined"
          fullWidth
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={verifyCertificate}
          style={{ marginTop: "20px" }}
        >
          Verify
        </Button>
        {result !== null && (
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            {result ? "Certificate is valid!" : "Certificate not found"}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
