import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';
import CryptoJS from 'crypto-js';

export type PointHistoryTypes = {
    point: number;
    reason: string;
    create_time: string;
};

export type RequestUserInfo = {
    address: string;
};

export type ResponseUserInfo = {
    user_address: string;
    user_point: number;
    referral_point: number;
    referral: string;
    referee: string[];
    history: PointHistoryTypes[];
    invite_token?: string;
    source?: string;
};

export const getUserInfo: RequestNormal<RequestUserInfo, ResponseUserInfo> = async (params) => {
    return axios.get(ENDPOINTS.points.user_info, { params });
};

export type RequestInviteToken = {
    inviteToken: string;
};

export type ResponseInviteToken = {
    user_address: string;
};

export const getInviteAddressByToken: RequestNormal<RequestInviteToken, ResponseInviteToken> = async (params) => {
    return axios.get(ENDPOINTS.points.inviter_address, { params });
};

export type RequestInvite = {
    address: string;
    inviteToken: string;
    hmac: string;
};

export const sendInvite: RequestNormal<RequestInvite, null> = async (params) => {
    // Generate HMAC
    const { hmac, ...filteredParams } = params;
    return axios.get(ENDPOINTS.points.invite, {
        params: filteredParams,
        headers: {
            signature: hmac,
        },
    });
};

export type RequestInviteCodeByNewUser = {
    address: string;
};

export const getInviteCodeByNewUser: RequestNormal<RequestInviteCodeByNewUser, ResponseUserInfo> = async (params) => {
    return axios.get(ENDPOINTS.points.new_user, { params });
};

export type RequestSendSource = {
    address: string;
    source?: string;
    marketing_source?: string;
};
export const sendSource: RequestNormal<RequestSendSource, null> = async (params) => {
    return axios.get(ENDPOINTS.points.source, { params });
};

export type RequestSendMarketSource = {
    address: string;
    marketing_source: string;
};
export const sendMarketSource: RequestNormal<RequestSendMarketSource, null> = async (params) => {
    return axios.get(ENDPOINTS.points.market, { params });
};

export const getHistoryUser: RequestNormal<null, number> = async (params) => {
    return axios.get(ENDPOINTS.points.user, { params });
};

export type DefiInfo = {
    attributes: {
        reserve_in_usd: string;
    };
    relationships: {
        dex: {
            data: {
                id: string;
                type: string;
            };
        };
    };
};

export type ResponseDefiInfo = {
    data: {
        data: DefiInfo[];
    };
};

export const getDefiInfo = async (): Promise<ResponseDefiInfo> => {
    return axios.get('https://api.geckoterminal.com/api/v2/search/pools?query=uton&network=ton&page=1');
};
