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

export type PoolContract = Web3ContractContext<Pool, PoolMethodNames, PoolEventsContext, PoolEvents>;
export type PoolEvents = 'AddLimitOrder' | 'Burn' | 'DecLimitOrder' | 'Flash' | 'Mint' | 'Swap';
export interface PoolEventsContext {
    AddLimitOrder(
        parameters: {
            filter?: {};
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    Burn(
        parameters: {
            filter?: {
                owner?: string | string[];
                leftPoint?: string | number | string | number[];
                rightPoint?: string | number | string | number[];
            };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    DecLimitOrder(
        parameters: {
            filter?: {};
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    Flash(
        parameters: {
            filter?: { sender?: string | string[]; recipient?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    Mint(
        parameters: {
            filter?: {
                owner?: string | string[];
                leftPoint?: string | number | string | number[];
                rightPoint?: string | number | string | number[];
            };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    Swap(
        parameters: {
            filter?: { tokenX?: string | string[]; tokenY?: string | string[]; fee?: string | number | string | number[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
}
export type PoolMethodNames =
    | 'new'
    | 'addLimOrderWithX'
    | 'addLimOrderWithY'
    | 'assignLimOrderEarnX'
    | 'assignLimOrderEarnY'
    | 'burn'
    | 'collect'
    | 'collectFeeCharged'
    | 'collectLimOrder'
    | 'decLimOrderWithX'
    | 'decLimOrderWithY'
    | 'expandObservationQueue'
    | 'factory'
    | 'fee'
    | 'feeChargePercent'
    | 'feeScaleX_128'
    | 'feeScaleY_128'
    | 'flash'
    | 'leftMostPt'
    | 'limitOrderData'
    | 'liquidity'
    | 'liquiditySnapshot'
    | 'maxLiquidPt'
    | 'mint'
    | 'observations'
    | 'observe'
    | 'orderOrEndpoint'
    | 'pointBitmap'
    | 'pointDelta'
    | 'points'
    | 'rightMostPt'
    | 'sqrtRate_96'
    | 'state'
    | 'swapX2Y'
    | 'swapX2YDesireY'
    | 'swapY2X'
    | 'swapY2XDesireX'
    | 'tokenX'
    | 'tokenY'
    | 'totalFeeXCharged'
    | 'totalFeeYCharged'
    | 'userEarnX'
    | 'userEarnY';
export interface AddLimitOrderEventEmittedResponse {
    amount: string;
    point: string | number;
    sellXEarnY: boolean;
}
export interface BurnEventEmittedResponse {
    owner: string;
    leftPoint: string | number;
    rightPoint: string | number;
    liquidity: string;
    amountX: string;
    amountY: string;
}
export interface DecLimitOrderEventEmittedResponse {
    amount: string;
    point: string | number;
    sellXEarnY: boolean;
}
export interface FlashEventEmittedResponse {
    sender: string;
    recipient: string;
    amountX: string;
    amountY: string;
    paidX: string;
    paidY: string;
}
export interface MintEventEmittedResponse {
    sender: string;
    owner: string;
    leftPoint: string | number;
    rightPoint: string | number;
    liquidity: string;
    amountX: string;
    amountY: string;
}
export interface SwapEventEmittedResponse {
    tokenX: string;
    tokenY: string;
    fee: string | number;
    sellXEarnY: boolean;
    amountX: string;
    amountY: string;
}
export interface LimitOrderDataResponse {
    sellingX: string;
    earnY: string;
    accEarnY: string;
    sellingY: string;
    earnX: string;
    accEarnX: string;
}
export interface LiquidityResponse {
    liquidity: string;
    lastFeeScaleX_128: string;
    lastFeeScaleY_128: string;
    tokenOwedX: string;
    tokenOwedY: string;
}
export interface ObservationsResponse {
    timestamp: string;
    pointCumulative: string;
    secondsPerLiquidityCumulative_128: string;
    init: boolean;
}
export interface ObserveResponse {
    pointCumulatives: string[];
    secondsPerLiquidityCumulative_128s: string[];
}
export interface PointsResponse {
    liquidSum: string;
    liquidDelta: string;
    accFeeXOut_128: string;
    accFeeYOut_128: string;
    isEndpt: boolean;
}
export interface StateResponse {
    sqrtPrice_96: string;
    currentPoint: string;
    observationCurrentIndex: string;
    observationQueueLen: string;
    observationNextQueueLen: string;
    locked: boolean;
    liquidity: string;
    liquidityX: string;
}
export interface UserEarnXResponse {
    lastAccEarn: string;
    sellingRemain: string;
    sellingDec: string;
    earn: string;
    earnAssign: string;
}
export interface UserEarnYResponse {
    lastAccEarn: string;
    sellingRemain: string;
    sellingDec: string;
    earn: string;
    earnAssign: string;
}
export interface Pool {
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: constructor
     * @param _factory Type: address, Indexed: false
     * @param _tokenX Type: address, Indexed: false
     * @param _tokenY Type: address, Indexed: false
     * @param _fee Type: uint24, Indexed: false
     * @param currentPoint Type: int24, Indexed: false
     * @param _pointDelta Type: int24, Indexed: false
     */
    'new'(
        _factory: string,
        _tokenX: string,
        _tokenY: string,
        _fee: string | number,
        currentPoint: string | number,
        _pointDelta: string | number
    ): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param recipient Type: address, Indexed: false
     * @param point Type: int24, Indexed: false
     * @param amountX Type: uint128, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    addLimOrderWithX(recipient: string, point: string | number, amountX: string, data: string | number[]): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param recipient Type: address, Indexed: false
     * @param point Type: int24, Indexed: false
     * @param amountY Type: uint128, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    addLimOrderWithY(recipient: string, point: string | number, amountY: string, data: string | number[]): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param point Type: int24, Indexed: false
     * @param assignX Type: uint128, Indexed: false
     */
    assignLimOrderEarnX(point: string | number, assignX: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param point Type: int24, Indexed: false
     * @param assignY Type: uint128, Indexed: false
     */
    assignLimOrderEarnY(point: string | number, assignY: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param leftPt Type: int24, Indexed: false
     * @param rightPt Type: int24, Indexed: false
     * @param liquidDelta Type: uint128, Indexed: false
     */
    burn(leftPt: string | number, rightPt: string | number, liquidDelta: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param recipient Type: address, Indexed: false
     * @param leftPt Type: int24, Indexed: false
     * @param rightPt Type: int24, Indexed: false
     * @param amountXLim Type: uint256, Indexed: false
     * @param amountYLim Type: uint256, Indexed: false
     */
    collect(
        recipient: string,
        leftPt: string | number,
        rightPt: string | number,
        amountXLim: string,
        amountYLim: string
    ): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    collectFeeCharged(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param recipient Type: address, Indexed: false
     * @param point Type: int24, Indexed: false
     * @param collectDec Type: uint128, Indexed: false
     * @param collectEarn Type: uint128, Indexed: false
     * @param isEarnY Type: bool, Indexed: false
     */
    collectLimOrder(
        recipient: string,
        point: string | number,
        collectDec: string,
        collectEarn: string,
        isEarnY: boolean
    ): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param point Type: int24, Indexed: false
     * @param deltaX Type: uint128, Indexed: false
     */
    decLimOrderWithX(point: string | number, deltaX: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param point Type: int24, Indexed: false
     * @param deltaY Type: uint128, Indexed: false
     */
    decLimOrderWithY(point: string | number, deltaY: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param newNextQueueLen Type: uint16, Indexed: false
     */
    expandObservationQueue(newNextQueueLen: string | number): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    factory(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    fee(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    feeChargePercent(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    feeScaleX_128(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    feeScaleY_128(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param recipient Type: address, Indexed: false
     * @param amountX Type: uint256, Indexed: false
     * @param amountY Type: uint256, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    flash(recipient: string, amountX: string, amountY: string, data: string | number[]): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    leftMostPt(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: int24, Indexed: false
     */
    limitOrderData(parameter0: string | number): MethodConstantReturnContext<LimitOrderDataResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: bytes32, Indexed: false
     */
    liquidity(parameter0: string | number[]): MethodConstantReturnContext<LiquidityResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param leftPoint Type: int24, Indexed: false
     * @param rightPoint Type: int24, Indexed: false
     */
    liquiditySnapshot(leftPoint: string | number, rightPoint: string | number): MethodConstantReturnContext<string[]>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    maxLiquidPt(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param recipient Type: address, Indexed: false
     * @param leftPt Type: int24, Indexed: false
     * @param rightPt Type: int24, Indexed: false
     * @param liquidDelta Type: uint128, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    mint(
        recipient: string,
        leftPt: string | number,
        rightPt: string | number,
        liquidDelta: string,
        data: string | number[]
    ): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     */
    observations(parameter0: string): MethodConstantReturnContext<ObservationsResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param secondsAgos Type: uint32[], Indexed: false
     */
    observe(secondsAgos: string | number[]): MethodConstantReturnContext<ObserveResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: int24, Indexed: false
     */
    orderOrEndpoint(parameter0: string | number): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: int16, Indexed: false
     */
    pointBitmap(parameter0: string | number): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    pointDelta(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: int24, Indexed: false
     */
    points(parameter0: string | number): MethodConstantReturnContext<PointsResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    rightMostPt(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    sqrtRate_96(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    state(): MethodConstantReturnContext<StateResponse>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param recipient Type: address, Indexed: false
     * @param amount Type: uint128, Indexed: false
     * @param lowPt Type: int24, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    swapX2Y(recipient: string, amount: string, lowPt: string | number, data: string | number[]): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param recipient Type: address, Indexed: false
     * @param desireY Type: uint128, Indexed: false
     * @param lowPt Type: int24, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    swapX2YDesireY(recipient: string, desireY: string, lowPt: string | number, data: string | number[]): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param recipient Type: address, Indexed: false
     * @param amount Type: uint128, Indexed: false
     * @param highPt Type: int24, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    swapY2X(recipient: string, amount: string, highPt: string | number, data: string | number[]): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param recipient Type: address, Indexed: false
     * @param desireX Type: uint128, Indexed: false
     * @param highPt Type: int24, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    swapY2XDesireX(recipient: string, desireX: string, highPt: string | number, data: string | number[]): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    tokenX(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    tokenY(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    totalFeeXCharged(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    totalFeeYCharged(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: bytes32, Indexed: false
     */
    userEarnX(parameter0: string | number[]): MethodConstantReturnContext<UserEarnXResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: bytes32, Indexed: false
     */
    userEarnY(parameter0: string | number[]): MethodConstantReturnContext<UserEarnYResponse>;
}
