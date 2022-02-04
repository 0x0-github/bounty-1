import { ethers } from "hardhat";
import { IUniswapV2Factory, IUniswapV2Router02 } from "../types";
import { waitFor } from "./tx-helper";
import { readContractAddressesFromJSON, writeContractAddressToJSON } from "./addresses-utils";
import {
  EGGS_CONTRACT_NAME,
  LP_RAFFLE_CONTRACT_NAME, RANDOM_UTILS_CONTRACT_NAME,
  TEST_WETH_CONTRACT_NAME
} from "./constants";
import { BigNumber } from "ethers";

async function main() {
  const [deployer] = await ethers.getSigners();
  const addresses = readContractAddressesFromJSON();
  const eggs = addresses[EGGS_CONTRACT_NAME];
  const randomUtils = addresses[RANDOM_UTILS_CONTRACT_NAME];
  let wethAddr;
  let dexFactoryAddr;
  let dexRouterAddr;

  wethAddr = process.env.WETH_ADDRESS!;
  dexFactoryAddr = process.env.DEX_FACTORY!;
  dexRouterAddr = process.env.DEX_ROUTER!;

  const dexFactory = await ethers.getContractAt(
    "IUniswapV2Factory",
    dexFactoryAddr,
    deployer
  ) as IUniswapV2Factory;

  const pair = await waitFor(dexFactory.createPair(eggs,wethAddr));
  const liqWethToAdd = BigNumber.from(process.env.ADD_LIQ_WETH);
  const liqEggsToAdd = BigNumber.from(process.env.ADD_LIQ_EGGS);

  const dexRouter = await ethers.getContractAt(
    "IUniswapV2Router02",
    dexRouterAddr,
    deployer
  ) as IUniswapV2Router02;

  const deadline
    = (await ethers.provider.getBlock("latest")).timestamp + 120;

  // Need to have approved router first.

  await waitFor(dexRouter.addLiquidity(
    eggs,
    wethAddr,
    liqEggsToAdd,
    liqWethToAdd,
    liqEggsToAdd,
    liqWethToAdd,
    deployer.address,
    deadline
  ));

  const LpRaffle = await ethers.getContractFactory("LPRaffle");
  const lpRaffle = await LpRaffle.deploy(pair, randomUtils);

  await lpRaffle.deployed();

  console.log("LPRaffle deployed to:", lpRaffle.address);

  writeContractAddressToJSON(
    {contract: LP_RAFFLE_CONTRACT_NAME, address: lpRaffle.address}
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
