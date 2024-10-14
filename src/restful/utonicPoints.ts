import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

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
};

export const getUserInfo: RequestNormal<RequestUserInfo, ResponseUserInfo> = async (params) => {
    return axios.get(ENDPOINTS.points.user_info, { params });
};

export type RequestInviteToken = {
    invite_token: string;
};

export type ResponseInviteToken = {
    user_address: string;
};

export const getInviteToken: RequestNormal<RequestInviteToken, ResponseInviteToken> = async (params) => {
    return axios.get(ENDPOINTS.points.inviter_address, { params });
};

export type RequestInvite = {
    address: string;
    invite_address: string;
};

// export type ResponseInvite = {

// };

export const getInvite: RequestNormal<RequestInvite, null> = async (params) => {
    return axios.get(ENDPOINTS.points.invite, { params });
};
