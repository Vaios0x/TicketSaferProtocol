// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ITicketSaferProtocol
 * @dev Interfaz principal del protocolo TicketSafer
 * @author TicketSafer Team
 */
interface ITicketSaferProtocol {
    
    // ============ STRUCTS ============
    
    struct Event {
        uint256 eventId;
        string name;
        address venue;
        uint256 date;
        uint256 capacity;
        uint256[] basePrices;
        bool dynamicPricing;
        bool isActive;
        uint256 totalTicketsSold;
        uint256 totalRevenue;
        mapping(uint256 => Section) sections;
        uint256 sectionCount;
        bytes32 merkleRoot;
        uint256 randomSeed;
    }
    
    struct Section {
        uint256 sectionId;
        string name;
        uint256 capacity;
        uint256 basePrice;
        uint256 currentPrice;
        uint256 ticketsSold;
        bool isActive;
    }
    
    struct Ticket {
        bytes32 ticketId;
        uint256 eventId;
        uint256 sectionId;
        address owner;
        uint256 faceValue;
        uint256 currentValue;
        uint256 royaltyPercentage;
        bool isTransferable;
        uint256 maxResalePrice;
        uint256 mintTimestamp;
        bool isUsed;
        bool isBridged;
        uint256 sourceChainId;
    }
    
    struct ZKTicket {
        bytes32 commitment;
        uint256[2] a;
        uint256[2][2] b;
        uint256[2] c;
        bytes32 nullifier;
    }
    
    struct FairQueue {
        bytes32 merkleRoot;
        uint256 randomSeed;
        mapping(address => uint256) participantScore;
        uint256 maxTicketsPerIdentity;
        bytes32[] verifiedIdentities;
        uint256 queueStartTime;
        uint256 queueEndTime;
        bool isActive;
    }
    
    struct DynamicTicket {
        uint256 tokenId;
        uint256 eventId;
        address owner;
        uint256 faceValue;
        uint256 currentValue;
        uint256 royaltyPercentage;
        mapping(string => bytes) metadata;
        uint256[] utilityTokens;
        bool isTransferable;
        uint256 maxResalePrice;
        uint256 evolutionLevel;
        uint256 lastInteraction;
    }
    
    struct PriceOracle {
        uint256 oracleId;
        address aggregator;
        uint256 lastUpdate;
        uint256 price;
        uint256 confidence;
        bool isActive;
    }
    
    // ============ EVENTS ============
    
    event EventCreated(
        uint256 indexed eventId,
        address indexed venue,
        string name,
        uint256 date,
        uint256 capacity
    );
    
    event TicketMinted(
        bytes32 indexed ticketId,
        uint256 indexed eventId,
        address indexed owner,
        uint256 faceValue,
        uint256 currentValue
    );
    
    event TicketTransferred(
        bytes32 indexed ticketId,
        address indexed from,
        address indexed to,
        uint256 price
    );
    
    event PriceUpdated(
        uint256 indexed eventId,
        uint256 indexed sectionId,
        uint256 oldPrice,
        uint256 newPrice,
        uint256 timestamp
    );
    
    event CrossChainBridgeInitiated(
        bytes32 indexed ticketId,
        uint256 sourceChainId,
        uint256 targetChainId,
        address indexed owner
    );
    
    event CrossChainBridgeCompleted(
        bytes32 indexed ticketId,
        uint256 sourceChainId,
        uint256 targetChainId,
        address indexed owner
    );
    
    event ProtocolFeeCollected(
        uint256 indexed eventId,
        uint256 amount,
        uint256 timestamp
    );
    
    event StakingRewardDistributed(
        address indexed staker,
        uint256 amount,
        uint256 timestamp
    );
    
    // ============ CORE FUNCTIONS ============
    
    function createEvent(
        string calldata name,
        uint256 date,
        uint256 capacity,
        uint256[] calldata basePrices,
        bool dynamicPricing
    ) external returns (uint256 eventId);
    
    function mintTicket(
        uint256 eventId,
        uint256 sectionId,
        address recipient,
        uint256 price
    ) external payable returns (bytes32 ticketId);
    
    function transferTicket(
        bytes32 ticketId,
        address to,
        uint256 price
    ) external;
    
    function useTicket(bytes32 ticketId) external;
    
    // ============ DYNAMIC PRICING ============
    
    function updatePrice(
        uint256 eventId,
        uint256 sectionId,
        uint256 newPrice
    ) external;
    
    function calculateDynamicPrice(
        uint256 eventId,
        uint256 sectionId
    ) external view returns (uint256);
    
    // ============ CROSS-CHAIN FUNCTIONALITY ============
    
    function bridgeTicket(
        bytes32 ticketId,
        uint256 targetChainId,
        address recipient
    ) external payable;
    
    function executeAtomicSwap(
        uint256 sourceChainId,
        uint256 targetChainId,
        bytes32 ticketId,
        address recipient,
        bytes calldata proof
    ) external;
    
    // ============ ZERO-KNOWLEDGE PROOFS ============
    
    function verifyZKProof(
        bytes32 commitment,
        uint256[8] calldata proof
    ) external returns (bool);
    
    function mintZKTicket(
        ZKTicket calldata zkTicket,
        uint256 eventId,
        uint256 sectionId
    ) external returns (bytes32 ticketId);
    
    // ============ ANTI-BOT QUEUE SYSTEM ============
    
    function joinQueue(uint256 eventId) external;
    
    function processQueue(uint256 eventId) external;
    
    function getQueuePosition(uint256 eventId, address participant) external view returns (uint256);
    
    // ============ GOVERNANCE & STAKING ============
    
    function stake(uint256 amount, uint256 lockPeriod) external;
    
    function unstake(uint256 amount) external;
    
    function claimRewards() external;
    
    function getStakingInfo(address staker) external view returns (
        uint256 stakedAmount,
        uint256 lockPeriod,
        uint256 multiplier,
        uint256 votingPower,
        uint256 pendingRewards
    );
    
    // ============ VIEW FUNCTIONS ============
    
    function getEvent(uint256 eventId) external view returns (
        string memory name,
        address venue,
        uint256 date,
        uint256 capacity,
        bool dynamicPricing,
        bool isActive,
        uint256 totalTicketsSold,
        uint256 totalRevenue
    );
    
    function getTicket(bytes32 ticketId) external view returns (
        uint256 eventId,
        uint256 sectionId,
        address owner,
        uint256 faceValue,
        uint256 currentValue,
        bool isTransferable,
        bool isUsed
    );
    
    function getProtocolStats() external view returns (
        uint256 totalEvents,
        uint256 totalTickets,
        uint256 totalValueLocked,
        uint256 protocolRevenue,
        uint256 stakingAPY
    );
    
    function getSupportedChains() external view returns (uint256[] memory);
    
    // ============ ADMIN FUNCTIONS ============
    
    function setProtocolFee(uint256 newFee) external;
    
    function setStakingAPY(uint256 newAPY) external;
    
    function pauseProtocol() external;
    
    function unpauseProtocol() external;
    
    function upgradeImplementation(address newImplementation) external;
}
