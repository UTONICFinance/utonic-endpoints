import { AxiosResponse } from 'axios';

export type NormalResponseDataWrapper<D> = {
    is_success: boolean;
    data: D;
    is_idempotent: boolean;
    error_code: string | null;
    error_msg: string | null;
    total: number;
    debug_msg: string | null;
};

export type Response<RespData> = Promise<AxiosResponse<RespData>>;
export type Request<ReqData, RespData> = (data: ReqData) => Response<RespData>;

export type RequestNormal<ReqData, RespData> = (data: ReqData) => Response<NormalResponseDataWrapper<RespData>>;
export type RequestNormalGeneric<ReqData, GenericResp> = <RespData extends GenericResp>(
    data: ReqData
) => Response<NormalResponseDataWrapper<RespData>>;

export const nullablePathVar = (pathVar: any) => pathVar ? `${pathVar}/` : '';
