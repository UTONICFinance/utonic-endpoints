import Web3 from "web3";
import erc20ABI from '../../abi/ERC/ERC20.json';
import { ERC20Contract } from "../../types/ERC/ERC20";
import { getContract } from "../contractFactory";

export const getERC20ContractByAddress = (web3: Web3, contractAddress: string): ERC20Contract | undefined => {
    if (!contractAddress || !web3) {
        return undefined;
    }

    return getContract<ERC20Contract>(erc20ABI, contractAddress, web3);
};
