import { TokenArgumentType } from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { getTransactionActionNftText } from '../getTransactionActionNftText';

jest.mock('lib/sdkDappUtils', () => ({
  formatAmount: jest.fn()
}));

jest.mock('../../../explorerUrlBuilder', () => ({
  explorerUrlBuilder: {
    nftDetails: jest.fn()
  }
}));

const { formatAmount: mockFormatAmount } = jest.requireMock(
  'lib/sdkDappUtils'
) as {
  formatAmount: jest.Mock;
};

const { explorerUrlBuilder } = jest.requireMock(
  '../../../explorerUrlBuilder'
) as {
  explorerUrlBuilder: { nftDetails: jest.Mock };
};

describe('getTransactionActionNftText tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFormatAmount.mockReturnValue('1.23');
    explorerUrlBuilder.nftDetails.mockReturnValue(
      'https://explorer.com/nft/123'
    );
  });

  it('returns NFT text with badge for NonFungibleESDT', () => {
    const token: TokenArgumentType = {
      type: NftEnumType.NonFungibleESDT,
      identifier: 'NFT-123',
      ticker: 'NFT',
      collection: 'NFT-123',
      value: '1',
      decimals: 0
    };

    const result = getTransactionActionNftText({ token });

    expect(result.badgeText).toBe('NFT');
    expect(result.tokenFormattedAmount).toBeNull();
    expect(result.tokenLinkText).toBe('NFT-123');
    expect(explorerUrlBuilder.nftDetails).toHaveBeenCalledWith('NFT-123');
  });

  it('returns formatted amount for SFT with value', () => {
    const token: TokenArgumentType = {
      type: NftEnumType.SemiFungibleESDT,
      identifier: 'SFT-123',
      ticker: 'SFT',
      collection: 'SFT-123',
      value: '1000000000000000000',
      decimals: 18
    };

    const result = getTransactionActionNftText({ token });

    expect(result.badgeText).toBe('SFT');
    expect(result.tokenFormattedAmount).toBe('1.23');
    expect(mockFormatAmount).toHaveBeenCalledWith({
      input: '1000000000000000000',
      decimals: 18,
      digits: 2,
      showLastNonZeroDecimal: undefined
    });
  });

  it('returns null formatted amount when noValue is true', () => {
    const token: TokenArgumentType = {
      type: NftEnumType.SemiFungibleESDT,
      identifier: 'SFT-123',
      ticker: 'SFT',
      value: '1000',
      decimals: 18
    };

    const result = getTransactionActionNftText({ token, noValue: true });

    expect(result.tokenFormattedAmount).toBeNull();
  });
});
