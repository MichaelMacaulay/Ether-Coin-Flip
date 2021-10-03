const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  // const Greeter = await hre.ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, World!");

  const EtherCoinFlip = await hre.ethers.getContractFactory("EtherCoinFlip");
  const etherCoinFlip = await EtherCoinFlip.deploy();







  // const Token = await hre.ethers.getContractFactory("Token");
  // const token = await Token.deploy();

  // await greeter.deployed();
  // await token.deployed();
  await etherCoinFlip.deployed();

  // console.log("Greeter deployed to:", greeter.address);
  // console.log("Token deployed to:", token.address);
  console.log("EtherCoinFlip deployed to:", etherCoinFlip.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });