/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LPRaffle, LPRaffleInterface } from "../LPRaffle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_randomUtils",
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
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Winner",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accounts",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addBlacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "allAccounts",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "blacklist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gatherBalances",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct LPRaffle.Balances[]",
        name: "",
        type: "tuple[]",
      },
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
    inputs: [],
    name: "owner",
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
    name: "performRaffleFromOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "raffle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "randomUtils",
    outputs: [
      {
        internalType: "contract IRandomUtils",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "registerAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeBlacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "roundId",
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
        internalType: "address",
        name: "_randomUtils",
        type: "address",
      },
    ],
    name: "setRandomUtils",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161100638038061100683398101604081905261002f916100d5565b61003833610069565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055610107565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100d057600080fd5b919050565b600080604083850312156100e7578182fd5b6100f0836100b9565b91506100fe602084016100b9565b90509250929050565b610ef0806101166000396000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c806397c414df11610097578063eb91e65111610066578063eb91e651146101e3578063f2a40db8146101f6578063f2fde38b14610209578063f9f92be41461021c57600080fd5b806397c414df146101a05780639cfe42da146101b3578063cf783d8a146101c6578063e2fe366c146101db57600080fd5b80637349790b116100d35780637349790b146101455780638b1ba936146101705780638cd221c9146101865780638da5cb5b1461018f57600080fd5b80626d6cae146101045780632d03b7f81461012057806333c1420a14610135578063715018a61461013d575b600080fd5b61010d60055481565b6040519081526020015b60405180910390f35b61013361012e366004610cb5565b61024f565b005b6101336102eb565b610133610563565b600254610158906001600160a01b031681565b6040516001600160a01b039091168152602001610117565b610178610597565b604051610117929190610da2565b61010d60065481565b6000546001600160a01b0316610158565b6101336101ae366004610cb5565b61074e565b6101336101c1366004610cb5565b6108e0565b6101ce61092e565b6040516101179190610d55565b610133610990565b6101336101f1366004610cb5565b6109cf565b610158610204366004610d25565b610a1a565b610133610217366004610cb5565b610a44565b61023f61022a366004610cb5565b60076020526000908152604090205460ff1681565b6040519015158152602001610117565b6000546001600160a01b031633146102825760405162461bcd60e51b815260040161027990610dfe565b60405180910390fd5b6001600160a01b0381166102c95760405162461bcd60e51b815260206004820152600e60248201526d43616e6e6f74206265207a65726f60901b6044820152606401610279565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146103155760405162461bcd60e51b815260040161027990610dfe565b6002546040805163398b186960e21b815290516001926001600160a01b03169163e62c61a4916004808301926020929190829003018186803b15801561035a57600080fd5b505afa15801561036e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103929190610d06565b60018111156103b157634e487b7160e01b600052602160045260246000fd5b141561043b576002546040805163f8413b0760e01b815281516001600160a01b039093169263f8413b07926004808401939192918290030181600087803b1580156103fb57600080fd5b505af115801561040f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104339190610ce3565b600655600555565b6002546040805163398b186960e21b815290516000926001600160a01b03169163e62c61a4916004808301926020929190829003018186803b15801561048057600080fd5b505afa158015610494573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b89190610d06565b60018111156104d757634e487b7160e01b600052602160045260246000fd5b141561056157600254604051632cdc85e960e21b815260006004820152610561916001600160a01b03169063b37217a4906024015b60206040518083038186803b15801561052457600080fd5b505afa158015610538573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055c9190610d3d565b610adf565b565b6000546001600160a01b0316331461058d5760405162461bcd60e51b815260040161027990610dfe565b6105616000610c65565b6004546060906000908190819067ffffffffffffffff8111156105ca57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561060f57816020015b60408051808201909152600080825260208201528152602001906001900390816105e85790505b50905060005b60045461ffff8216101561074557600060048261ffff168154811061064a57634e487b7160e01b600052603260045260246000fd5b60009182526020822001546001546040516370a0823160e01b81526001600160a01b039283166004820181905294509116906370a082319060240160206040518083038186803b15801561069d57600080fd5b505afa1580156106b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d59190610d3d565b90506106e18186610e33565b94506040518060400160405280836001600160a01b0316815260200182815250848461ffff168151811061072557634e487b7160e01b600052603260045260246000fd5b60200260200101819052505050808061073d90610e62565b915050610615565b50939092509050565b6001600160a01b03811660009081526003602052604090205460ff16156107b75760405162461bcd60e51b815260206004820152601a60248201527f4164647265737320616c726561647920726567697374657265640000000000006044820152606401610279565b6001546040516370a0823160e01b81526001600160a01b03838116600483015260009216906370a082319060240160206040518083038186803b1580156107fd57600080fd5b505afa158015610811573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108359190610d3d565b9050600081116108795760405162461bcd60e51b815260206004820152600f60248201526e26bab9ba103430bb32903a37b5b2b760891b6044820152606401610279565b506001600160a01b03166000818152600360205260408120805460ff191660019081179091556004805491820181559091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319169091179055565b6000546001600160a01b0316331461090a5760405162461bcd60e51b815260040161027990610dfe565b6001600160a01b03166000908152600760205260409020805460ff19166001179055565b6060600480548060200260200160405190810160405280929190818152602001828054801561098657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610968575b5050505050905090565b6002546005546006546040516372bfca3760e11b8152610561936001600160a01b03169263e57f946e9261050c92600401918252602082015260400190565b6000546001600160a01b031633146109f95760405162461bcd60e51b815260040161027990610dfe565b6001600160a01b03166000908152600760205260409020805460ff19169055565b60048181548110610a2a57600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b03163314610a6e5760405162461bcd60e51b815260040161027990610dfe565b6001600160a01b038116610ad35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610279565b610adc81610c65565b50565b600080610aea610597565b90925090506000610afb8285610e84565b905060005b83518161ffff161015610c5e5760076000858361ffff1681518110610b3557634e487b7160e01b600052603260045260246000fd5b602090810291909101810151516001600160a01b031682528101919091526040016000205460ff16158015610b985750838161ffff1681518110610b8957634e487b7160e01b600052603260045260246000fd5b60200260200101516020015182105b15610c0f577f745c90b656b4aafe296c8ca35aeacfe56cb96c90e1d320e5da643fff1051b6c0848261ffff1681518110610be257634e487b7160e01b600052603260045260246000fd5b602090810291909101810151516040516001600160a01b0390911681520160405180910390a15050505050565b838161ffff1681518110610c3357634e487b7160e01b600052603260045260246000fd5b60200260200101516020015182610c4a9190610e4b565b915080610c5681610e62565b915050610b00565b5050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610cc6578081fd5b81356001600160a01b0381168114610cdc578182fd5b9392505050565b60008060408385031215610cf5578081fd5b505080516020909101519092909150565b600060208284031215610d17578081fd5b815160028110610cdc578182fd5b600060208284031215610d36578081fd5b5035919050565b600060208284031215610d4e578081fd5b5051919050565b6020808252825182820181905260009190848201906040850190845b81811015610d965783516001600160a01b031683529284019291840191600101610d71565b50909695505050505050565b60408082528351828201819052600091906020906060850190828801855b82811015610dee57815180516001600160a01b03168552850151858501529285019290840190600101610dc0565b5050509301939093525092915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115610e4657610e46610ea4565b500190565b600082821015610e5d57610e5d610ea4565b500390565b600061ffff80831681811415610e7a57610e7a610ea4565b6001019392505050565b600082610e9f57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea26469706673582212207c986a56293296488958d9f3d0ecda95d8af663f88d4946554463450a389201064736f6c63430008040033";

export class LPRaffle__factory extends ContractFactory {
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
    _lpToken: string,
    _randomUtils: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LPRaffle> {
    return super.deploy(
      _lpToken,
      _randomUtils,
      overrides || {}
    ) as Promise<LPRaffle>;
  }
  getDeployTransaction(
    _lpToken: string,
    _randomUtils: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_lpToken, _randomUtils, overrides || {});
  }
  attach(address: string): LPRaffle {
    return super.attach(address) as LPRaffle;
  }
  connect(signer: Signer): LPRaffle__factory {
    return super.connect(signer) as LPRaffle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LPRaffleInterface {
    return new utils.Interface(_abi) as LPRaffleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LPRaffle {
    return new Contract(address, _abi, signerOrProvider) as LPRaffle;
  }
}
