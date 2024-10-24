import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

export enum StakeTypeEnum {
    UNKNOWN = 0,
    STAKE = 1,
    BURN = 2,
    BURNFORWHALE = 3,
    WITHDRAW = 4,
}
export enum PointProxyIdEnum {
    uTON = 0,
    stTON = 1,
    tsTON = 2,
}

export const ProxyWhaleType = 4; //As long as type is equal to 4, it is always whale

export type RequestHistoryByAddress = {
    user_address: string;
    type?: StakeTypeEnum;
    time_start?: string; // 2022-02-01 00:00:00 like
    time_end?: string;
    order_by?: string; // time or -time, major
    page?: number; // start from 1
    page_size?: number;
};

export type ResponseHistoryByAddress = {
    user_address: string;
    type: StakeTypeEnum;
    proxy_type: number | null;
    proxy_id: PointProxyIdEnum | number | null;
    ton_amount: number;
    uton_amount: number;
    price: number;
    hash: string;
    create_at: string;
};

export const getHistoryByAddress: RequestNormal<RequestHistoryByAddress, ResponseHistoryByAddress[]> = async (params) => {
    return axios.get(ENDPOINTS.portfolio.history, { params });
};
