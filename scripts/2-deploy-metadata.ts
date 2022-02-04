import { ethers } from "hardhat";
import { Metadata } from "../types";
import { writeContractAddressToJSON } from "./addresses-utils";
import { METADATA_CONTRACT_NAME } from "./constants";

async function main() {
  const Metadata = await ethers.getContractFactory(METADATA_CONTRACT_NAME);
  const metadata = await Metadata.deploy() as Metadata;

  await metadata.deployed();

  console.log("Metadata deployed to:", metadata.address);

  writeContractAddressToJSON(
    {contract: METADATA_CONTRACT_NAME, address: metadata.address}
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
