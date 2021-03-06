/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DIARandomOracle,
  DIARandomOracleInterface,
} from "../DIARandomOracle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "value",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "timestamp",
        type: "uint128",
      },
    ],
    name: "OracleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newUpdater",
        type: "address",
      },
    ],
    name: "UpdaterAddressChange",
    type: "event",
  },
  {
    inputs: [],
    name: "getLastRound",
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
        name: "_round",
        type: "uint256",
      },
    ],
    name: "getRandomValueFromRound",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
    ],
    name: "getRandomValueFromRoundWithSignature",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "randomness",
            type: "string",
          },
          {
            internalType: "string",
            name: "signature",
            type: "string",
          },
          {
            internalType: "string",
            name: "previousSignature",
            type: "string",
          },
        ],
        internalType: "struct DIARandomOracle.Random",
        name: "",
        type: "tuple",
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
    name: "getValue",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "randomness",
            type: "string",
          },
          {
            internalType: "string",
            name: "signature",
            type: "string",
          },
          {
            internalType: "string",
            name: "previousSignature",
            type: "string",
          },
        ],
        internalType: "struct DIARandomOracle.Random",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastRound",
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
    inputs: [],
    name: "oracleUpdater",
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
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_randomness",
        type: "string",
      },
      {
        internalType: "string",
        name: "_signature",
        type: "string",
      },
      {
        internalType: "string",
        name: "_previousSignature",
        type: "string",
      },
    ],
    name: "setRandomValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOracleUpdaterAddress",
        type: "address",
      },
    ],
    name: "updateOracleUpdaterAddress",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "values",
    outputs: [
      {
        internalType: "string",
        name: "randomness",
        type: "string",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "string",
        name: "previousSignature",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b50600280546001600160a01b03191633179055610aec806100376000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80636f9aa784116100665780636f9aa7841461010a578063805d64a01461012a57806382bc07e614610155578063a921a50214610098578063bfcd57711461015e57600080fd5b80630ff4c916146100985780634231a2c3146100c15780635e383d21146100d35780636aa45efc146100f5575b600080fd5b6100ab6100a63660046108bd565b610171565b6040516100b89190610a04565b60405180910390f35b6001545b6040519081526020016100b8565b6100e66100e13660046108bd565b61036a565b6040516100b8939291906109c1565b61010861010336600461088f565b610524565b005b61011d6101183660046108bd565b6105c7565b6040516100b891906109ae565b60025461013d906001600160a01b031681565b6040516001600160a01b0390911681526020016100b8565b6100c560015481565b61010861016c3660046108d5565b610669565b61019560405180606001604052806060815260200160608152602001606081525090565b600082815260208190526040908190208151606081019092528054829082906101bd90610a65565b80601f01602080910402602001604051908101604052809291908181526020018280546101e990610a65565b80156102365780601f1061020b57610100808354040283529160200191610236565b820191906000526020600020905b81548152906001019060200180831161021957829003601f168201915b5050505050815260200160018201805461024f90610a65565b80601f016020809104026020016040519081016040528092919081815260200182805461027b90610a65565b80156102c85780601f1061029d576101008083540402835291602001916102c8565b820191906000526020600020905b8154815290600101906020018083116102ab57829003601f168201915b505050505081526020016002820180546102e190610a65565b80601f016020809104026020016040519081016040528092919081815260200182805461030d90610a65565b801561035a5780601f1061032f5761010080835404028352916020019161035a565b820191906000526020600020905b81548152906001019060200180831161033d57829003601f168201915b5050505050815250509050919050565b60006020819052908152604090208054819061038590610a65565b80601f01602080910402602001604051908101604052809291908181526020018280546103b190610a65565b80156103fe5780601f106103d3576101008083540402835291602001916103fe565b820191906000526020600020905b8154815290600101906020018083116103e157829003601f168201915b50505050509080600101805461041390610a65565b80601f016020809104026020016040519081016040528092919081815260200182805461043f90610a65565b801561048c5780601f106104615761010080835404028352916020019161048c565b820191906000526020600020905b81548152906001019060200180831161046f57829003601f168201915b5050505050908060020180546104a190610a65565b80601f01602080910402602001604051908101604052809291908181526020018280546104cd90610a65565b801561051a5780601f106104ef5761010080835404028352916020019161051a565b820191906000526020600020905b8154815290600101906020018083116104fd57829003601f168201915b5050505050905083565b6002546001600160a01b031633146105735760405162461bcd60e51b815260206004820152600d60248201526c3737ba1030903ab83230ba32b960991b60448201526064015b60405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040519081527f121e958a4cadf7f8dadefa22cc019700365240223668418faebed197da07089f9060200160405180910390a150565b60008181526020819052604090208054606091906105e490610a65565b80601f016020809104026020016040519081016040528092919081815260200182805461061090610a65565b801561065d5780601f106106325761010080835404028352916020019161065d565b820191906000526020600020905b81548152906001019060200180831161064057829003601f168201915b50505050509050919050565b6002546001600160a01b031633146106b35760405162461bcd60e51b815260206004820152600d60248201526c3737ba1030903ab83230ba32b960991b604482015260640161056a565b83600154106106f05760405162461bcd60e51b81526020600482015260096024820152681bdb19081c9bdd5b9960ba1b604482015260640161056a565b60018490556040805160608101825284815260208082018590528183018490526000878152808252929092208151805192939192610731928492019061076f565b50602082810151805161074a926001850192019061076f565b506040820151805161076691600284019160209091019061076f565b50505050505050565b82805461077b90610a65565b90600052602060002090601f01602090048101928261079d57600085556107e3565b82601f106107b657805160ff19168380011785556107e3565b828001600101855582156107e3579182015b828111156107e35782518255916020019190600101906107c8565b506107ef9291506107f3565b5090565b5b808211156107ef57600081556001016107f4565b600082601f830112610818578081fd5b813567ffffffffffffffff8082111561083357610833610aa0565b604051601f8301601f19908116603f0116810190828211818310171561085b5761085b610aa0565b81604052838152866020858801011115610873578485fd5b8360208701602083013792830160200193909352509392505050565b6000602082840312156108a0578081fd5b81356001600160a01b03811681146108b6578182fd5b9392505050565b6000602082840312156108ce578081fd5b5035919050565b600080600080608085870312156108ea578283fd5b84359350602085013567ffffffffffffffff80821115610908578485fd5b61091488838901610808565b94506040870135915080821115610929578384fd5b61093588838901610808565b9350606087013591508082111561094a578283fd5b5061095787828801610808565b91505092959194509250565b60008151808452815b818110156109885760208185018101518683018201520161096c565b818111156109995782602083870101525b50601f01601f19169290920160200192915050565b6020815260006108b66020830184610963565b6060815260006109d46060830186610963565b82810360208401526109e68186610963565b905082810360408401526109fa8185610963565b9695505050505050565b602081526000825160606020840152610a206080840182610963565b90506020840151601f1980858403016040860152610a3e8383610963565b9250604086015191508085840301606086015250610a5c8282610963565b95945050505050565b600181811c90821680610a7957607f821691505b60208210811415610a9a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ef69fbc1ba76ac7a0f97ab200d4065dfd674b8711c911f1943ee1f79132549bc64736f6c63430008040033";

export class DIARandomOracle__factory extends ContractFactory {
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
  ): Promise<DIARandomOracle> {
    return super.deploy(overrides || {}) as Promise<DIARandomOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DIARandomOracle {
    return super.attach(address) as DIARandomOracle;
  }
  connect(signer: Signer): DIARandomOracle__factory {
    return super.connect(signer) as DIARandomOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DIARandomOracleInterface {
    return new utils.Interface(_abi) as DIARandomOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DIARandomOracle {
    return new Contract(address, _abi, signerOrProvider) as DIARandomOracle;
  }
}
