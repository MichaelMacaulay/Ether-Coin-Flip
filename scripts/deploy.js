const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const EtherCoinFlip = await hre.ethers.getContractFactory("EtherCoinFlip");
  const etherCoinFlip = await EtherCoinFlip.deploy();

  await etherCoinFlip.deployed();

  console.log("EtherCoinFlip deployed to:", etherCoinFlip.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });