/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RandomUtils, RandomUtilsInterface } from "../RandomUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "seed",
        type: "uint256",
      },
    ],
    name: "getRandomNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "seed",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
    ],
    name: "getRandomNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "random",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "randomKind",
    outputs: [
      {
        internalType: "enum IRandomUtils.RandomKind",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestRandomness",
    outputs: [
      {
        internalType: "bytes32",
        name: "seed",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101ae806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063b37217a414610051578063e57f946e14610077578063e62c61a41461008d578063f8413b071461009c575b600080fd5b61006461005f366004610138565b6100b0565b6040519081526020015b60405180910390f35b610064610085366004610117565b600092915050565b600060405161006e9190610150565b60408051600080825260208201520161006e565b600042443280315a6040805160208101969096528501939093526bffffffffffffffffffffffff19606092831b16918401919091526074830152609482015260b4810183905260d40160408051601f19818403018152919052805160209091012092915050565b60008060408385031215610129578182fd5b50508035926020909101359150565b600060208284031215610149578081fd5b5035919050565b602081016002831061017257634e487b7160e01b600052602160045260246000fd5b9190529056fea26469706673582212200e15fb0786b7fe1023d954d51772ee84bb52cb904a3fbc743999f7c19986691664736f6c63430008040033";

export class RandomUtils__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RandomUtils> {
    return super.deploy(overrides || {}) as Promise<RandomUtils>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RandomUtils {
    return super.attach(address) as RandomUtils;
  }
  connect(signer: Signer): RandomUtils__factory {
    return super.connect(signer) as RandomUtils__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RandomUtilsInterface {
    return new utils.Interface(_abi) as RandomUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RandomUtils {
    return new Contract(address, _abi, signerOrProvider) as RandomUtils;
  }
}