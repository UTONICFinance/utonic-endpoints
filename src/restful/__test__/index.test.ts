import { getTokenPriceBySymbol } from "../tokenPrice"

test('TokenInfo', async () => {
    expect((await getTokenPriceBySymbol('USDC')).data.is_success).toBeTruthy();
});
