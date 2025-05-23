// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateVerification {
    address public admin;
    uint256 public certificateCount = 0;
    
    struct Certificate {
        uint256 id;
        string studentName;
        string courseName;
        uint256 issueDate;
        string ipfsHash;
    }

    mapping(uint256 => Certificate) public certificates;
    mapping(string => bool) public hashExists;

    event CertificateAdded(uint256 id, string ipfsHash);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function addCertificate(
        string memory _studentName,
        string memory _courseName,
        string memory _ipfsHash
    ) external onlyAdmin {
        require(!hashExists[_ipfsHash], "Certificate already exists");
        certificateCount++;
        certificates[certificateCount] = Certificate(
            certificateCount,
            _studentName,
            _courseName,
            block.timestamp,
            _ipfsHash
        );
        hashExists[_ipfsHash] = true;
        emit CertificateAdded(certificateCount, _ipfsHash);
    }
}