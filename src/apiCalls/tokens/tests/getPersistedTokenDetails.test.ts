import { testToken } from '__mocks__/data/testToken';
import { DisplayRiskEnum } from 'types/displayRisk.types';
import { getPersistedToken } from '../getPersistedToken';
import { getPersistedTokenDetails } from '../getPersistedTokenDetails';

jest.mock('../getPersistedToken', () => ({
  getPersistedToken: jest.fn()
}));

const mockedGetPersistedToken = getPersistedToken as jest.Mock;

describe('getPersistedTokenDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('uses the png icon rather than the svg one', async () => {
    mockedGetPersistedToken.mockResolvedValueOnce(testToken);

    const result = await getPersistedTokenDetails({
      tokenId: testToken.identifier
    });

    expect(result.tokenImageUrl).toBe(testToken.assets.pngUrl);
  });

  it('ignores details returned for a different token', async () => {
    mockedGetPersistedToken.mockResolvedValueOnce({
      ...testToken,
      identifier: 'OTHER-a1b2c3',
      decimals: 0
    });

    const result = await getPersistedTokenDetails({
      tokenId: testToken.identifier
    });

    expect(result.identifier).toBeUndefined();
    expect(result.tokenLabel).toBe('');
    expect(result.error).toBeDefined();
  });

  it('reports a regular token as clean', async () => {
    mockedGetPersistedToken.mockResolvedValueOnce(testToken);

    const result = await getPersistedTokenDetails({
      tokenId: testToken.identifier
    });

    expect(result.displayRisk).toBe(DisplayRiskEnum.clean);
  });

  it('flags a token whose name hides a zero-width character', async () => {
    mockedGetPersistedToken.mockResolvedValueOnce({
      ...testToken,
      name: `${testToken.name}\u200B`
    });

    const result = await getPersistedTokenDetails({
      tokenId: testToken.identifier
    });

    expect(result.displayRisk).toBe(DisplayRiskEnum.suspicious);
  });

  it('flags a ticker that mixes in a Cyrillic look-alike', async () => {
    mockedGetPersistedToken.mockResolvedValueOnce({
      ...testToken,
      ticker: 'USD\u0421'
    });

    const result = await getPersistedTokenDetails({
      tokenId: testToken.identifier
    });

    expect(result.displayRisk).toBe(DisplayRiskEnum.suspicious);
  });
});
