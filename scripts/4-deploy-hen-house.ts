import { ethers } from "hardhat";
import { HenHouse } from "../types";
import {
  readContractAddressesFromJSON,
  writeContractAddressToJSON
} from "./addresses-utils";
import {
  EGGS_CONTRACT_NAME,
  FOX_HEN_CONTRACT_NAME,
  HEN_HOUSE_CONTRACT_NAME,
  RANDOM_UTILS_CONTRACT_NAME,
} from "./constants";

async function main() {
  const addresses = readContractAddressesFromJSON();
  const foxHen = addresses[FOX_HEN_CONTRACT_NAME];
  const eggs = addresses[EGGS_CONTRACT_NAME];
  const randomUtils = addresses[RANDOM_UTILS_CONTRACT_NAME];

  if (eggs == null || foxHen == null) {
    throw new Error("Eggs and FoxHen contracts should be deployed")
  }

  let ethFeed;
  let weth;

  // mainnet
  ethFeed = process.env.WETH_PRICE_FEED!;
  weth = process.env.WETH_ADDRESS!;

  const HenHouse = await ethers.getContractFactory(HEN_HOUSE_CONTRACT_NAME);
  const henHouse = await HenHouse.deploy(
    foxHen,
    eggs,
    ethFeed,
    weth,
    randomUtils
  ) as HenHouse;

  await henHouse.deployed();

  console.log("HenHouse deployed to:", henHouse.address);

  writeContractAddressToJSON(
    {contract: HEN_HOUSE_CONTRACT_NAME, address: henHouse.address}
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
