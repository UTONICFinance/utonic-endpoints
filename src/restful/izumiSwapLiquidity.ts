import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

export enum iZiSwapLiquidityRecordStatusEnum {
    VALID = 0,
    BURNED = 1,
}

export type RequestIziSwapLiquidityRecord = {
    chain_id?: number;
    nft_id?: number;
    owner?: string;
    pool_addr?: string;
    tokenx_addr?: string;
    tokeny_addr?: string;
    status?: iZiSwapLiquidityRecordStatusEnum;
    nft_id_list?: string; // join nft_id with comma

    order_by?: string; // choice: nft_id

    page?: number; // start from 1
    page_size?: number;
};

export type ResponseIziSwapLiquidityRecord = {
    chainId: number;
    fee: number;
    address: string;
    tokenX: string;
    tokenY: string;
    tokenX_address: string;
    tokenY_address: string;

    manager_addr: string;

    nft_id: number;
    owner: string;
    liquidity: number;

    leftPt: number;
    rightPt: number;
    priceLeft: number;
    priceRight: number;

    status: iZiSwapLiquidityRecordStatusEnum;

    // trans outer id
    mint_list: number[];
    burn_list: number[];
};

export const getIziSwapLiquidityRecord: RequestNormal<
    RequestIziSwapLiquidityRecord,
    ResponseIziSwapLiquidityRecord[]
> = async (params) => {
    if ((params.chain_id ?? 0) <= 0) {
        params.chain_id = undefined;
    }
    return axios.get(ENDPOINTS.izumiSwap.liquidity_record, { params });
};
