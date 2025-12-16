# Certificate Verification System

## Overview
The Certificate Verification System is a blockchain-based application designed to issue and verify academic certificates in a secure, tamper-proof, and transparent manner. By using Ethereum smart contracts and decentralized storage (IPFS via Pinata), the system eliminates dependence on centralized databases and enables real-time, trustworthy certificate verification from anywhere.

This project demonstrates a real-world decentralized application (DApp) use case suitable for academic institutions, employers, and verification authorities.

---

## Problem Statement
Traditional certificate verification systems rely on centralized databases, which are prone to:
- Data tampering and forgery
- Single point of failure
- Manual and time-consuming verification
- Limited transparency

This system solves these issues by leveraging blockchain immutability and decentralized storage.

---

## Solution Overview
- Certificate files are stored on IPFS
- The IPFS hash and certificate metadata are stored on the Ethereum blockchain
- Verification is done by querying the smart contract
- No central authority can modify issued certificates

---

## Features
- Real-time academic certificate verification
- Tamper-proof and immutable certificate records
- Decentralized storage using IPFS and Pinata
- Smart contract-based issuance and validation
- Admin dashboard for certificate issuance
- Public portal for certificate verification
- Wallet-based authentication using MetaMask

---

## System Architecture
1. Admin uploads certificate details
2. Certificate file is stored on IPFS
3. IPFS hash is saved on Ethereum via smart contract
4. Users verify certificates by querying the blockchain
5. Smart contract returns verification status

---

## Technology Stack

### Blockchain
- Ethereum
- Solidity
- Truffle
- Ganache (local Ethereum network)

### Frontend
- React.js

### Backend
- Node.js
- Express.js

### Storage
- IPFS
- Pinata

### Wallet
- MetaMask

---

## Prerequisites
Ensure the following are installed:
- Node.js (latest version)
- Visual Studio Code
- Ganache (Desktop)
- MetaMask (Chrome Extension)
- Truffle (global)

---

## Project Structure
```

CertificateVerification/
│
├── blockchain/
│   ├── contracts/
│   │   └── Certificate.sol
│   ├── migrations/
│   │   └── 2_deploy_your_contract.js
│   ├── build/
│   └── truffle-config.js
│
├── server/
│   └── index.js
│
├── client/
│   ├── src/
│   │   ├── Admin.js
│   │   └── contracts/
│   └── package.json
│
└── README.md

```

---

## Installation and Setup

### Step 1: Download the Project
- Download the project ZIP
- Extract it to a local directory (example: C:/CertificateVerification)
- Open the folder in Visual Studio Code

---

### Step 2: Start Ganache
1. Open Ganache
2. Click "Quickstart Ethereum"
3. Keep Ganache running

---

### Step 3: Install Dependencies

Backend:
```

cd server
npm install

```

Frontend:
```

cd ../client
npm install

```

---

### Step 4: Install Blockchain Tools
```

npm install -g truffle
npm install -g ganache

```

---

### Step 5: Configure Truffle
```

cd ../blockchain
truffle init

```

Replace `truffle-config.js` with:
```

module.exports = {
networks: {
development: {
host: "127.0.0.1",
port: 7545,
network_id: "*"
}
},
compilers: {
solc: {
version: "0.8.0"
}
}
};

```

---

### Step 6: Smart Contract Setup
- Create `Certificate.sol` inside `blockchain/contracts`
- Create `2_deploy_your_contract.js` inside `blockchain/migrations`

---

### Step 7: Compile and Deploy Contract
```

truffle develop

```

Inside Truffle console:
```

compile --all
migrate --network development --reset

```

Copy the deployed contract address.

---

### Step 8: Update Contract Address
Update the deployed contract address in:
- `client/src/Admin.js`
- `server/index.js`

Copy:
```

blockchain/build/contracts

```

Paste into:
```

client/src/

```

---

### Step 9: Run the Application

Backend:
```

cd server
node index.js

```

Frontend:
```

cd client
npm start

```

---

### Step 10: MetaMask Setup
- Install MetaMask
- Create or unlock wallet
- Add custom network:
  - Network Name: Localhost 8545
  - RPC URL: http://127.0.0.1:7545
  - Chain ID: 1337
  - Currency Symbol: ETH
- Import account using Ganache private key

---

## Application URLs
- Admin Dashboard: http://localhost:3000/admin
- Public Verification Portal: http://localhost:3000

---

## Testing Notes
- Ganache must be running
- MetaMask must be connected to Localhost network
- Re-deploy contracts if Ganache is restarted
- Restart frontend and backend after contract changes

---

## Future Enhancements
- Role-based access control
- Multi-institution support
- Mainnet deployment
- QR-based certificate verification
- Revocation mechanism

---

## Conclusion
This project demonstrates how blockchain can be effectively used for secure and transparent academic certificate verification. It combines smart contracts, decentralized storage, and modern web technologies to build a practical, real-world decentralized application.

