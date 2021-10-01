require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/81132ef3dd3c4bcb87f90de2bdc0d931",
      accounts: [`0x{ACCOUNT_KEY}`] 
    }
  }
};
