const express = require("express");
const Web3 = require("web3");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Blockchain Connection
const web3 = new Web3("http://localhost:7545");
const contractABI =
  require("../blockchain/build/contracts/CertificateVerification.json").abi;
const contractAddress = "0x0587756CBe0A2Bb1DebA71d144f2aD8aC3d55331";

const certificateContract = new web3.eth.Contract(contractABI, contractAddress);

// API Endpoints
app.get("/api/certificates/:hash", async (req, res) => {
  try {
    const result = await certificateContract.methods
      .hashExists(req.params.hash)
      .call();
    res.json({ exists: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get admin address
app.get("/api/admin", async (req, res) => {
  try {
    const admin = await certificateContract.methods.admin().call();
    res.json({ admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all certificates
app.get("/api/certificates", async (req, res) => {
  try {
    const count = await certificateContract.methods.certificateCount().call();
    const certificates = [];

    for (let i = 1; i <= count; i++) {
      const cert = await certificateContract.methods.certificates(i).call();
      certificates.push(cert);
    }

    res.json(certificates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
