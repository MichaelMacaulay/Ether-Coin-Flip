require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.7.6",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/e488cdb4e70245e8a626ee6c742c57a8",
      accounts: [`0x${process.env.REACT_APP_PRIVATE_KEY}`] 
    }
  }
};
