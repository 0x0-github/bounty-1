# Environment

Make sure to correctly fill a .env file (see .env.example) for deployments (mainnet values should be defined there)

# Common commands

```shell
npx hardhat compile
npx hardhat run --network [desiredNetworkName] [path/to/desired/script]
```

Check \[desiredNetworkName\] in hardhat.config (between mainnet & testnet)

# Deployments

All scripts has its running order in its filename so starting with 1, 2, 3...

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/sample-script.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).

# Contracts details

## Eggs

### Description
This is an ERC20 token used around all the project echosystem.

## Metadata

### Description
This contract holds all the project NFTs metadata related.

## FoxHen

### Description
This contract will be used to manage FoxHen NFTs (minting / associated data...).

### Functions
eggsPrice()
returns the price of eggs (taking discount into account)

foxCount()
returns the number of foxes

tokenURI(tokenId)
returns the token uri (locating metadata of given token)

allTokensOfOwner(owner)
returns all tokens of given address

discountMint(amount)
process a given amount of mints at discount if respecting limitations (also refunds if extra sent)

buyWithEggs(amount)
process a given amount of mints paying by EGGS tokens (caller should approve contract first)

mintExtra(recipient)
mints an extra NFT to given address, can only be called by owner (in the limit of 30)

mintL1Token(recipient, tokenId, traitsId, isFox)
mints a specified token to given recipient, can only be called by owner

toggleMainSale()
enables or disables the sale status, can only be called by owner

withdraw()
get back mint funds, can only be called by owner

## HenHouse

### description
Staking contract giving the ability to deposit tokens in order to get returns, this contract also provide the ability to perform heists (randomly trying to get profits from entering one of your foxes inside the hen house).

### functions
* daysStaked(tokenId)
  * Returns the number of time (EVM timestamp) the given token is staked

* calculateReward(tokenId)
  * Returns the rewards of the given staked token id

* tokenOfOwnerByIndex(address,uint256)
  * Returns the tokens of given owner at the given index

* balanceOf(owner)
  * Returns the balance of staked tokens of given owner

* allStakingsOfOwner(owner)
  * Returns all stakings of the given owner

* batchFoxInfo(foxIds)
  * Returns the information of foxes by given ids (can run out of gas if too much ids)

* ETHPrice(price)
  * Returns the given price converted to ETH (using price feeds)

* heistCost(tokenId)
  * Returns the required price to perform a heist with the given fox id

* stakeHen(tokenId)
  * Stakes the given hen (isFox == false) into the contract, caller must have approved contract before

* multiStakeHen(henIds)
  * Stakes all the given hens from their ids, caller must have approver contract before

* unstakeHen(tokenId)
  * Unstakes the given hen by its id

* claimHenRewards(tokenId,unstake)
  * Claims the rewards earned by the given hen, also gives the ability to unstake it or not

* claimManyHenRewards(tokenIds,unstake)
  * Claims the rewards earned by the given ids, also give the ability ti unstake them or not

* claimManyFoxesRewards(claimingFoxes)
  * Claims the rewards earned by the given fox ids

* function heist(tokenId,enterHenHouse)
  * Enters the heist with the given fox id trying to grab some EGGS

* withdraw(amount)
  * withdraw the given amount of ETH from the contract, can only be called by the owner

* togglePause()
  * Switches the pause status of the contract

* setHeistPrice(index,price)
  * Set the price of the heist action at given index

## LPRaffle

### Description
This contract organise raffle events for LP providers, LP token holder can register and participate in a random draw (triggered by the owner).

### Functions
* allAccounts()
  * Returns all the participants

* registerAccount(account)
  * Register given account for the draw

* gatherBalances()
  * Gets all the participant balances of lp tokens

* raffle()
  * Proceeds the draw, can only be triggered by owner

* addBlacklist(account)
  * Blacklists the given account, can only be trigerred by owner

* removeBlacklist(account)
  * Remove the given account from blacklist, can only be trigerred by owner
