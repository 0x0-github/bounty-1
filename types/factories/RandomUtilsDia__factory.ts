/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RandomUtilsDia,
  RandomUtilsDiaInterface,
} from "../RandomUtilsDia";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
    ],
    name: "RequestRandomness",
    type: "event",
  },
  {
    inputs: [],
    name: "DELAY",
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
        internalType: "uint256",
        name: "",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
    ],
    name: "getRandomValue",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "randomOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "requestRandomness",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
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
  "0x608060405234801561001057600080fd5b506040516106e43803806106e483398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b610653806100916000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063b37217a41161005b578063b37217a4146100ec578063e57f946e14610100578063e62c61a414610113578063f8413b071461012257600080fd5b806325e41da11461008257806369b41170146100ab578063a224c198146100c1575b600080fd5b6100956100903660046104e1565b61013f565b6040516100a2919061055b565b60405180910390f35b6100b3600581565b6040519081526020016100a2565b6000546100d4906001600160a01b031681565b6040516001600160a01b0390911681526020016100a2565b6100b36100fa3660046104e1565b50600090565b6100b361010e366004610417565b6101c6565b60016040516100a29190610533565b61012a6102e9565b604080519283526020830191909152016100a2565b600054604051631be6a9e160e21b8152600481018390526060916001600160a01b031690636f9aa7849060240160006040518083038186803b15801561018457600080fd5b505afa158015610198573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101c09190810190610438565b92915050565b60006101d360058361058e565b60008054906101000a90046001600160a01b03166001600160a01b0316634231a2c36040518163ffffffff1660e01b815260040160206040518083038186803b15801561021f57600080fd5b505afa158015610233573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025791906104f9565b10156102a95760405162461bcd60e51b815260206004820152601e60248201527f5761697420666f72207468652072616e646f6d6e65737320726f756e642e0000604482015260640160405180910390fd5b60006102b48361013f565b905080846040516020016102c9929190610511565b60408051601f198184030181529190528051602090910120949350505050565b6000805460408051634231a2c360e01b8152905183926001600160a01b031691634231a2c3916004808301926020929190829003018186803b15801561032e57600080fd5b505afa158015610342573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036691906104f9565b90504232826001600081548092919061037e906105d6565b919050556040516020016103bd949392919093845260609290921b6bffffffffffffffffffffffff191660208401526034830152605482015260740190565b60408051601f19818403018152828252805160209182012032845290830181905290820183905292507f09791ef67c66fda2f85e08e6809173373eb48cf6eb0c76a3cb1d87ca610e350f9060600160405180910390a19091565b60008060408385031215610429578182fd5b50508035926020909101359150565b600060208284031215610449578081fd5b815167ffffffffffffffff80821115610460578283fd5b818401915084601f830112610473578283fd5b81518181111561048557610485610607565b604051601f8201601f19908116603f011681019083821181831017156104ad576104ad610607565b816040528281528760208487010111156104c5578586fd5b6104d68360208301602088016105a6565b979650505050505050565b6000602082840312156104f2578081fd5b5035919050565b60006020828403121561050a578081fd5b5051919050565b600083516105238184602088016105a6565b9190910191825250602001919050565b602081016002831061055557634e487b7160e01b600052602160045260246000fd5b91905290565b602081526000825180602084015261057a8160408501602087016105a6565b601f01601f19169190910160400192915050565b600082198211156105a1576105a16105f1565b500190565b60005b838110156105c15781810151838201526020016105a9565b838111156105d0576000848401525b50505050565b60006000198214156105ea576105ea6105f1565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122033c2b33bc30c4f9da98be2419e159c4d79543633c42ace82ba7dc9473fa85ee764736f6c63430008040033";

export class RandomUtilsDia__factory extends ContractFactory {
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
    oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RandomUtilsDia> {
    return super.deploy(oracle, overrides || {}) as Promise<RandomUtilsDia>;
  }
  getDeployTransaction(
    oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(oracle, overrides || {});
  }
  attach(address: string): RandomUtilsDia {
    return super.attach(address) as RandomUtilsDia;
  }
  connect(signer: Signer): RandomUtilsDia__factory {
    return super.connect(signer) as RandomUtilsDia__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RandomUtilsDiaInterface {
    return new utils.Interface(_abi) as RandomUtilsDiaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RandomUtilsDia {
    return new Contract(address, _abi, signerOrProvider) as RandomUtilsDia;
  }
}
