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

interface RandomUtilsInterface extends ethers.utils.Interface {
  functions: {
    "getRandomNumber(uint256)": FunctionFragment;
    "randomKind()": FunctionFragment;
    "requestRandomness()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRandomNumber",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "randomKind",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomness",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getRandomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "randomKind", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomness",
    data: BytesLike
  ): Result;

  events: {};
}

export class RandomUtils extends BaseContract {
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

  interface: RandomUtilsInterface;

  functions: {
    "getRandomNumber(uint256)"(
      seed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getRandomNumber(bytes32,uint256)"(
      seed: BytesLike,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    randomKind(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestRandomness(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  "getRandomNumber(uint256)"(
    seed: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getRandomNumber(bytes32,uint256)"(
    seed: BytesLike,
    round: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  randomKind(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestRandomness(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "getRandomNumber(uint256)"(
      seed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRandomNumber(bytes32,uint256)"(
      seed: BytesLike,
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    randomKind(overrides?: CallOverrides): Promise<number>;

    requestRandomness(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { seed: string; roundId: BigNumber }>;
  };

  filters: {};

  estimateGas: {
    "getRandomNumber(uint256)"(
      seed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRandomNumber(bytes32,uint256)"(
      seed: BytesLike,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    randomKind(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestRandomness(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "getRandomNumber(uint256)"(
      seed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRandomNumber(bytes32,uint256)"(
      seed: BytesLike,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    randomKind(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestRandomness(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}