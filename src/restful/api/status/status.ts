import axios from 'axios';
import { ENDPOINTS } from '../../apiEndpoints';
import { RequestNormal } from '../../apiUtils';

export enum ScanStatusEnum {
    synced = 'synced',
    syncing = 'syncing',
}

export type RequestDataStatus = {
    chainId?: number;
};

export type ResponseDataStatus = {
    time: string;
    pendingEvent: number;
    pendingEventScanTask: number;
    scanStatus: ScanStatusEnum;
};

export const getDataStatus: RequestNormal<RequestDataStatus, ResponseDataStatus> = async (params) => {
    return axios.get(ENDPOINTS.dataStatus.status, { params });
};
