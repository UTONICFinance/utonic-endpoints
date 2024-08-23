import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';
import mem from 'mem';

export type ResponseTokenListPrice = Record<string, number>;

export type RequestTokenPrice = {
    chain_id: number;

    // choose one
    address?: string;
    symbol?: string;
};

export type RequestTokenSymbolListPrice = {
    chain_id: number;
    symbolList: string[];
};

export type RequestTokenSymbolPrice = {
    chain_id: number;
    symbol: string[];
};

/**
 * 根据 symbol 获取注册过的 Token 价格数据
 */
export const getTokenPriceBySymbol: RequestNormal<string | undefined, number> = async (symbol) => {
    return axios.get(`${ENDPOINTS.priceInfo.price_info}${symbol}/`);
};

/**
 * 根据 symbolList 批量获取注册过的 Token 价格数据
 */
export const getTokenPriceBySymbolList: RequestNormal<string[], ResponseTokenListPrice> = (symbolList) => {
    const listParams = new URLSearchParams();
    symbolList.forEach((s) => listParams.append('t', s));
    return axios.get(ENDPOINTS.priceInfo.price_info, { params: listParams });
};

/**
 * 根据 symbol 获取注册过的 Token 价格数据
 * 需指定 chain
 */
export const getChainTokenPriceBySymbol: RequestNormal<RequestTokenSymbolPrice, number> = async (params) => {
    return axios.get(`${ENDPOINTS.priceInfo.price_info}${params.symbol}/?chain_id=${params.chain_id}`);
};

/**
 * 根据 symbolList 批量获取注册过的 Token 价格数据
 * 需指定 chain
 */
export const getChainTokenPriceBySymbolList: RequestNormal<RequestTokenSymbolListPrice, ResponseTokenListPrice> = (params) => {
    const listParams = new URLSearchParams();
    params.symbolList.forEach((s) => listParams.append('t', s));
    listParams.append('chain_id', params.chain_id.toString());
    return axios.get(ENDPOINTS.priceInfo.price_info, { params: listParams });
};

/**
 * 根据链上地址或者已存在的 symbol 获取注册过的 Token 价格数据。
 * 如使用 address 第一次访问，会注册 Token 的基本数据，用于后续可以访问到价格。
 */
export const getTokenPrice: RequestNormal<RequestTokenPrice, ResponseTokenListPrice> = async (params) => {
    return axios.get(ENDPOINTS.priceInfo.price, { params });
};

export const memGetTokenPrice = mem(getTokenPrice, {
    maxAge: 5 * 60 * 1000,
    cacheKey: (arguments_) => `tokenPrice-${JSON.stringify(arguments_)}`,
});

export const memGetTokenPriceBySymbol = mem(getTokenPriceBySymbol, {
    maxAge: 5 * 60 * 1000,
    cacheKey: (arguments_) => `tokenPriceS-${arguments_}`,
});
