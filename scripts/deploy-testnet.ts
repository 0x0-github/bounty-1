import { ethers } from "hardhat";
import {
  Eggs,
  UniswapV2Factory,
  UniswapV2Router,
  FoxHen,
  Metadata,
  HenHouse,
  WETH
} from "../types";
import { writeContractAddressToJSON } from "./addresses-utils";
import {
  DEX_FACTORY_CONTRACT_NAME,
  DEX_ROUTER_CONTRACT_NAME,
  EGGS_CONTRACT_NAME,
  FOX_HEN_CONTRACT_NAME,
  HEN_HOUSE_CONTRACT_NAME,
  LP_RAFFLE_CONTRACT_NAME,
  METADATA_CONTRACT_NAME,
  RANDOM_UTILS_CONTRACT_NAME,
  RANDOM_UTILS_ORACLE_CONTRACT_NAME,
  TEST_ETH_FEED_CONTRACT_NAME,
  TEST_WETH_CONTRACT_NAME,
  ZERO_ADDR
} from "./constants";
import { waitFor } from "./tx-helper";
import { BigNumber } from "ethers";

async function main() {
  const [deployer] = await ethers.getSigners();
  const Weth = await ethers.getContractFactory("WETH");
  const weth = await Weth.deploy() as WETH;

  await weth.deployed();

  console.log("WETH deployed to:", weth.address);

  writeContractAddressToJSON(
    {contract: TEST_WETH_CONTRACT_NAME, address: weth.address}
  );

  const dexFactoryFeeToSetter = ZERO_ADDR;
  const DexFactory = await ethers.getContractFactory(DEX_FACTORY_CONTRACT_NAME);
  const dexFactory = await DexFactory.deploy(dexFactoryFeeToSetter) as UniswapV2Factory;

  await dexFactory.deployed();

  console.log("Dex factory deployed to:", dexFactory.address);

  writeContractAddressToJSON(
    {contract: DEX_FACTORY_CONTRACT_NAME, address: dexFactory.address}
  );

  const DexRouter = await ethers.getContractFactory(DEX_ROUTER_CONTRACT_NAME);
  const dexRouter = await DexRouter.deploy(
    dexFactory.address,
    weth.address
  ) as UniswapV2Router;

  await dexRouter.deployed();

  console.log("Dex router deployed to:", dexRouter.address);

  writeContractAddressToJSON(
    {contract: DEX_ROUTER_CONTRACT_NAME, address: dexRouter.address}
  );

  const Eggs = await ethers.getContractFactory(EGGS_CONTRACT_NAME);
  const eggs = await Eggs.deploy() as Eggs;

  await eggs.deployed();

  console.log("Eggs deployed to:", eggs.address);

  writeContractAddressToJSON(
    {contract: EGGS_CONTRACT_NAME, address: eggs.address}
  );

  const Metadata = await ethers.getContractFactory(METADATA_CONTRACT_NAME);
  const metadata = await Metadata.deploy() as Metadata;

  await metadata.deployed();

  console.log("Metadata deployed to:", metadata.address);

  writeContractAddressToJSON(
    {contract: METADATA_CONTRACT_NAME, address: metadata.address}
  );

  const RandomUtils = await ethers.getContractFactory(RANDOM_UTILS_CONTRACT_NAME);
  const randomUtils = await RandomUtils.deploy();

  await randomUtils.deployed();

  console.log("RandomUtils deployed to:", randomUtils.address);

  writeContractAddressToJSON(
    {contract: RANDOM_UTILS_CONTRACT_NAME, address: randomUtils.address}
  );

  const RandomUtilsDia = await ethers.getContractFactory(RANDOM_UTILS_ORACLE_CONTRACT_NAME);
  const randomUtilsDia = await RandomUtilsDia.deploy(ZERO_ADDR);

  await randomUtilsDia.deployed();

  console.log("RandomUtilsDia deployed to:", randomUtilsDia.address);

  writeContractAddressToJSON(
    {contract: RANDOM_UTILS_ORACLE_CONTRACT_NAME, address: randomUtilsDia.address}
  );

  const FoxHen = await ethers.getContractFactory(FOX_HEN_CONTRACT_NAME);
  const foxHen = await FoxHen.deploy(
    eggs.address,
    metadata.address,
    randomUtils.address
  ) as FoxHen;

  await foxHen.deployed();

  console.log("FoxHen deployed to:", foxHen.address);

  writeContractAddressToJSON(
    {contract: FOX_HEN_CONTRACT_NAME, address: foxHen.address}
  );

  const TestEthFeed = await ethers.getContractFactory(TEST_ETH_FEED_CONTRACT_NAME);
  const testEthFeed = await TestEthFeed.deploy();

  await testEthFeed.deployed();

  console.log("Test ETH-USD price feed deployed to:", testEthFeed.address);

  writeContractAddressToJSON(
    {contract: TEST_ETH_FEED_CONTRACT_NAME, address: testEthFeed.address}
  );

  const HenHouse = await ethers.getContractFactory(HEN_HOUSE_CONTRACT_NAME);
  const henHouse = await HenHouse.deploy(
    foxHen.address,
    eggs.address,
    testEthFeed.address,
    weth.address,
    randomUtils.address
  ) as HenHouse;

  await henHouse.deployed();

  console.log("HenHouse deployed to:", henHouse.address);

  writeContractAddressToJSON(
    {contract: HEN_HOUSE_CONTRACT_NAME, address: henHouse.address}
  );

  await waitFor(dexFactory.createPair(eggs.address, weth.address));

  const pair = await dexFactory.getPair(eggs.address, weth.address);

  const liqWethToAdd = BigNumber.from("0x56bc75e2d63100000");
  const liqEggsToAdd = (await eggs.balanceOf(deployer.address)).div(2);
  const deadline
    = (await ethers.provider.getBlock("latest")).timestamp + 120;

  await waitFor(eggs.approve(dexRouter.address, liqEggsToAdd));
  await waitFor(weth.approve(dexRouter.address, liqWethToAdd));

  await waitFor(dexRouter.addLiquidity(
    eggs.address,
    weth.address,
    liqEggsToAdd,
    liqWethToAdd,
    liqEggsToAdd,
    liqWethToAdd,
    deployer.address,
    deadline
  ));

  const LpRaffle = await ethers.getContractFactory(LP_RAFFLE_CONTRACT_NAME);
  const lpRaffle = await LpRaffle.deploy(pair, randomUtils.address);

  await lpRaffle.deployed();

  console.log("LPRaffle deployed to:", lpRaffle.address);

  writeContractAddressToJSON(
    {contract: LP_RAFFLE_CONTRACT_NAME, address: lpRaffle.address}
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
