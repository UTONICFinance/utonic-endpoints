import BN from 'bn.js';
import BigNumber from 'bignumber.js';
import { PromiEvent, TransactionReceipt, EventResponse, EventData, Web3ContractContext } from 'ethereum-abi-types-generator';

export interface CallOptions {
    from?: string;
    gasPrice?: string;
    gas?: number;
}

export interface SendOptions {
    from: string;
    value?: number | string | BN | BigNumber;
    gasPrice?: string;
    gas?: number;
}

export interface EstimateGasOptions {
    from?: string;
    value?: number | string | BN | BigNumber;
    gas?: number;
}

export interface MethodPayableReturnContext {
    send(options: SendOptions): PromiEvent<TransactionReceipt>;
    send(options: SendOptions, callback: (error: Error, result: any) => void): PromiEvent<TransactionReceipt>;
    estimateGas(options: EstimateGasOptions): Promise<number>;
    estimateGas(options: EstimateGasOptions, callback: (error: Error, result: any) => void): Promise<number>;
    encodeABI(): string;
}

export interface MethodConstantReturnContext<TCallReturn> {
    call(): Promise<TCallReturn>;
    call(options: CallOptions): Promise<TCallReturn>;
    call(options: CallOptions, callback: (error: Error, result: TCallReturn) => void): Promise<TCallReturn>;
    encodeABI(): string;
}

export interface MethodReturnContext extends MethodPayableReturnContext {}

export type UniswapV3FactoryContract = Web3ContractContext<
    UniswapV3Factory,
    UniswapV3FactoryMethodNames,
    UniswapV3FactoryEventsContext,
    UniswapV3FactoryEvents
>;
export type UniswapV3FactoryEvents = 'FeeAmountEnabled' | 'OwnerChanged' | 'PoolCreated';
export interface UniswapV3FactoryEventsContext {
    FeeAmountEnabled(
        parameters: {
            filter?: { fee?: string | number | string | number[]; tickSpacing?: string | number | string | number[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    OwnerChanged(
        parameters: {
            filter?: { oldOwner?: string | string[]; newOwner?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    PoolCreated(
        parameters: {
            filter?: { token0?: string | string[]; token1?: string | string[]; fee?: string | number | string | number[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
}
export type UniswapV3FactoryMethodNames =
    | 'new'
    | 'createPool'
    | 'enableFeeAmount'
    | 'feeAmountTickSpacing'
    | 'getPool'
    | 'owner'
    | 'parameters'
    | 'setOwner';
export interface FeeAmountEnabledEventEmittedResponse {
    fee: string | number;
    tickSpacing: string | number;
}
export interface OwnerChangedEventEmittedResponse {
    oldOwner: string;
    newOwner: string;
}
export interface PoolCreatedEventEmittedResponse {
    token0: string;
    token1: string;
    fee: string | number;
    tickSpacing: string | number;
    pool: string;
}
export interface ParametersResponse {
    factory: string;
    token0: string;
    token1: string;
    fee: string;
    tickSpacing: string;
}
export interface UniswapV3Factory {
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: constructor
     */
    'new'(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param tokenA Type: address, Indexed: false
     * @param tokenB Type: address, Indexed: false
     * @param fee Type: uint24, Indexed: false
     */
    createPool(tokenA: string, tokenB: string, fee: string | number): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param fee Type: uint24, Indexed: false
     * @param tickSpacing Type: int24, Indexed: false
     */
    enableFeeAmount(fee: string | number, tickSpacing: string | number): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint24, Indexed: false
     */
    feeAmountTickSpacing(parameter0: string | number): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     * @param parameter1 Type: address, Indexed: false
     * @param parameter2 Type: uint24, Indexed: false
     */
    getPool(parameter0: string, parameter1: string, parameter2: string | number): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    owner(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    parameters(): MethodConstantReturnContext<ParametersResponse>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _owner Type: address, Indexed: false
     */
    setOwner(_owner: string): MethodReturnContext;
}
