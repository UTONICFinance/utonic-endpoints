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
    inviteAddress: string;
};

// export type ResponseInvite = {

// };

export const sendInvite: RequestNormal<RequestInvite, null> = async (params) => {
    return axios.get(ENDPOINTS.points.invite, { params });
};

export type RequestInviteCodeByNewUser = {
    address: string;
};

export const getInviteCodeByNewUser: RequestNormal<RequestInviteCodeByNewUser, ResponseUserInfo> = async (params) => {
    return axios.get(ENDPOINTS.points.new_user, { params });
};

export type RequestSendSource = {
    address: string;
    source: string;
};
export const sendSource: RequestNormal<RequestSendSource, null> = async (params) => {
    return axios.get(ENDPOINTS.points.source, { params });
};
