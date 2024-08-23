import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

export enum AprTypeEnum {
    Recommend = 0,
    Pool = 1,
}
export type LiquidityApr = {
    leftRange: number;
    rightRange: number;
    apr: number;
    slideApr: number;
};
export type RequestLiquidityApr = {
    address: string;
    chainId: number;
    type?: AprTypeEnum;
};

export const getLiquidityApr: RequestNormal<RequestLiquidityApr, LiquidityApr[]> = async (params) => {
    return axios.get(ENDPOINTS.liquidity.apr, { params });
};
