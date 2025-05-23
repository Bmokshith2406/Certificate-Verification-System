import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CssBaseline,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Verification from "./Verification";
import AdminPanel from "./Admin";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<Verification />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
