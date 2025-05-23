import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import Web3 from "web3";
import axios from "axios";

const contractABI = require("./contracts/CertificateVerification.json").abi;
const contractAddress = "0x0587756CBe0A2Bb1DebA71d144f2aD8aC3d55331";

export default function AdminPanel() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    courseName: "",
    ipfsHash: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await web3Instance.eth.getAccounts();
          setWeb3(web3Instance);
          setAccount(accounts[0]);

          // Check if connected account is admin
          const contract = new web3Instance.eth.Contract(
            contractABI,
            contractAddress
          );
          const adminAddress = await contract.methods.admin().call();
          setIsAdmin(accounts[0].toLowerCase() === adminAddress.toLowerCase());
        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
        }
      }
    };
    initWeb3();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing...");

    try {
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      await contract.methods
        .addCertificate(
          formData.studentName,
          formData.courseName,
          formData.ipfsHash
        )
        .send({ from: account });

      setStatus("Certificate added successfully!");
      setFormData({ studentName: "", courseName: "", ipfsHash: "" });
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  if (!isAdmin) {
    return (
      <Container maxWidth="sm">
        <Box mt={5}>
          <Alert severity="error">
            Connected account ({account}) is not authorized as admin!
          </Alert>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box mt={5} component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Admin Panel - Add Certificate
        </Typography>

        <TextField
          label="Student Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.studentName}
          onChange={(e) =>
            setFormData({ ...formData, studentName: e.target.value })
          }
          required
        />

        <TextField
          label="Course Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.courseName}
          onChange={(e) =>
            setFormData({ ...formData, courseName: e.target.value })
          }
          required
        />

        <TextField
          label="IPFS Hash"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.ipfsHash}
          onChange={(e) =>
            setFormData({ ...formData, ipfsHash: e.target.value })
          }
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Add Certificate
        </Button>

        {status && (
          <Box mt={2}>
            <Alert severity={status.includes("Error") ? "error" : "success"}>
              {status}
            </Alert>
          </Box>
        )}
      </Box>
    </Container>
  );
}
