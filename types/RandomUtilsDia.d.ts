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

interface RandomUtilsDiaInterface extends ethers.utils.Interface {
  functions: {
    "DELAY()": FunctionFragment;
    "getRandomNumber(uint256)": FunctionFragment;
    "getRandomValue(uint256)": FunctionFragment;
    "randomKind()": FunctionFragment;
    "randomOracle()": FunctionFragment;
    "requestRandomness()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DELAY", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRandomNumber",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRandomValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "randomKind",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "randomOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomness",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "DELAY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRandomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRandomValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "randomKind", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "randomOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomness",
    data: BytesLike
  ): Result;

  events: {
    "RequestRandomness(address,bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RequestRandomness"): EventFragment;
}

export type RequestRandomnessEvent = TypedEvent<
  [string, string, BigNumber] & {
    caller: string;
    requestId: string;
    roundId: BigNumber;
  }
>;

export class RandomUtilsDia extends BaseContract {
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

  interface: RandomUtilsDiaInterface;

  functions: {
    DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getRandomNumber(uint256)"(
      seed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getRandomNumber(bytes32,uint256)"(
      requestId: BytesLike,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRandomValue(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    randomKind(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    randomOracle(overrides?: CallOverrides): Promise<[string]>;

    requestRandomness(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  "getRandomNumber(uint256)"(
    seed: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getRandomNumber(bytes32,uint256)"(
    requestId: BytesLike,
    round: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRandomValue(
    _round: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  randomKind(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  randomOracle(overrides?: CallOverrides): Promise<string>;

  requestRandomness(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    "getRandomNumber(uint256)"(
      seed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRandomNumber(bytes32,uint256)"(
      requestId: BytesLike,
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRandomValue(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    randomKind(overrides?: CallOverrides): Promise<number>;

    randomOracle(overrides?: CallOverrides): Promise<string>;

    requestRandomness(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { requestId: string; roundId: BigNumber }>;
  };

  filters: {
    "RequestRandomness(address,bytes32,uint256)"(
      caller?: null,
      requestId?: null,
      roundId?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { caller: string; requestId: string; roundId: BigNumber }
    >;

    RequestRandomness(
      caller?: null,
      requestId?: null,
      roundId?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { caller: string; requestId: string; roundId: BigNumber }
    >;
  };

  estimateGas: {
    DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    "getRandomNumber(uint256)"(
      seed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRandomNumber(bytes32,uint256)"(
      requestId: BytesLike,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRandomValue(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    randomKind(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    randomOracle(overrides?: CallOverrides): Promise<BigNumber>;

    requestRandomness(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getRandomNumber(uint256)"(
      seed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRandomNumber(bytes32,uint256)"(
      requestId: BytesLike,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRandomValue(
      _round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    randomKind(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    randomOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    requestRandomness(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}