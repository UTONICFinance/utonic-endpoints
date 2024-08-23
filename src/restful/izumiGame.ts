import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { Response, RequestNormal, NormalResponseDataWrapper } from './apiUtils';

export enum GameEventsTypeEnum {
    UPCOMING = 0,
    LIVE = 1,
    ENDED = 2,
    STOP = 3,
    OTHER = 4,
}

export enum GameTypeEnum {
    WEEKLY = 0,
    DAILY = 1,
    TOKEN = 2,
}

export type GameEvents = {
    id: number;
    name: string;
    status: GameEventsTypeEnum;
    startTime: string;
    endTime: string;
    banner: string;
    leftTime: string;
    type: GameTypeEnum;
};

export type ResponseGameEvents = {
    data: GameEvents[];
};

export const getGameEvents = async (): Response<NormalResponseDataWrapper<ResponseGameEvents>> => {
    return axios.get(ENDPOINTS.game.events);
};

export type RequestGameJoin = {
    address: string;
    id: number;
};

export type ResponseGameJoin = {
    joined: boolean;
};

export const postGameJoin: RequestNormal<RequestGameJoin, ResponseGameJoin> = async (params) => {
    return axios.post(ENDPOINTS.game.join, { params });
};

export type RequestGameUser = {
    address: string;
    id: number;
};
export type ResponseGameUser = {
    data: GameUser;
};
export type GameUser = {
    score: string;
    reward: string;
    volume: string;
    activityIndex: string;
};

export const getGameUser: RequestNormal<RequestGameUser, ResponseGameUser> = async (params) => {
    return axios.get(ENDPOINTS.game.user, { params });
};

export type tabData = {
    rank: number;
    address: string;
    score: string;
    reward: string;
};

export type RequestGameWinner = {
    id: number;
};

export type GameWinner = {
    tabName: string;
    tabData: tabData[];
};

export type ResponseGameWinner = {
    data: GameWinner[];
};

export const getGameWinner: RequestNormal<RequestGameWinner, ResponseGameWinner> = async (params) => {
    return axios.get(ENDPOINTS.game.winner, { params });
};

export type GameRule = {
    title: string;
    detail: string;
};

export type RequestGameRules = {
    id: number;
};

export type ResponseGameRules = {
    winnerRules: GameRule[];
    gameRules: GameRule[];
    description: GameRule[];
};

export const getGameRules: RequestNormal<RequestGameRules, ResponseGameRules> = async (params) => {
    return axios.get(ENDPOINTS.game.rules, { params });
};

export type RequestGameId = {
    id: number;
};

export const getGameEventById: RequestNormal<RequestGameId, ResponseGameEvents> = async (params) => {
    return axios.get(ENDPOINTS.game.events, { params });
};

export type RequestClaimHistory = {
    address: string;
};

export type ResponseClaimHistory = {
    symbol: string;
    amount: number;
    timestamp: number;
};

export const getClaimHistory: RequestNormal<RequestClaimHistory, ResponseClaimHistory[]> = async (params) => {
    return axios.get(ENDPOINTS.game.history, { params });
};

export type RequestIPointsInfo = {
    address: string;
    chainId: number;
};

export type ResponseIPointsInfo = {
    totalPoints: number;
    weekPoints: number;
    swapVolume: {
        spotToken: string;
        swapVolume: number;
        rewardIpoints: number;
    }[];
    lpStatus: {
        requiredValue: number;
        validHoldingTimeSeconds: number;
        rewardIpoints: number;
    }[];
    history: {
        time: string;
        type: string;
        points: number;
    }[];
    lpVolume: number;
    totalPointsOnChain: number;
};

export type ResponseLPIPointsInfo = {
    lpIpoints: number;
    volume: number;
};

export type RequestBOBIPointsInfo = {
    account: string;
};

export enum BOBIPointsInfoEnum {
    TVL = 1,
    GAS = 2,
}

export type ResponseBOBIPointsInfo = {
    total_tvl_spice: number;
    total_gas_spice: number;
    history: {
        type: BOBIPointsInfoEnum;
        spice: number;
        time: number;
    }[];
};

export type RequestSwapIPointsInfo = {
    chainId: number;
    account?: string;
};

export type ResponseSwapIPointsInfo = {
    currentEpochVolume: number;
    currentEpochTimeStamp: number;
    lastEpochVolume: number;
    txnNum: number;
};

export const getIPointsInfo: RequestNormal<RequestIPointsInfo, ResponseIPointsInfo> = async (params) => {
    return axios.get(ENDPOINTS.iPoints.points, { params });
};

export const getLPIPointsInfo: RequestNormal<RequestIPointsInfo, ResponseLPIPointsInfo> = async (params) => {
    return axios.get(ENDPOINTS.iPoints.lp_points, { params });
};

export const getSkaleAirdrop: RequestNormal<string, ResponseIPointsInfo> = async (address) => {
    return axios.get(ENDPOINTS.game.skale + address);
};

export const getBOBIPointsInfo: RequestNormal<RequestBOBIPointsInfo, ResponseBOBIPointsInfo> = async (params) => {
    return axios.get(ENDPOINTS.iPoints.bob_points, { params });
};

export const getSwapIPointsInfo: RequestNormal<RequestSwapIPointsInfo, ResponseSwapIPointsInfo> = async (params) => {
    return axios.get(ENDPOINTS.iPoints.swap_points, { params });
};
