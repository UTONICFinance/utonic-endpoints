import Web3 from "web3";
import { getPoolContractByAddress } from "../contract/iZiSwap/iZiSwapContractFactory";

const BSC_RPC_URL = 'https://bsc-dataseed.binance.org/';
const BSC_IZI_SWAP_USDT_WBNB_POOl_ADDR = '0xf964529721ecd0c9386d922a37cbbd2b67ea6e93';
const BSC_WEB3 = new Web3(new Web3.providers.HttpProvider(BSC_RPC_URL));

test('PoolContractTest', async () => {
    const poolContract = getPoolContractByAddress(BSC_WEB3, BSC_IZI_SWAP_USDT_WBNB_POOl_ADDR);
    const poolState = await poolContract?.methods.state().call();
    console.log(poolState);
    expect(poolState?.locked !== undefined).toBeTruthy();
});
