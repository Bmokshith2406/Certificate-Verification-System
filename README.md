📜 Certificate Verification System
A Blockchain-based application for tamper-proof, real-time verification of academic credentials. Built using Ethereum, Solidity, IPFS, and Pinata, this system eliminates the reliance on centralized databases and ensures transparency, security, and global accessibility.

🚀 Features
✅ Real-time academic certificate verification

🔐 Blockchain-based security using Ethereum

📦 Decentralized storage using IPFS and Pinata

🔄 Smart contract-based validation and issuance

🧾 Admin dashboard to issue certificates

🌐 Public portal to verify certificates

🛠️ Tech Stack
Smart Contracts: Solidity, Truffle

Blockchain Network: Ganache (local Ethereum network)

Frontend: React.js

Backend: Node.js, Express

Storage: IPFS + Pinata

Wallet Integration: MetaMask

⚙️ Prerequisites
Make sure the following are installed:

Ganache

MetaMask Extension

Node.js (Latest)

VSCode

📦 Project Setup Guide
Step 1: Download and Extract the Project
Download the ZIP: Drive Link

Extract to a preferred location (e.g., C:/CertificateVerification).

Open the extracted folder in VSCode.

Step 2: Start Ganache
Open Ganache.

Click QuickStart Ethereum.

Step 3: Install Dependencies
Server Setup
bash
Copy
Edit
cd server
npm install
Client Setup
bash
Copy
Edit
cd ../client
npm install
Step 4: Install Truffle and Ganache CLI Globally
bash
Copy
Edit
npm install -g truffle
npm install -g ganache
Step 5: Configure Blockchain (Truffle)
Navigate to blockchain/:

bash
Copy
Edit
cd ../blockchain
truffle unbox react
truffle init
Replace contents of truffle-config.js with:

js
Copy
Edit
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
Create a smart contract Certificate.sol inside blockchain/contracts.

Create a deployment script 2_deploy_your_contract.js inside blockchain/migrations.

Step 6: Compile and Deploy Smart Contract
bash
Copy
Edit
truffle develop
> compile --all
> migrate --network development --reset
Copy the generated contract address.

Step 7: Update Configuration Files
In blockchain/build/contracts/CertificateVerification.json, find the deployed address.

Update the address in:

client/src/Admin.js (Line 14)

server/index.js (Line 14)

Copy the blockchain/build/contracts folder and paste it into client/src/.

Step 8: Start the Application
In VSCode, open three terminals:

Terminal 1 (Backend):
bash
Copy
Edit
cd server
node index.js
Terminal 2 (Frontend):
bash
Copy
Edit
cd client
npm start
Step 9: Setup MetaMask
Install MetaMask in Chrome.

Create a password.

Add a custom network:

Network Name: Localhost 8545

RPC URL: http://127.0.0.1:7545

Chain ID: 1337

Symbol: ETH

Import account using the Private Key from the first Ganache account.

🧪 Test the Application
Admin Dashboard: http://localhost:3000/admin

User Verification Portal: http://localhost:3000

🔍 Notes
Ensure Ganache is running before deploying or interacting with the contract.

MetaMask must be connected to the Localhost 8545 network.

If you face any issues, restart the app and re-run the migration commands.
