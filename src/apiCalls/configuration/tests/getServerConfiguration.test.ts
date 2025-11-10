import { testNetwork } from '__mocks__';
import { getServerConfiguration } from '../getServerConfiguration';

describe('getServerConfiguration tests', () => {
  it('should return transformed server configuration', async () => {
    const config = await getServerConfiguration(testNetwork.apiAddress);

    expect(config).toEqual(
      expect.objectContaining({
        id: 'devnet',
        name: 'Devnet',
        egldLabel: 'xEGLD',
        gasPerDataByte: '1500',
        apiTimeout: '4000',
        walletConnectBridgeAddresses: ['https://bridge.walletconnect.org'],
        walletAddress: 'https://devnet-wallet.multiversx.com',
        apiAddress: 'https://devnet-api.multiversx.com',
        explorerAddress: 'http://devnet-explorer.multiversx.com',
        chainId: 'D',
        decimals: '18',
        digits: '4'
      })
    );

    // Should not include legacy egldDenomination after transform
    expect(config).not.toHaveProperty('egldDenomination');
  });
});
