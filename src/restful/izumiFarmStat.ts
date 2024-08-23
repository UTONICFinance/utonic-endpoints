import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';
export interface TokenInfoFormatted {
    chainId: number;
    name: string;
    symbol: string;
    icon?: string;
    address: string;
    wrapTokenAddress?: string;
    decimal: number;
    addTime?: Date;
    custom?: boolean;
}

export enum IzumiFarmContractTypeEnum {
    FIXRANGE = 0,
    ONESIDE = 1,
    DYNAMICRANGE = 2,
}

export enum IzumiFarmContractProtocolEnum {
    UNISWAP = 0,
    IZISWAP = 1,
}

export enum ContractBoostTypeEnum {
    noBoost = 'noBoost',
    iZiBoost = 'iZiBoost',
    veiZiBoost = 'veiZiBoost',
}

export interface rewardInfos {
    rewardToken: TokenInfoFormatted;
    pendingReward: string;
    distributionRate: string;

    provider: string;
    rewardPerBlock: string;
}

export type RequestAllFarmStat = {
    type?: IzumiFarmContractTypeEnum;
    status?: string;
    chainId?: number;
    protocol?: IzumiFarmContractProtocolEnum;
};

export type ResponseAllFarmStat = {
    pool_address: string;
    chain_id: number;
    tokenX_symbol: string;
    tokenY_symbol: string;
    fee: number;
    status: string;
    type: number;
    protocol: number;
    priority: number;
    tags: [];
    apr: number[];
};

export type ResponseFarmArchiveTvl = {
    record_time: string; // 2022-07-03T20:00:00 like
    tvl_archive: number;
};

export type ResponseContactInfo = {
    type: string;
    tokenX: string;
    tokenX_address: string;
    tokenY: string;
    tokenY_address: string;
    pool: string;
    fee: number;
    tvl: number;
    status: string;
    rewardInfos: rewardInfos[];
    apr: number[];
    startBlock: number;
    endBlock: number;
};

export type RequestFarmTvl = {
    address?: IzumiFarmContractTypeEnum;
    chain_id?: number;
    type?: IzumiFarmContractTypeEnum;
    protocol?: IzumiFarmContractProtocolEnum;
    boost_type?: ContractBoostTypeEnum;
};

export type RequestFarmArchiveTvl = RequestFarmTvl & {
    time_start?: string; // 2022-02-01 00:00:00 like
    time_end?: string;
};

export type RequestContactInfo = {
    chainId: number;
    address: string;
};

export enum FarmTypeEnum {
    Deposit = 0,
    Withdraw = 1,
    CollectReward = 2,
}

export type RequestFarmHistory = {
    account_addr: string;
    chain_id: number;

    time_start?: string; // 2022-02-01 00:00:00 like
    time_end?: string;
    order_by?: string; // time or -time, major
    page?: number; // start from 1
    page_size?: number;
};
export type ResponseFarmHistory = {
    nIZI: number; //boost izi number
    value: number;
    priceX: number;
    priceY: number;
    amountX: number;
    amountY: number;
    priceIZI: number;
    liquidity: number;
    timestamp: string;
    token_id: number;
    contract_addr: string;
    tokenx_addr: string;
    tokeny_addr: string;
    amount: number;
    rewardToken: string;
    txHash?: string;
    type: FarmTypeEnum;
};

export const getAllFarmStat: RequestNormal<RequestAllFarmStat, { data: ResponseAllFarmStat[] }> = async (params) => {
    return axios.get(ENDPOINTS.farm.stat, { params });
};

export const getFarmTvl: RequestNormal<RequestFarmTvl, { tvl: number }> = async (params) => {
    return axios.get(ENDPOINTS.farm.tvl, { params });
};

export const getFarmArchiveTvl: RequestNormal<RequestFarmArchiveTvl, ResponseFarmArchiveTvl[]> = async (params) => {
    return axios.get(ENDPOINTS.farm.tvl, { params });
};

export const getContactInfo: RequestNormal<RequestContactInfo, ResponseContactInfo> = async (params) => {
    return axios.get(ENDPOINTS.farm.tool, { params });
};

export const getFarmHistory: RequestNormal<RequestFarmHistory, ResponseFarmHistory[]> = async (params) => {
    return axios.get(ENDPOINTS.farm.history, { params });
};
