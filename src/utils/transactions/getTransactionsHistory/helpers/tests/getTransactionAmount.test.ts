import { getAssetAmount } from '../getAssetAmount';
import { getTransactionAmount } from '../getTransactionAmount';

const asset = (assetTicker: string, assetIdentifier: string, amount = '1') => ({
  assetPrefix: '-',
  assetTicker,
  assetIdentifier,
  assetAmount: amount,
  type: 'FungibleESDT'
});

describe('getTransactionAmount', () => {
  it('shows the amount of a single transfer', () => {
    expect(
      getTransactionAmount({
        transactionAssets: [asset('USDC', 'USDC-c76f1f', '5')],
        isIncomingTransaction: false
      })
    ).toBe('-5 USDC');
  });

  it('does not collapse transfers of different tokens sharing a ticker', () => {
    expect(
      getTransactionAmount({
        transactionAssets: [
          asset('USDC', 'USDC-c76f1f', '5'),
          asset('USDC', 'USDC-aaaaaa', '500')
        ],
        isIncomingTransaction: false
      })
    ).toBe('');
  });
});

describe('getAssetAmount', () => {
  it('keeps large NFT/SFT quantities exact', () => {
    expect(
      getAssetAmount({
        type: 'SemiFungibleESDT',
        value: '123456789012345678901234'
      })
    ).toBe('123,456,789,012,345,678,901,234');
  });
});
