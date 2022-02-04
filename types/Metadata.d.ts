/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MetadataInterface extends ethers.utils.Interface {
  functions: {
    "compileAttributes(bool,uint8[],uint256)": FunctionFragment;
    "drawSVG(bool,uint8[])": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "tokenMetadata(bool,uint256,uint256)": FunctionFragment;
    "traitData(uint8,uint8)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uploadTraits(uint8,tuple[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "compileAttributes",
    values: [boolean, BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "drawSVG",
    values: [boolean, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenMetadata",
    values: [boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "traitData",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "uploadTraits",
    values: [BigNumberish, { name: string; image: string }[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "compileAttributes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "drawSVG", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "traitData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uploadTraits",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class Metadata extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MetadataInterface;

  functions: {
    compileAttributes(
      isFox: boolean,
      traits: BigNumberish[],
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    drawSVG(
      isFox: boolean,
      traits: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenMetadata(
      isFox: boolean,
      traitId: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    traitData(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { name: string; image: string }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uploadTraits(
      category: BigNumberish,
      traits: { name: string; image: string }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  compileAttributes(
    isFox: boolean,
    traits: BigNumberish[],
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  drawSVG(
    isFox: boolean,
    traits: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenMetadata(
    isFox: boolean,
    traitId: BigNumberish,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  traitData(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { name: string; image: string }>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uploadTraits(
    category: BigNumberish,
    traits: { name: string; image: string }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    compileAttributes(
      isFox: boolean,
      traits: BigNumberish[],
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    drawSVG(
      isFox: boolean,
      traits: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    tokenMetadata(
      isFox: boolean,
      traitId: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    traitData(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { name: string; image: string }>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uploadTraits(
      category: BigNumberish,
      traits: { name: string; image: string }[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    compileAttributes(
      isFox: boolean,
      traits: BigNumberish[],
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    drawSVG(
      isFox: boolean,
      traits: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenMetadata(
      isFox: boolean,
      traitId: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    traitData(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uploadTraits(
      category: BigNumberish,
      traits: { name: string; image: string }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    compileAttributes(
      isFox: boolean,
      traits: BigNumberish[],
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    drawSVG(
      isFox: boolean,
      traits: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenMetadata(
      isFox: boolean,
      traitId: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    traitData(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uploadTraits(
      category: BigNumberish,
      traits: { name: string; image: string }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
