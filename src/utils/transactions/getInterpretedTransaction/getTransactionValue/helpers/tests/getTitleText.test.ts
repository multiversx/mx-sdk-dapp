import { TokenArgumentType } from 'types/serverTransactions.types';
import { EsdtEnumType, NftEnumType } from 'types/tokens.types';
import { getTitleText } from '../getTitleText';

const mockWegldToken: TokenArgumentType = {
  type: EsdtEnumType.FungibleESDT,
  name: 'WrappedEGLD',
  ticker: 'WEGLD',
  svgUrl:
    'https://devnet-media.multiversx.com/tokens/asset/WEGLD-d7c6bb/logo.svg',
  token: 'WEGLD-d7c6bb',
  decimals: 18,
  value: '1000000000000000000'
};

const mockUsdcToken: TokenArgumentType = {
  type: EsdtEnumType.FungibleESDT,
  name: 'WrappedUSDC',
  ticker: 'USDC',
  svgUrl:
    'https://devnet-media.multiversx.com/tokens/asset/USDC-8d4068/logo.svg',
  token: 'USDC-8d4068',
  decimals: 6,
  value: '45117988'
};

const mockNftToken: TokenArgumentType = {
  type: NftEnumType.NonFungibleESDT,
  name: 'NFT',
  identifier: 'NFT-123',
  ticker: 'NFT',
  collection: 'NFT-123',
  value: '',
  decimals: 0
};

describe('getTitleText tests', () => {
  it('returns formatted title for token with value', () => {
    const tokens: TokenArgumentType[] = [mockWegldToken];

    const result = getTitleText(tokens);

    expect(result).toContain('WEGLD');
    expect(result).toContain('WEGLD-d7c6bb');
    expect(result).toContain('1');
  });

  it('returns formatted title for NFT', () => {
    const tokens: TokenArgumentType[] = [mockNftToken];

    const result = getTitleText(tokens);

    expect(result).toContain('NFT');
    expect(result).toContain('NFT-123');
  });

  it('handles multiple tokens with line breaks', () => {
    const tokens: TokenArgumentType[] = [mockWegldToken, mockUsdcToken];

    const result = getTitleText(tokens);

    expect(decodeURI(result)).toContain('WEGLD');
    expect(decodeURI(result)).toContain('USDC');
  });

  it('handles token without value', () => {
    const tokens: TokenArgumentType[] = [
      {
        ...mockWegldToken,
        value: ''
      }
    ];

    const result = getTitleText(tokens);

    expect(result).toContain('WEGLD');
    expect(result).toContain('null');
  });

  it('uses collection identifier when collection exists', () => {
    const tokens: TokenArgumentType[] = [
      {
        ...mockWegldToken,
        identifier: 'WEGLD-identifier',
        collection: 'WEGLD-collection'
      }
    ];

    const result = getTitleText(tokens);

    expect(result).toContain('WEGLD-identifier');
  });

  it('uses token identifier when collection does not exist', () => {
    const tokens: TokenArgumentType[] = [mockWegldToken];

    const result = getTitleText(tokens);

    expect(result).toContain('WEGLD-d7c6bb');
  });

  it('handles NFT with null badgeText', () => {
    const tokens: TokenArgumentType[] = [mockNftToken];

    const result = getTitleText(tokens);

    expect(result).toContain('NFT-123');
  });

  it('handles token with default decimals', () => {
    const tokens: TokenArgumentType[] = [
      {
        ...mockWegldToken,
        decimals: 0
      }
    ];

    const result = getTitleText(tokens);

    expect(result).toContain('WEGLD');
    expect(result).toContain('WEGLD-d7c6bb');
    expect(result).toBeTruthy();
  });
});
