import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "hardhat-contract-sizer";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomiclabs/hardhat-web3";
import { NetworkUserConfig } from "hardhat/types";

dotenv.config();

const chainIds = {
  hardhat: { id: 31337, rpc: "" },
  mainnet: { id: Number.parseInt(process.env.MAINNET_CHAIN_ID!), rpc: process.env.MAINNET_RPC_URL },
  testnet: { id: Number.parseInt(process.env.TESTNET_CHAIN_ID!), rpc: process.env.TESTNET_RPC_URL },
  poly_mainnet: { id: 137, rpc: "https://polygon-rpc.com/" },
  poly_testnet: { id: 80001, rpc: "https://rpc-mumbai.matic.today/" },
  bsc_mainnet: { id: 56, rpc: "https://bsc-dataseed.binance.org/" },
  bsc_testnet: { id: 97, rpc: "https://data-seed-prebsc-1-s1.binance.org:8545/" },
};
// Ensure that we have all the environment variables we need.
const privateKey: string | undefined = process.env.PRIVATE_KEY ?? "NO_PRIVATE_KEY";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

function getChainConfig(network: keyof typeof chainIds): NetworkUserConfig {
  return {
    accounts: [`${privateKey}`],
    chainId: chainIds[network].id,
    url: chainIds[network].rpc,
  };
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    mainnet: getChainConfig("mainnet"),
    testnet: getChainConfig("testnet"),
    bsc_mainnet: getChainConfig("bsc_mainnet"),
    bsc_testnet: getChainConfig("bsc_testnet"),
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
    deploy: "./scripts/deploy",
    deployments: "./deployments",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.5.16",
      },
    ],
    settings: {
      outputSelection: {
        "*": {
          "*": ["storageLayout"],
        },
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    }
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: false,
  }
};

export default config;