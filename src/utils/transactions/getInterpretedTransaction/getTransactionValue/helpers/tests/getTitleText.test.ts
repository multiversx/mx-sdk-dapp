import { TokenArgumentType } from 'types/serverTransactions.types';
import { EsdtEnumType, NftEnumType } from 'types/tokens.types';
import { getTitleText } from '../getTitleText';

describe('getTitleText tests', () => {
  it('returns formatted title for token with value', () => {
    const tokens: TokenArgumentType[] = [
      {
        type: EsdtEnumType.FungibleESDT,
        name: 'Token',
        token: 'TOKEN-123',
        ticker: 'TOKEN',
        value: '1000000000000000000',
        decimals: 18
      }
    ];

    const result = getTitleText(tokens);

    expect(result).toContain('TOKEN');
    expect(result).toContain('TOKEN-123');
    expect(result).toContain('1');
  });

  it('returns formatted title for NFT', () => {
    const tokens: TokenArgumentType[] = [
      {
        type: NftEnumType.NonFungibleESDT,
        name: 'NFT',
        identifier: 'NFT-123',
        ticker: 'NFT',
        collection: 'NFT-123',
        value: '',
        decimals: 0
      }
    ];

    const result = getTitleText(tokens);

    expect(result).toContain('NFT');
    expect(result).toContain('NFT-123');
  });

  it('handles multiple tokens with line breaks', () => {
    const tokens: TokenArgumentType[] = [
      {
        type: EsdtEnumType.FungibleESDT,
        name: 'Token1',
        token: 'TOKEN1-123',
        ticker: 'TOKEN1',
        value: '1000',
        decimals: 18
      },
      {
        type: EsdtEnumType.FungibleESDT,
        name: 'Token2',
        token: 'TOKEN2-456',
        ticker: 'TOKEN2',
        value: '2000',
        decimals: 18
      }
    ];

    const result = getTitleText(tokens);

    expect(decodeURI(result)).toContain('TOKEN1');
    expect(decodeURI(result)).toContain('TOKEN2');
  });

  it('handles token without value', () => {
    const tokens: TokenArgumentType[] = [
      {
        type: EsdtEnumType.FungibleESDT,
        name: 'Token',
        token: 'TOKEN-123',
        ticker: 'TOKEN',
        value: '',
        decimals: 18
      }
    ];

    const result = getTitleText(tokens);

    expect(result).toContain('TOKEN');
    expect(result).toContain('null');
  });

  it('uses collection identifier when collection exists', () => {
    const tokens: TokenArgumentType[] = [
      {
        type: EsdtEnumType.FungibleESDT,
        name: 'Token',
        token: 'TOKEN-123',
        identifier: 'IDENTIFIER-456',
        collection: 'COLLECTION-789',
        ticker: 'TOKEN',
        value: '1000',
        decimals: 18
      }
    ];

    const result = getTitleText(tokens);

    expect(result).toContain('IDENTIFIER-456');
  });

  it('uses token identifier when collection does not exist', () => {
    const tokens: TokenArgumentType[] = [
      {
        type: EsdtEnumType.FungibleESDT,
        name: 'Token',
        token: 'TOKEN-123',
        ticker: 'TOKEN',
        value: '1000',
        decimals: 18
      }
    ];

    const result = getTitleText(tokens);

    expect(result).toContain('TOKEN-123');
  });

  it('handles NFT with null badgeText', () => {
    const tokens: TokenArgumentType[] = [
      {
        type: NftEnumType.NonFungibleESDT,
        name: 'NFT',
        identifier: 'NFT-123',
        ticker: 'NFT',
        collection: 'NFT-123',
        value: '',
        decimals: 0
      }
    ];

    const result = getTitleText(tokens);

    expect(result).toContain('NFT-123');
  });

  it('handles token with default decimals', () => {
    const tokens: TokenArgumentType[] = [
      {
        type: EsdtEnumType.FungibleESDT,
        name: 'Token',
        token: 'TOKEN-123',
        ticker: 'TOKEN',
        value: '1000',
        decimals: 0
      }
    ];

    const result = getTitleText(tokens);

    expect(result).toContain('TOKEN');
    expect(result).toContain('TOKEN-123');
    expect(result).toBeTruthy();
  });
});
