import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormalGeneric } from './apiUtils';
import { ResponseBasicIziSwapPoolRecord } from './izumiSwapBase';

export enum SummaryRecordTypeEnum {
    // ResponseIziSwapSummaryRecord
    IZI_POOL_LATEST = 0,
    IZI_POOL_DAY_ARCHIVE = 1,

    // ResponseIziSwapPoolLiquiditySnapshotRecord
    IZI_POOL_LIQ_SNAPSHOT = 2,

    // ResponseIziSwapSummaryNormalRecord
    IZI_POOL_OF_CHAIN_LATEST = 3,
    IZI_POOL_OF_CHAIN_DAY_ARCHIVE = 4,

    // ResponseIziSwapTokenSummaryRecord
    IZI_POOL_TOKEN_LATEST = 7,
    IZI_POOL_TOKEN_DAY_ARCHIVE = 8,
}

export type RequestIziSwapSummaryRecord = {
    chain_id?: number;
    type?: SummaryRecordTypeEnum;
    contract_addr?: string;
    addr_list?: string; // join with comma
    time_start?: string; // 2022-02-01 00:00:00 like
    time_end?: string;

    // time or -time, choices: time, major(tvl), vol_week, vol_day, fees_week, fees_day
    order_by?: string;
    page?: number; // start from 1
    page_size?: number;
};

export type ResponseIziSwapPoolSummaryRecord = {
    chainId: number;
    fee: number;
    address: string;
    tokenX: string;
    tokenY: string;
    tokenX_address: string;
    tokenY_address: string;
    timestamp: number;

    // locked usd value
    tvl: number;
    tvlX: number;
    tvlY: number;
    // locked amount
    amountX: number;
    amountY: number;

    // trade volume/fee usd value
    volDay: number;
    volWeek: number;
    feesDay: number;
    feesWeek: number;

    // trade volume usd value
    volX_day: number;
    volY_day: number;
    volX_week: number;
    volY_week: number;

    // trade fee usd value
    feesX_day: number;
    feesY_day: number;
    feesX_week: number;
    feesY_week: number;

    // trade volume amount
    volAmtX_day: number;
    volAmtY_day: number;
    volAmtX_week: number;
    volAmtY_week: number;

    version?: string;
};

export type ResponseIziSwapTokenSummaryRecord = {
    address: string;
    symbol: string;
    chainId: number;

    tvl: number;
    tvlSelf: number;
    tvlRivals: number;
    amountSelf: number;

    price: number;
    priceDay: number;
    priceWeek: number;

    // trade/fees volume usd value
    volDay: number;
    volWeek: number;
    feesDay: number;
    feesWeek: number;

    timestamp: number;
    fdv: number;
};

export type ResponseIziSwapPoolLiquiditySnapshotRecord = ResponseBasicIziSwapPoolRecord & {
    tickspace: number;
    tickL: number;
    tickR: number;
    currentTick: number;
    liquidity: number;
    snapshot: number[];
    liquidityDist: number[];

    tokenX_decimals: number;
    tokenY_decimals: number;
};

export type ResponseIziSwapSummaryNormalRecord = {
    chainId: number;

    tvl: number;

    volDay: number;
    volWeek: number;
    feesDay: number;
    feesWeek: number;

    uniqueDayUser: number;
    uniqueDayNewUser: number;
    swapDayCount: number;
    swapCount: number;
    uniqueUser: number;

    timestamp: number;
};

export type ResponseGenericIziSwapPoolSummary =
    | ResponseIziSwapPoolSummaryRecord
    | ResponseIziSwapTokenSummaryRecord
    | ResponseIziSwapSummaryNormalRecord
    | ResponseIziSwapPoolLiquiditySnapshotRecord;

const LATEST_TYPE = new Set<SummaryRecordTypeEnum>([
    SummaryRecordTypeEnum.IZI_POOL_LATEST,
    SummaryRecordTypeEnum.IZI_POOL_LIQ_SNAPSHOT,
    SummaryRecordTypeEnum.IZI_POOL_OF_CHAIN_LATEST,
    SummaryRecordTypeEnum.IZI_POOL_TOKEN_LATEST,
]);

export const getIziSwapGenericSummaryRecord: RequestNormalGeneric<
    RequestIziSwapSummaryRecord,
    ResponseGenericIziSwapPoolSummary[]
> = async (params) => {
    if (params.type !== undefined && LATEST_TYPE.has(params.type) && (params.chain_id ?? 0) <= 0) {
        params.chain_id = undefined;
    }
    if (params.type === SummaryRecordTypeEnum.IZI_POOL_OF_CHAIN_LATEST && params.chain_id === undefined) {
        params.chain_id = 0;
    }
    return axios.get(ENDPOINTS.izumiSwap.summary_record, { params });
};
