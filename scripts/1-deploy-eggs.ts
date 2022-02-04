import { ethers } from "hardhat";
import { Eggs } from "../types";
import { writeContractAddressToJSON } from "./addresses-utils";
import { EGGS_CONTRACT_NAME } from "./constants";

async function main() {
  const Eggs = await ethers.getContractFactory(EGGS_CONTRACT_NAME);
  const eggs = await Eggs.deploy() as Eggs;

  await eggs.deployed();

  console.log("Eggs deployed to:", eggs.address);

  writeContractAddressToJSON(
    {contract: EGGS_CONTRACT_NAME, address: eggs.address}
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
