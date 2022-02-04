import { ethers } from "hardhat";
import { FoxHen } from "../types";
import { readContractAddressesFromJSON, writeContractAddressToJSON } from "./addresses-utils";
import {
  EGGS_CONTRACT_NAME,
  FOX_HEN_CONTRACT_NAME,
  METADATA_CONTRACT_NAME,
  RANDOM_UTILS_CONTRACT_NAME
} from "./constants";

async function main() {
  const addresses = readContractAddressesFromJSON();
  const eggs = addresses[EGGS_CONTRACT_NAME];
  const metadata = addresses[METADATA_CONTRACT_NAME];

  if (eggs == null || metadata == null) {
    throw new Error("Eggs and Metadata contracts should be deployed")
  }

  const RandomUtils = await ethers.getContractFactory(RANDOM_UTILS_CONTRACT_NAME);
  const randomUtils = await RandomUtils.deploy();

  await randomUtils.deployed();

  console.log("RandomUtils deployed to:", randomUtils.address);

  writeContractAddressToJSON(
    {contract: RANDOM_UTILS_CONTRACT_NAME, address: randomUtils.address}
  );

  const FoxHen = await ethers.getContractFactory(FOX_HEN_CONTRACT_NAME);
  const foxHen = await FoxHen.deploy(
    eggs,
    metadata,
    randomUtils.address
  ) as FoxHen;

  await foxHen.deployed();

  console.log("FoxHen deployed to:", foxHen.address);

  writeContractAddressToJSON(
    {contract: FOX_HEN_CONTRACT_NAME, address: foxHen.address}
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
