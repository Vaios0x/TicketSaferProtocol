const { ethers, upgrades } = require("hardhat");
require("dotenv").config();

async function main() {
  console.log("🚀 Iniciando deployment del TicketSafer Protocol en testnet...");
  
  // Get deployer account
  const [deployer] = await ethers.getSigners();
  console.log("📝 Deploying contracts with account:", deployer.address);
  console.log("💰 Account balance:", (await deployer.getBalance()).toString());
  
  // Deploy TicketSafer Protocol
  console.log("\n📋 Deploying TicketSafer Protocol...");
  const TicketSaferProtocol = await ethers.getContractFactory("TicketSaferProtocol");
  
  const protocol = await upgrades.deployProxy(TicketSaferProtocol, [
    deployer.address, // owner
    10, // protocolFeePercentage (0.1% = 10 basis points)
    850 // stakingAPY (8.5% = 850 basis points)
  ], {
    initializer: "initialize",
    kind: "uups"
  });
  
  await protocol.deployed();
  console.log("✅ TicketSafer Protocol deployed to:", protocol.address);
  
  // Verify deployment
  console.log("\n🔍 Verificando deployment...");
  
  try {
    const owner = await protocol.owner();
    const protocolFee = await protocol.protocolFeePercentage();
    const stakingAPY = await protocol.stakingAPY();
    const supportedChains = await protocol.getSupportedChains();
    
    console.log("✅ Deployment verification successful:");
    console.log("   - Owner:", owner);
    console.log("   - Protocol Fee:", protocolFee.toString(), "basis points");
    console.log("   - Staking APY:", stakingAPY.toString(), "basis points");
    console.log("   - Supported Chains:", supportedChains.length);
    
    // Test basic functionality
    console.log("\n🧪 Testing basic functionality...");
    
    // Create a test event
    const eventName = "Test Event - TicketSafer Protocol";
    const eventDate = Math.floor(Date.now() / 1000) + 86400; // Tomorrow
    const eventCapacity = 1000;
    const basePrices = [ethers.utils.parseEther("0.01"), ethers.utils.parseEther("0.02")];
    const dynamicPricing = true;
    
    console.log("   - Creating test event...");
    const createEventTx = await protocol.createEvent(
      eventName,
      eventDate,
      eventCapacity,
      basePrices,
      dynamicPricing
    );
    
    await createEventTx.wait();
    console.log("   ✅ Test event created successfully");
    
    // Get protocol stats
    const stats = await protocol.getProtocolStats();
    console.log("   - Protocol Stats:");
    console.log("     * Total Events:", stats.totalEvents.toString());
    console.log("     * Total Tickets:", stats.totalTickets.toString());
    console.log("     * Total Value Locked:", ethers.utils.formatEther(stats.totalValueLocked), "ETH");
    console.log("     * Protocol Revenue:", ethers.utils.formatEther(stats.protocolRevenue), "ETH");
    console.log("     * Staking APY:", stats.stakingAPY.toString(), "basis points");
    
  } catch (error) {
    console.error("❌ Deployment verification failed:", error);
  }
  
  // Deployment summary
  console.log("\n🎉 Deployment completado exitosamente!");
  console.log("=" .repeat(60));
  console.log("📋 CONTRATOS DEPLOYADOS:");
  console.log("   TicketSafer Protocol:", protocol.address);
  console.log("\n🔗 EXPLORADOR:");
  console.log("   Sepolia:", `https://sepolia.etherscan.io/address/${protocol.address}`);
  console.log("   Mumbai:", `https://mumbai.polygonscan.com/address/${protocol.address}`);
  console.log("\n⚙️  CONFIGURACIÓN:");
  console.log("   - Protocol Fee: 0.1%");
  console.log("   - Staking APY: 8.5%");
  console.log("   - Owner:", deployer.address);
  console.log("   - Supported Chains: 7");
  console.log("\n🚀 PRÓXIMOS PASOS:");
  console.log("   1. Verificar contratos en Etherscan");
  console.log("   2. Configurar frontend con nuevas direcciones");
  console.log("   3. Ejecutar tests de integración");
  console.log("   4. Configurar monitoreo y alertas");
  console.log("=" .repeat(60));
  
  // Save deployment info
  const deploymentInfo = {
    network: "testnet",
    timestamp: new Date().toISOString(),
    deployer: deployer.address,
    contracts: {
      TicketSaferProtocol: protocol.address
    },
    configuration: {
      protocolFeePercentage: 10,
      stakingAPY: 850,
      owner: deployer.address
    }
  };
  
  const fs = require("fs");
  fs.writeFileSync(
    "deployment-testnet.json",
    JSON.stringify(deploymentInfo, null, 2)
  );
  console.log("\n💾 Deployment info saved to deployment-testnet.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
