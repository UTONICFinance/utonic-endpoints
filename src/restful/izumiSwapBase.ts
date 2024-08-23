import axios from 'axios';
import mem from 'mem';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal, RequestNormalGeneric } from './apiUtils';

export enum MetaRecordTypeEnum {
    ERC20_TOKEN = 0,
    IZI_SWAP_POOL = 10,
}

export enum TransRecordTypeEnum {
    IZI_SWAP_POOL_CREATE = 10,

    IZI_SWAP_INC_LIQ = 11,
    IZI_SWAP_DEC_LIQ = 12,

    IZI_SWAP_TOKEN = 13,

    IZI_SWAP_INC_LIMIT_ORDER = 14,
    IZI_SWAP_DEC_LIMIT_ORDER = 15,
}

export enum iZiSwapMetaModeEnum {
    DEFAULT = 0,
    POOL_KLINE_M1 = 1, // min record interval is 1 minute
    POOL_KLINE_M5 = 2,
    POOL_KLINE_M15 = 3,
    POOL_KLINE_H1 = 10,
    POOL_KLINE_H4 = 15,
    POOL_KLINE_DAY = 20,
    POOL_KLINE_WEEK = 30,
    POOL_KLINE_MONTH = 40,
}

export const TransRecordTypeMapping: Record<string, number | undefined> = {
    All: undefined,
    Swap: TransRecordTypeEnum.IZI_SWAP_TOKEN,
    'Add Liq': TransRecordTypeEnum.IZI_SWAP_INC_LIQ,
    'Remove Liq': TransRecordTypeEnum.IZI_SWAP_DEC_LIQ,
    'Add Order': TransRecordTypeEnum.IZI_SWAP_INC_LIMIT_ORDER,
    'Remove Order': TransRecordTypeEnum.IZI_SWAP_DEC_LIMIT_ORDER,
};

export type ResponseBasicIziSwapPoolRecord = {
    chainId: number;
    fee: number;
    address: string;

    tokenX: string;
    tokenY: string;
    tokenX_address: string;
    tokenY_address: string;
};

export type RequestIziSwapTransRecord = {
    chain_id?: number;
    type?: TransRecordTypeEnum;
    type_list?: string; // join TransRecordTypeEnum with comma
    outer_list?: string; // join int with comma
    contract_addr?: string;
    account_addr?: string;
    tokenx_addr?: string;
    tokeny_addr?: string;
    token_addr?: string;
    time_start?: string; // 2022-02-01 00:00:00 like
    time_end?: string;
    with_contract?: string;
    tx_hash?: string;

    order_by?: string; // time or -time, major
    page?: number; // start from 1
    page_size?: number;
};

export type RequestIziSwapTransAggregateRecord = {
    chain_id: number;
    contract_addr: string;
    account_addr: string;
    time_start: string; // 2022-02-01 00:00:00 like
    time_end: string;
    with_contract?: string;
};

export type RequestIziSwapMetaRecord = {
    chain_id?: number;
    type?: MetaRecordTypeEnum;
    contract_addr?: string;
    addr_list?: string; // join with comma

    pool_token?: string; // pool record token symbol
    pool_token_addr?: string; // pool record token address
    pool_token_search?: string; // pool record token fuzzy search key word

    pool_tokenx_addr?: string; // pool record tokenX address
    pool_tokeny_addr?: string; // pool record tokenY address

    token?: string; // token record symbol
    token_search?: string; // token fuzzy search key word

    mode?: iZiSwapMetaModeEnum;

    order_by?: string; // time or -time
    page?: number; // start from 1
    page_size?: number;
};

export type ResponseIziTransRecord = {
    type: number;
    chainId: number;
    fee: number;
    address: string;

    account: string;
    txHash: string;
    timestamp: number;

    tokenX: string;
    tokenY: string;
    tokenX_address: string;
    tokenY_address: string;

    // type data
    value?: number;
    amountX?: number;
    amountY?: number;
    sellXEarnY: boolean;

    price?: number;
    amount?: number;
    dealPrice?: number;
};

export type ResponseIziSwapTransAggregateRecord = {
    chainId: number;
    fee: number;
    pool_address: string;

    tokenX_symbol: string;
    tokenY_symbol: string;
    tokenX_address: string;
    tokenY_address: string;

    amountX: number;
    amountY: number;
    total: number;
};

export type ResponseIziPoolRecord = {
    account: string;
    address: string;
    chainId: number;
    dealTimestamp: number;
    fee: number;
    latestDealPrice: number;
    timestamp: number;
    tokenX: string;
    tokenX_address: string;
    tokenX_decimals: number;
    tokenY: string;
    tokenY_address: string;
    tokenY_decimals: number;
    txHash: string;

    mode: iZiSwapMetaModeEnum;
    validRange: number;
};

export type ResponseIziSwapTokenRecord = {
    name: string;
    address: string;
    symbol: string;
    decimals: number;

    mode: iZiSwapMetaModeEnum;
    totalSupply: number;
    validRange: number;
};

export const getIziSwapTransRecord: RequestNormal<RequestIziSwapTransRecord, ResponseIziTransRecord[]> = async (params) => {
    if ((params.chain_id ?? 0) <= 0) {
        params.chain_id = undefined;
    } else if (params.type === undefined && params.contract_addr && params.chain_id) {
        // avoid db index choose record_time as files sort
        params.order_by = 'id';
    }
    return axios.get(ENDPOINTS.izumiSwap.trans_record, { params });
};

export const getIziSwapTransAggregateRecord: RequestNormal<
    RequestIziSwapTransAggregateRecord,
    ResponseIziSwapTransAggregateRecord[]
> = async (params) => {
    return axios.get(ENDPOINTS.izumiSwap.trans_record_aggregate, { params });
};

export type ResponseGenericIziSwapMetaRecord = ResponseIziPoolRecord | ResponseIziSwapTokenRecord;

export const getGenericIziSwapMetaRecord: RequestNormalGeneric<RequestIziSwapMetaRecord, ResponseGenericIziSwapMetaRecord[]> = async (
    params
) => {
    if ((params.chain_id ?? 0) <= 0) {
        params.chain_id = undefined;
    }
    return axios.get(ENDPOINTS.izumiSwap.meta_record, { params });
};

export const getGenericIziSwapMetaRecordWithDefault = (
    type: MetaRecordTypeEnum,
    chainId?: number,
    poolAddress?: string
): Promise<Partial<ResponseGenericIziSwapMetaRecord>> =>
    chainId && poolAddress
        ? axios
              .get(ENDPOINTS.izumiSwap.meta_record, {
                  params: {
                      chain_id: chainId,
                      contract_addr: poolAddress,
                      type: type,
                  },
              })
              .then((r) => (r.data.is_success ? r.data.data?.[0] ?? {} : {}))
        : new Promise((resolve, _) => resolve({}));

export const memGetIziSwapMetaRecord = mem(getGenericIziSwapMetaRecord, {
    maxAge: 5 * 60 * 1000,
    cacheKey: (arguments_) => `metaRecord-${JSON.stringify(arguments_)}`,
});

export const memGetIziSwapMetaRecordWithDefault = mem(getGenericIziSwapMetaRecordWithDefault, {
    maxAge: 5 * 60 * 1000,
    cacheKey: (arguments_) => `metaRecordDefault-${JSON.stringify(arguments_)}`,
});
