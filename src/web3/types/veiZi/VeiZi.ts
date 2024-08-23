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

export type VeiZiContract = Web3ContractContext<VeiZi, VeiZiMethodNames, VeiZiEventsContext, VeiZiEvents>;
export type VeiZiEvents =
    | 'Approval'
    | 'ApprovalForAll'
    | 'Deposit'
    | 'OwnershipTransferred'
    | 'Stake'
    | 'Supply'
    | 'Transfer'
    | 'Unstake'
    | 'Withdraw';
export interface VeiZiEventsContext {
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
    Deposit(
        parameters: {
            filter?: { nftId?: string | string[]; lockBlk?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    OwnershipTransferred(
        parameters: {
            filter?: { previousOwner?: string | string[]; newOwner?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    Stake(
        parameters: {
            filter?: { nftId?: string | string[]; owner?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    Supply(
        parameters: {
            filter?: {};
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
    Unstake(
        parameters: {
            filter?: { nftId?: string | string[]; owner?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
    Withdraw(
        parameters: {
            filter?: { nftId?: string | string[] };
            fromBlock?: number;
            toBlock?: 'latest' | number;
            topics?: string[];
        },
        callback?: (error: Error, event: EventData) => void
    ): EventResponse;
}
export type VeiZiMethodNames =
    | 'new'
    | 'MAXTIME'
    | 'WEEK'
    | 'approve'
    | 'balanceOf'
    | 'baseTokenURI'
    | 'burn'
    | 'checkPoint'
    | 'collect'
    | 'createLock'
    | 'delegateAddress'
    | 'epoch'
    | 'getApproved'
    | 'getLastNftSlope'
    | 'increaseAmount'
    | 'increaseUnlockTime'
    | 'isApprovedForAll'
    | 'merge'
    | 'modifyEndBlock'
    | 'modifyProvider'
    | 'modifyRewardPerBlock'
    | 'modifyStartBlock'
    | 'multicall'
    | 'name'
    | 'nftLocked'
    | 'nftNum'
    | 'nftPointEpoch'
    | 'nftPointHistory'
    | 'nftVeiZi'
    | 'nftVeiZiAt'
    | 'onERC721Received'
    | 'owner'
    | 'ownerOf'
    | 'pendingRewardOfAddress'
    | 'pendingRewardOfToken'
    | 'pointHistory'
    | 'renounceOwnership'
    | 'rewardInfo'
    | 'safeTransferFrom'
    | 'safeTransferFrom'
    | 'secondsPerBlockX64'
    | 'setApprovalForAll'
    | 'setBaseURI'
    | 'setDelegateAddress'
    | 'slopeChanges'
    | 'stake'
    | 'stakeNum'
    | 'stakedNft'
    | 'stakedNftOwners'
    | 'stakeiZiAmount'
    | 'stakingInfo'
    | 'stakingStatus'
    | 'supply'
    | 'supportsInterface'
    | 'symbol'
    | 'token'
    | 'tokenByIndex'
    | 'tokenOfOwnerByIndex'
    | 'tokenURI'
    | 'totalSupply'
    | 'totalVeiZi'
    | 'totalVeiZiAt'
    | 'transferFrom'
    | 'transferOwnership'
    | 'unStake'
    | 'withdraw';
export interface undefinedRequest {
    provider: string;
    accRewardPerShare: string;
    rewardPerBlock: string;
    lastTouchBlock: string;
    startBlock: string;
    endBlock: string;
}
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
export interface DepositEventEmittedResponse {
    nftId: string;
    value: string;
    lockBlk: string;
    depositType: string;
    timestamp: string;
}
export interface OwnershipTransferredEventEmittedResponse {
    previousOwner: string;
    newOwner: string;
}
export interface StakeEventEmittedResponse {
    nftId: string;
    owner: string;
}
export interface SupplyEventEmittedResponse {
    preSupply: string;
    supply: string;
}
export interface TransferEventEmittedResponse {
    from: string;
    to: string;
    tokenId: string;
}
export interface UnstakeEventEmittedResponse {
    nftId: string;
    owner: string;
}
export interface WithdrawEventEmittedResponse {
    nftId: string;
    value: string;
    timestamp: string;
}
export interface NftLockedResponse {
    amount: string;
    end: string;
}
export interface NftPointHistoryResponse {
    bias: string;
    slope: string;
    timestamp: string;
}
export interface PointHistoryResponse {
    bias: string;
    slope: string;
    timestamp: string;
}
export interface RewardInfoResponse {
    provider: string;
    accRewardPerShare: string;
    rewardPerBlock: string;
    lastTouchBlock: string;
    startBlock: string;
    endBlock: string;
}
export interface StakingInfoResponse {
    nftId: string;
    stakingId: string;
    amount: string;
}
export interface StakingStatusResponse {
    stakingId: string;
    lockAmount: string;
    lastVeiZi: string;
    lastTouchBlock: string;
    lastTouchAccRewardPerShare: string;
}
export interface VeiZi {
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: constructor
     * @param tokenAddr Type: address, Indexed: false
     * @param _rewardInfo Type: tuple, Indexed: false
     */
    'new'(tokenAddr: string, _rewardInfo: undefinedRequest): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    MAXTIME(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    WEEK(): MethodConstantReturnContext<string>;
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
     * StateMutability: view
     * Type: function
     */
    baseTokenURI(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param nftId Type: uint256, Indexed: false
     */
    burn(nftId: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    checkPoint(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    collect(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _value Type: uint256, Indexed: false
     * @param _unlockTime Type: uint256, Indexed: false
     */
    createLock(_value: string, _unlockTime: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     */
    delegateAddress(parameter0: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    epoch(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param tokenId Type: uint256, Indexed: false
     */
    getApproved(tokenId: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param nftId Type: uint256, Indexed: false
     */
    getLastNftSlope(nftId: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param nftId Type: uint256, Indexed: false
     * @param _value Type: uint256, Indexed: false
     */
    increaseAmount(nftId: string, _value: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param nftId Type: uint256, Indexed: false
     * @param _unlockTime Type: uint256, Indexed: false
     */
    increaseUnlockTime(nftId: string, _unlockTime: string): MethodReturnContext;
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
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param nftFrom Type: uint256, Indexed: false
     * @param nftTo Type: uint256, Indexed: false
     */
    merge(nftFrom: string, nftTo: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param endBlock Type: uint256, Indexed: false
     */
    modifyEndBlock(endBlock: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param provider Type: address, Indexed: false
     */
    modifyProvider(provider: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _rewardPerBlock Type: uint256, Indexed: false
     */
    modifyRewardPerBlock(_rewardPerBlock: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param startBlock Type: uint256, Indexed: false
     */
    modifyStartBlock(startBlock: string): MethodReturnContext;
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
     * @param parameter0 Type: uint256, Indexed: false
     */
    nftLocked(parameter0: string): MethodConstantReturnContext<NftLockedResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    nftNum(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     */
    nftPointEpoch(parameter0: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     * @param parameter1 Type: uint256, Indexed: false
     */
    nftPointHistory(parameter0: string, parameter1: string): MethodConstantReturnContext<NftPointHistoryResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param nftId Type: uint256, Indexed: false
     * @param timestamp Type: uint256, Indexed: false
     */
    nftVeiZi(nftId: string, timestamp: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param nftId Type: uint256, Indexed: false
     * @param timestamp Type: uint256, Indexed: false
     */
    nftVeiZiAt(nftId: string, timestamp: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     * @param parameter1 Type: address, Indexed: false
     * @param parameter2 Type: uint256, Indexed: false
     * @param parameter3 Type: bytes, Indexed: false
     */
    onERC721Received(parameter0: string, parameter1: string, parameter2: string, parameter3: string | number[]): MethodReturnContext;
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
     * @param tokenId Type: uint256, Indexed: false
     */
    ownerOf(tokenId: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param user Type: address, Indexed: false
     */
    pendingRewardOfAddress(user: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param nftId Type: uint256, Indexed: false
     */
    pendingRewardOfToken(nftId: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     */
    pointHistory(parameter0: string): MethodConstantReturnContext<PointHistoryResponse>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    renounceOwnership(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    rewardInfo(): MethodConstantReturnContext<RewardInfoResponse>;
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
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    secondsPerBlockX64(): MethodConstantReturnContext<string>;
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
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param baseURI Type: string, Indexed: false
     */
    setBaseURI(baseURI: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param nftId Type: uint256, Indexed: false
     * @param addr Type: address, Indexed: false
     */
    setDelegateAddress(nftId: string, addr: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     */
    slopeChanges(parameter0: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param nftId Type: uint256, Indexed: false
     */
    stake(nftId: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    stakeNum(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    stakedNft(parameter0: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     */
    stakedNftOwners(parameter0: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    stakeiZiAmount(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param user Type: address, Indexed: false
     */
    stakingInfo(user: string): MethodConstantReturnContext<StakingInfoResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     */
    stakingStatus(parameter0: string): MethodConstantReturnContext<StakingStatusResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    supply(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param interfaceId Type: bytes4, Indexed: false
     */
    supportsInterface(interfaceId: string | number[]): MethodConstantReturnContext<boolean>;
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
     */
    token(): MethodConstantReturnContext<string>;
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
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param timestamp Type: uint256, Indexed: false
     */
    totalVeiZi(timestamp: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param timestamp Type: uint256, Indexed: false
     */
    totalVeiZiAt(timestamp: string): MethodConstantReturnContext<string>;
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
     * @param newOwner Type: address, Indexed: false
     */
    transferOwnership(newOwner: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    unStake(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param nftId Type: uint256, Indexed: false
     */
    withdraw(nftId: string): MethodReturnContext;
}
