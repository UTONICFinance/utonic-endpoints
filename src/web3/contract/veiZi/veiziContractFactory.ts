import Web3 from "web3";
import veiziABI from '../../abi/veiZi/VeiZi.json';
import { VeiZiContract } from "../../types/veiZi/VeiZi";
import { getContract, getContractFromContext } from '../contractFactory';
import { VEIZI_ADDRESS } from "./veiziContractConfig";

export const getVeiZiContract = (chainId: number, web3: Web3): VeiZiContract | undefined => {
    const contractAddress = VEIZI_ADDRESS[chainId];
    if (!contractAddress || !web3) {
        return undefined;
    }
    // const contract = getContractFromContext(chainId, contractAddress);
    // if (contract) {
    //     return contract as VeiZiContract;
    // }
    return getContract<VeiZiContract>(veiziABI, contractAddress, web3);
};
