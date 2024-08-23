import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

export const mediaTitleProps = ['telegram', 'twitter', 'medium', 'discord', 'reddit', 'docs'];

export type mediaProps = {
    title: string;
    link: string;
};

export type RequestTokenInfo = {
    address: string;
    chainId: number;
};

export type ResponseTokenInfo = {
    info: string;
    link: string;
    media: mediaProps[];
    tags?: string[];
};

export const getTokenInfo: RequestNormal<RequestTokenInfo, ResponseTokenInfo> = async (params) => {
    return axios.get(ENDPOINTS.tokenInfo.details, { params });
};
