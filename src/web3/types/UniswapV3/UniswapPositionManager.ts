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

export type UniswapPositionManagerContract = Web3ContractContext<
    UniswapPositionManager,
    UniswapPositionManagerMethodNames,
    UniswapPositionManagerEventsContext,
    UniswapPositionManagerEvents
>;
export type UniswapPositionManagerEvents =
    | 'Approval'
    | 'ApprovalForAll'
    | 'Collect'
    | 'DecreaseLiquidity'
    | 'IncreaseLiquidity'
    | 'Transfer';
export interface UniswapPositionManagerEventsContext {
    Approval(
        parameters: {
            filter?: { owner?: string | string[]; approved?: string | string[]; tokenId?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    ApprovalForAll(
        parameters: {
            filter?: { owner?: string | string[]; operator?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    Collect(
        parameters: {
            filter?: { tokenId?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    DecreaseLiquidity(
        parameters: {
            filter?: { tokenId?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    IncreaseLiquidity(
        parameters: {
            filter?: { tokenId?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    Transfer(
        parameters: {
            filter?: { from?: string | string[]; to?: string | string[]; tokenId?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
}
export type UniswapPositionManagerMethodNames =
    | 'new'
    | 'DOMAIN_SEPARATOR'
    | 'PERMIT_TYPEHASH'
    | 'WETH9'
    | 'approve'
    | 'balanceOf'
    | 'baseURI'
    | 'burn'
    | 'collect'
    | 'createAndInitializePoolIfNecessary'
    | 'decreaseLiquidity'
    | 'factory'
    | 'getApproved'
    | 'increaseLiquidity'
    | 'isApprovedForAll'
    | 'mint'
    | 'multicall'
    | 'name'
    | 'ownerOf'
    | 'permit'
    | 'positions'
    | 'refundETH'
    | 'safeTransferFrom'
    | 'safeTransferFrom'
    | 'selfPermit'
    | 'selfPermitAllowed'
    | 'selfPermitAllowedIfNecessary'
    | 'selfPermitIfNecessary'
    | 'setApprovalForAll'
    | 'supportsInterface'
    | 'sweepToken'
    | 'symbol'
    | 'tokenByIndex'
    | 'tokenOfOwnerByIndex'
    | 'tokenURI'
    | 'totalSupply'
    | 'transferFrom'
    | 'uniswapV3MintCallback'
    | 'unwrapWETH9';
export interface ApprovalEventEmittedResponse {
    owner: string;
    approved: string;
    tokenId: string;
}
export interface ApprovalForAllEventEmittedResponse {
    owner: string;
    operator: string;
    approved: boolean;
}
export interface CollectEventEmittedResponse {
    tokenId: string;
    recipient: string;
    amount0: string;
    amount1: string;
}
export interface DecreaseLiquidityEventEmittedResponse {
    tokenId: string;
    liquidity: string;
    amount0: string;
    amount1: string;
}
export interface IncreaseLiquidityEventEmittedResponse {
    tokenId: string;
    liquidity: string;
    amount0: string;
    amount1: string;
}
export interface TransferEventEmittedResponse {
    from: string;
    to: string;
    tokenId: string;
}
export interface CollectRequest {
    tokenId: string;
    recipient: string;
    amount0Max: string;
    amount1Max: string;
}
export interface DecreaseLiquidityRequest {
    tokenId: string;
    liquidity: string;
    amount0Min: string;
    amount1Min: string;
    deadline: string;
}
export interface IncreaseLiquidityRequest {
    tokenId: string;
    amount0Desired: string;
    amount1Desired: string;
    amount0Min: string;
    amount1Min: string;
    deadline: string;
}
export interface MintRequest {
    token0: string;
    token1: string;
    fee: string | number;
    tickLower: string | number;
    tickUpper: string | number;
    amount0Desired: string;
    amount1Desired: string;
    amount0Min: string;
    amount1Min: string;
    recipient: string;
    deadline: string;
}
export interface PositionsResponse {
    nonce: string;
    operator: string;
    token0: string;
    token1: string;
    fee: string;
    tickLower: string;
    tickUpper: string;
    liquidity: string;
    feeGrowthInside0LastX128: string;
    feeGrowthInside1LastX128: string;
    tokensOwed0: string;
    tokensOwed1: string;
}
export interface UniswapPositionManager {
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: constructor
     * @param _factory Type: address, Indexed: false
     * @param _WETH9 Type: address, Indexed: false
     * @param _tokenDescriptor_ Type: address, Indexed: false
     */
    'new'(_factory: string, _WETH9: string, _tokenDescriptor_: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    DOMAIN_SEPARATOR(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    PERMIT_TYPEHASH(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    WETH9(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param to Type: address, Indexed: false
     * @param tokenId Type: uint256, Indexed: false
     */
    approve(to: string, tokenId: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param owner Type: address, Indexed: false
     */
    balanceOf(owner: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: pure
     * Type: function
     */
    baseURI(): MethodConstantReturnContext<string>;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param tokenId Type: uint256, Indexed: false
     */
    burn(tokenId: string): MethodPayableReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param params Type: tuple, Indexed: false
     */
    collect(params: CollectRequest): MethodPayableReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param token0 Type: address, Indexed: false
     * @param token1 Type: address, Indexed: false
     * @param fee Type: uint24, Indexed: false
     * @param sqrtPriceX96 Type: uint160, Indexed: false
     */
    createAndInitializePoolIfNecessary(
        token0: string,
        token1: string,
        fee: string | number,
        sqrtPriceX96: string
    ): MethodPayableReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param params Type: tuple, Indexed: false
     */
    decreaseLiquidity(params: DecreaseLiquidityRequest): MethodPayableReturnContext;
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
     * @param tokenId Type: uint256, Indexed: false
     */
    getApproved(tokenId: string): MethodConstantReturnContext<string>;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param params Type: tuple, Indexed: false
     */
    increaseLiquidity(params: IncreaseLiquidityRequest): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param owner Type: address, Indexed: false
     * @param operator Type: address, Indexed: false
     */
    isApprovedForAll(owner: string, operator: string): MethodConstantReturnContext<boolean>;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param params Type: tuple, Indexed: false
     */
    mint(params: MintRequest): MethodPayableReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param data Type: bytes[], Indexed: false
     */
    multicall(data: string[] | number[]): MethodPayableReturnContext & MethodConstantReturnContext<string[]>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    name(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param tokenId Type: uint256, Indexed: false
     */
    ownerOf(tokenId: string): MethodConstantReturnContext<string>;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param spender Type: address, Indexed: false
     * @param tokenId Type: uint256, Indexed: false
     * @param deadline Type: uint256, Indexed: false
     * @param v Type: uint8, Indexed: false
     * @param r Type: bytes32, Indexed: false
     * @param s Type: bytes32, Indexed: false
     */
    permit(
        spender: string,
        tokenId: string,
        deadline: string,
        v: string | number,
        r: string | number[],
        s: string | number[]
    ): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param tokenId Type: uint256, Indexed: false
     */
    positions(tokenId: string): MethodConstantReturnContext<PositionsResponse>;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     */
    refundETH(): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param from Type: address, Indexed: false
     * @param to Type: address, Indexed: false
     * @param tokenId Type: uint256, Indexed: false
     */
    safeTransferFrom(from: string, to: string, tokenId: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param from Type: address, Indexed: false
     * @param to Type: address, Indexed: false
     * @param tokenId Type: uint256, Indexed: false
     * @param _data Type: bytes, Indexed: false
     */
    safeTransferFrom(from: string, to: string, tokenId: string, _data: string | number[]): MethodReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param token Type: address, Indexed: false
     * @param value Type: uint256, Indexed: false
     * @param deadline Type: uint256, Indexed: false
     * @param v Type: uint8, Indexed: false
     * @param r Type: bytes32, Indexed: false
     * @param s Type: bytes32, Indexed: false
     */
    selfPermit(
        token: string,
        value: string,
        deadline: string,
        v: string | number,
        r: string | number[],
        s: string | number[]
    ): MethodPayableReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param token Type: address, Indexed: false
     * @param nonce Type: uint256, Indexed: false
     * @param expiry Type: uint256, Indexed: false
     * @param v Type: uint8, Indexed: false
     * @param r Type: bytes32, Indexed: false
     * @param s Type: bytes32, Indexed: false
     */
    selfPermitAllowed(
        token: string,
        nonce: string,
        expiry: string,
        v: string | number,
        r: string | number[],
        s: string | number[]
    ): MethodPayableReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param token Type: address, Indexed: false
     * @param nonce Type: uint256, Indexed: false
     * @param expiry Type: uint256, Indexed: false
     * @param v Type: uint8, Indexed: false
     * @param r Type: bytes32, Indexed: false
     * @param s Type: bytes32, Indexed: false
     */
    selfPermitAllowedIfNecessary(
        token: string,
        nonce: string,
        expiry: string,
        v: string | number,
        r: string | number[],
        s: string | number[]
    ): MethodPayableReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param token Type: address, Indexed: false
     * @param value Type: uint256, Indexed: false
     * @param deadline Type: uint256, Indexed: false
     * @param v Type: uint8, Indexed: false
     * @param r Type: bytes32, Indexed: false
     * @param s Type: bytes32, Indexed: false
     */
    selfPermitIfNecessary(
        token: string,
        value: string,
        deadline: string,
        v: string | number,
        r: string | number[],
        s: string | number[]
    ): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param operator Type: address, Indexed: false
     * @param approved Type: bool, Indexed: false
     */
    setApprovalForAll(operator: string, approved: boolean): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param interfaceId Type: bytes4, Indexed: false
     */
    supportsInterface(interfaceId: string | number[]): MethodConstantReturnContext<boolean>;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param token Type: address, Indexed: false
     * @param amountMinimum Type: uint256, Indexed: false
     * @param recipient Type: address, Indexed: false
     */
    sweepToken(token: string, amountMinimum: string, recipient: string): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    symbol(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param index Type: uint256, Indexed: false
     */
    tokenByIndex(index: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param owner Type: address, Indexed: false
     * @param index Type: uint256, Indexed: false
     */
    tokenOfOwnerByIndex(owner: string, index: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param tokenId Type: uint256, Indexed: false
     */
    tokenURI(tokenId: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    totalSupply(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param from Type: address, Indexed: false
     * @param to Type: address, Indexed: false
     * @param tokenId Type: uint256, Indexed: false
     */
    transferFrom(from: string, to: string, tokenId: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param amount0Owed Type: uint256, Indexed: false
     * @param amount1Owed Type: uint256, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    uniswapV3MintCallback(amount0Owed: string, amount1Owed: string, data: string | number[]): MethodReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param amountMinimum Type: uint256, Indexed: false
     * @param recipient Type: address, Indexed: false
     */
    unwrapWETH9(amountMinimum: string, recipient: string): MethodPayableReturnContext;
}
