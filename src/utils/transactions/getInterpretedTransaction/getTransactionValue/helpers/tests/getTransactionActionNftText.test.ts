import { TokenArgumentType } from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { getTransactionActionNftText } from '../getTransactionActionNftText';

const mockNftToken: TokenArgumentType = {
  type: NftEnumType.NonFungibleESDT,
  name: 'NFT',
  identifier: 'NFT-123',
  ticker: 'NFT',
  collection: 'NFT-123',
  value: '1',
  decimals: 0
};

const mockSftToken: TokenArgumentType = {
  type: NftEnumType.SemiFungibleESDT,
  name: 'SFT',
  identifier: 'SFT-123',
  ticker: 'SFT',
  collection: 'SFT-123',
  value: '1000000000000000000',
  decimals: 18
};

describe('getTransactionActionNftText tests', () => {
  it('returns NFT text with badge for NonFungibleESDT', () => {
    const token = mockNftToken;

    const result = getTransactionActionNftText({ token });

    expect(result.badgeText).toBe('NFT');
    expect(result.tokenFormattedAmount).toBeNull();
    expect(result.tokenLinkText).toBe('NFT');
    expect(result.tokenExplorerLink).toBeTruthy();
  });

  it('returns formatted amount for SFT with value', () => {
    const token = mockSftToken;

    const result = getTransactionActionNftText({ token });

    expect(result.badgeText).toBe('SFT');
    expect(result.tokenFormattedAmount).toBeTruthy();
    expect(result.tokenFormattedAmount).toContain('1');
    expect(result.tokenExplorerLink).toBeTruthy();
  });

  it('returns null formatted amount when noValue is true', () => {
    const token = {
      ...mockSftToken,
      value: '1000'
    };

    const result = getTransactionActionNftText({ token, noValue: true });

    expect(result.tokenFormattedAmount).toBeNull();
  });
});
