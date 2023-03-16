require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { ProxyAgent,setGlobalDispatcher } = require("undici");
const proxyAgen = new ProxyAgent('http://127.0.0.1:24537');
setGlobalDispatcher(proxyAgen);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks:{
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY2]
    }

  },

  etherscan: {  
    apiKey: process.env.ETHERSCAN_KEY
   }
};