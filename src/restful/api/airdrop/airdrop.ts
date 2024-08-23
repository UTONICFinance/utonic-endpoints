import axios from 'axios';
import { ENDPOINTS } from '../../apiEndpoints';
import { RequestNormal } from '../../apiUtils';

export type RequestAirdropMerkle = {
    tag: string;
    address: string;
};
export type ResponseAirdropMerkle = {
    address: string;
    tag: string;
    amount: string;
    path: string;
    witnesses: string[];
};

export const getAirdropMerkle: RequestNormal<RequestAirdropMerkle, ResponseAirdropMerkle> = async (params) => {
    return axios.get(ENDPOINTS.airdrop.merkle, { params });
};
