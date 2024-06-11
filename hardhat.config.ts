import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@nomicfoundation/hardhat-ethers';

// Enter your Private Key here
const PRIVATE_KEY = 'xx';

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    l1xTestnet: {
      url: 'https://v2-testnet-rpc.l1x.foundation',
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
