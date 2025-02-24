import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

export type RequestOperatorList = {
    operator_address?: string;
};

export type ResponseOperatorList = {
    operator_address: string;
    operator_register_address: string;
    is_baned: 0 | 1;
    name: null | string;
    twitter: null | string;
    website: null | string;
    description: null | string;
    image: null | string;
    image_small: null | string;
    record_time: string;
};

export const getOperatorList: RequestNormal<RequestOperatorList, ResponseOperatorList[]> = async (params) => {
    return axios.get(ENDPOINTS.reStake.operator, { params });
};

export const getCheckOperatorStatus: RequestNormal<null, number> = async (params) => {
    return axios.get(ENDPOINTS.reStake.check, { params });
};

export type RequestUploadOperator = {
    operator: string;
    name: string; //max 128
    twitter?: string;
    website?: string;
    description?: string; //max 512
    image: FormData; //max 10MB
};

export const postUploadOperator: RequestNormal<FormData, null> = async (formData) => {
    return axios.post(ENDPOINTS.reStake.upload, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
