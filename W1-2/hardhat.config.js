require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { ProxyAgent,setGlobalDispatcher } = require("undici");
const proxyAgen = new ProxyAgent('http://127.0.0.1:60008');
setGlobalDispatcher(proxyAgen);

/** @type import('hardhat/config').HardhatUserConfig */
// const privatekey = process.env.PRIVATE_KEY


module.exports = {
  solidity: "0.8.9",

  networks:{
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY2]
      //chainId: 11155111,
    }

  },

  etherscan: {  
    apiKey: process.env.ETHERSCAN_KEY
   }
};

// const PRIVATE_KEY1 = "0x....  YOUR PRIVATE KEY1";
// const ETHERSCAN_KEY = "";
// //const PRIVATE_KEY2 = "0x....  YOUR PRIVATE KEY2";
// //const Mnemonic = "YOUR Mnemonic";

// module.exports = {
//   solidity: "0.8.9", // solidity的编译版本
//   networks: {
//     sepolia: {
//       url: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
//       accounts: [PRIVATE_KEY1],
//       chainId: 11155111,
//     },
    
//     //  mumbai: {
//     //   url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
//     //   accounts: {
//     //     mnemonic: Mnemonic,
//     //   },
//     //   chainId: 80001,
//     // },
//   },

//   etherscan: {
//     apiKey: ETHERSCAN_KEY
// }

// };



