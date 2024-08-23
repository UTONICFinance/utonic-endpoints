import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { nullablePathVar, RequestNormal } from './apiUtils';

export type CmcAmmDexPool = {
    base_id: string;
    base_name: string;
    base_symbol: string;
    base_volume: string;
    last_price: string;
    quote_id: string;
    quote_name: string;
    quote_symbol: string;
    quote_volume: string;
}

export const getCmcAmmDex: RequestNormal<{chainId?: number}, Record<string, CmcAmmDexPool>> = async ({chainId}) => {
    return axios.get(`${ENDPOINTS.external.cmc_amm_dex}${nullablePathVar(chainId)}`);
};
