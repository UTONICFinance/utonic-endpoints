import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { RequestNormal } from './apiUtils';

export type RequestOperatorList = {
    address?: string;
    page?: number; // start from 1
    page_size?: number;
};

export type ResponseOperatorList = {
    operator_address: string;
    operator_register_address: string;
    status: number;
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
