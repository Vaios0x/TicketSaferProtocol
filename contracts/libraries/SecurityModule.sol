// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

/**
 * @title SecurityModule
 * @dev Módulo de seguridad con protecciones contra ataques comunes
 * @author TicketSafer Team
 */
library SecurityModule {
    using ECDSA for bytes32;
    
    // ============ CONSTANTS ============
    
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;
    uint256 private constant RATE_LIMIT = 1 seconds;
    uint256 private constant MAX_BATCH_SIZE = 100;
    
    // ============ STRUCTS ============
    
    struct SecurityState {
        uint256 reentrancyStatus;
        bool paused;
        mapping(address => uint256) lastAction;
        mapping(address => uint256) actionCount;
        mapping(bytes32 => bool) usedSignatures;
        uint256 signatureExpiry;
    }
    
    // ============ REENTRANCY PROTECTION ============
    
    function checkReentrancy(SecurityState storage state) internal {
        require(
            state.reentrancyStatus != _ENTERED,
            "SecurityModule: reentrant call"
        );
        state.reentrancyStatus = _ENTERED;
    }
    
    function clearReentrancy(SecurityState storage state) internal {
        state.reentrancyStatus = _NOT_ENTERED;
    }
    
    // ============ PAUSE MECHANISM ============
    
    function checkNotPaused(SecurityState storage state) internal view {
        require(!state.paused, "SecurityModule: paused");
    }
    
    function setPaused(SecurityState storage state, bool _paused) internal {
        state.paused = _paused;
    }
    
    // ============ RATE LIMITING ============
    
    function checkRateLimit(SecurityState storage state, address user) internal {
        require(
            block.timestamp >= state.lastAction[user] + RATE_LIMIT,
            "SecurityModule: rate limited"
        );
        state.lastAction[user] = block.timestamp;
        state.actionCount[user]++;
    }
    
    function getActionCount(SecurityState storage state, address user) internal view returns (uint256) {
        return state.actionCount[user];
    }
    
    // ============ SIGNATURE VERIFICATION ============
    
    function verifySignature(
        bytes32 messageHash,
        bytes memory signature,
        address expectedSigner,
        SecurityState storage state
    ) internal returns (bool) {
        // Check if signature is expired
        require(
            block.timestamp <= state.signatureExpiry,
            "SecurityModule: signature expired"
        );
        
        // Check if signature was already used
        bytes32 signatureHash = keccak256(signature);
        require(
            !state.usedSignatures[signatureHash],
            "SecurityModule: signature already used"
        );
        
        // Mark signature as used
        state.usedSignatures[signatureHash] = true;
        
        // Recover signer
        bytes32 ethSignedMessageHash = messageHash.toEthSignedMessageHash();
        address recoveredSigner = ethSignedMessageHash.recover(signature);
        
        return recoveredSigner == expectedSigner;
    }
    
    // ============ BATCH OPERATION PROTECTION ============
    
    function checkBatchSize(uint256 size) internal pure {
        require(
            size <= MAX_BATCH_SIZE,
            "SecurityModule: batch too large"
        );
    }
    
    // ============ INPUT VALIDATION ============
    
    function validateAddress(address addr) internal pure {
        require(
            addr != address(0),
            "SecurityModule: zero address"
        );
    }
    
    function validateAmount(uint256 amount) internal pure {
        require(
            amount > 0,
            "SecurityModule: zero amount"
        );
    }
    
    function validateString(string memory str) internal pure {
        require(
            bytes(str).length > 0,
            "SecurityModule: empty string"
        );
        require(
            bytes(str).length <= 1000,
            "SecurityModule: string too long"
        );
    }
    
    // ============ TIMESTAMP VALIDATION ============
    
    function validateFutureTimestamp(uint256 timestamp) internal view {
        require(
            timestamp > block.timestamp,
            "SecurityModule: timestamp in past"
        );
    }
    
    function validatePastTimestamp(uint256 timestamp) internal view {
        require(
            timestamp < block.timestamp,
            "SecurityModule: timestamp in future"
        );
    }
    
    // ============ ACCESS CONTROL ============
    
    function checkAccess(
        address caller,
        address owner,
        bytes32 role
    ) internal pure {
        require(
            caller == owner || hasRole(caller, role),
            "SecurityModule: access denied"
        );
    }
    
    function hasRole(address user, bytes32 role) internal pure returns (bool) {
        // Simplified role checking - can be extended with proper role system
        return user != address(0);
    }
    
    // ============ EMERGENCY FUNCTIONS ============
    
    function emergencyPause(SecurityState storage state) internal {
        state.paused = true;
    }
    
    function emergencyUnpause(SecurityState storage state) internal {
        state.paused = false;
    }
    
    // ============ UTILITY FUNCTIONS ============
    
    function generateMessageHash(
        string memory action,
        uint256 nonce,
        uint256 timestamp
    ) internal pure returns (bytes32) {
        return keccak256(
            abi.encodePacked(
                action,
                nonce,
                timestamp
            )
        );
    }
    
    function validateNonce(uint256 nonce, uint256 expectedNonce) internal pure {
        require(
            nonce == expectedNonce,
            "SecurityModule: invalid nonce"
        );
    }
}
