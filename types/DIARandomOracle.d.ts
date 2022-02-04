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

interface DIARandomOracleInterface extends ethers.utils.Interface {
  functions: {
    "getLastRound()": FunctionFragment;
    "getRandomValueFromRound(uint256)": FunctionFragment;
    "getRandomValueFromRoundWithSignature(uint256)": FunctionFragment;
    "getValue(uint256)": FunctionFragment;
    "lastRound()": FunctionFragment;
    "oracleUpdater()": FunctionFragment;
    "setRandomValue(uint256,string,string,string)": FunctionFragment;
    "updateOracleUpdaterAddress(address)": FunctionFragment;
    "values(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getLastRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRandomValueFromRound",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRandomValueFromRoundWithSignature",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lastRound", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "oracleUpdater",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRandomValue",
    values: [BigNumberish, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOracleUpdaterAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "values",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getLastRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRandomValueFromRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRandomValueFromRoundWithSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastRound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oracleUpdater",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRandomValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOracleUpdaterAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;

  events: {
    "OracleUpdate(string,uint128,uint128)": EventFragment;
    "UpdaterAddressChange(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OracleUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdaterAddressChange"): EventFragment;
}

export type OracleUpdateEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    key: string;
    value: BigNumber;
    timestamp: BigNumber;
  }
>;

export type UpdaterAddressChangeEvent = TypedEvent<
  [string] & { newUpdater: string }
>;

export class DIARandomOracle extends BaseContract {
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

  interface: DIARandomOracleInterface;

  functions: {
    getLastRound(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRandomValueFromRound(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRandomValueFromRoundWithSignature(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, string] & {
          randomness: string;
          signature: string;
          previousSignature: string;
        }
      ]
    >;

    getValue(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, string] & {
          randomness: string;
          signature: string;
          previousSignature: string;
        }
      ]
    >;

    lastRound(overrides?: CallOverrides): Promise<[BigNumber]>;

    oracleUpdater(overrides?: CallOverrides): Promise<[string]>;

    setRandomValue(
      _round: BigNumberish,
      _randomness: string,
      _signature: string,
      _previousSignature: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateOracleUpdaterAddress(
      newOracleUpdaterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    values(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        randomness: string;
        signature: string;
        previousSignature: string;
      }
    >;
  };

  getLastRound(overrides?: CallOverrides): Promise<BigNumber>;

  getRandomValueFromRound(
    _round: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRandomValueFromRoundWithSignature(
    _round: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      randomness: string;
      signature: string;
      previousSignature: string;
    }
  >;

  getValue(
    _round: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      randomness: string;
      signature: string;
      previousSignature: string;
    }
  >;

  lastRound(overrides?: CallOverrides): Promise<BigNumber>;

  oracleUpdater(overrides?: CallOverrides): Promise<string>;

  setRandomValue(
    _round: BigNumberish,
    _randomness: string,
    _signature: string,
    _previousSignature: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateOracleUpdaterAddress(
    newOracleUpdaterAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  values(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      randomness: string;
      signature: string;
      previousSignature: string;
    }
  >;

  callStatic: {
    getLastRound(overrides?: CallOverrides): Promise<BigNumber>;

    getRandomValueFromRound(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRandomValueFromRoundWithSignature(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        randomness: string;
        signature: string;
        previousSignature: string;
      }
    >;

    getValue(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        randomness: string;
        signature: string;
        previousSignature: string;
      }
    >;

    lastRound(overrides?: CallOverrides): Promise<BigNumber>;

    oracleUpdater(overrides?: CallOverrides): Promise<string>;

    setRandomValue(
      _round: BigNumberish,
      _randomness: string,
      _signature: string,
      _previousSignature: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOracleUpdaterAddress(
      newOracleUpdaterAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    values(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        randomness: string;
        signature: string;
        previousSignature: string;
      }
    >;
  };

  filters: {
    "OracleUpdate(string,uint128,uint128)"(
      key?: null,
      value?: null,
      timestamp?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { key: string; value: BigNumber; timestamp: BigNumber }
    >;

    OracleUpdate(
      key?: null,
      value?: null,
      timestamp?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { key: string; value: BigNumber; timestamp: BigNumber }
    >;

    "UpdaterAddressChange(address)"(
      newUpdater?: null
    ): TypedEventFilter<[string], { newUpdater: string }>;

    UpdaterAddressChange(
      newUpdater?: null
    ): TypedEventFilter<[string], { newUpdater: string }>;
  };

  estimateGas: {
    getLastRound(overrides?: CallOverrides): Promise<BigNumber>;

    getRandomValueFromRound(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRandomValueFromRoundWithSignature(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValue(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastRound(overrides?: CallOverrides): Promise<BigNumber>;

    oracleUpdater(overrides?: CallOverrides): Promise<BigNumber>;

    setRandomValue(
      _round: BigNumberish,
      _randomness: string,
      _signature: string,
      _previousSignature: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateOracleUpdaterAddress(
      newOracleUpdaterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getLastRound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRandomValueFromRound(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRandomValueFromRoundWithSignature(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValue(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastRound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracleUpdater(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRandomValue(
      _round: BigNumberish,
      _randomness: string,
      _signature: string,
      _previousSignature: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateOracleUpdaterAddress(
      newOracleUpdaterAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    values(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}