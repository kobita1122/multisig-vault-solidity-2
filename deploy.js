const { ethers } = require("hardhat");

async function main() {
  const [deployer, owner2, owner3] = await ethers.getSigners();
  const MultiSig = await ethers.getContractFactory("MultiSigWallet");
  
  // Deploying with 2-of-3 signatures required
  const wallet = await MultiSig.deploy([deployer.address, owner2.address, owner3.address], 2);

  console.log("MultiSig Wallet deployed to:", wallet.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
