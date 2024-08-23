import izumiPoolABI from '../../abi/iZiSwap/Pool.json';
import { PoolContract } from "../../types/iZiSwap/Pool";
import Web3 from 'web3';
import { getContract } from '../contractFactory';

export const getPoolContractByAddress = (web3: Web3, contractAddress: string): PoolContract | undefined => {
    if (!contractAddress || !web3) {
        return undefined;
    }

    return getContract<PoolContract>(izumiPoolABI, contractAddress, web3);
};
