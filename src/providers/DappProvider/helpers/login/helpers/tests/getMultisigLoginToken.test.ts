import { account } from '__mocks__';
import { decodeLoginToken } from 'services/nativeAuth/helpers/decodeLoginToken';
import { nativeAuth } from 'services/nativeAuth/nativeAuth';
import { getMultisigLoginToken } from '../getMultisigLoginToken';

jest.mock('services/nativeAuth/nativeAuth', () => ({
  nativeAuth: jest.fn()
}));

jest.mock('services/nativeAuth/helpers/decodeLoginToken', () => ({
  decodeLoginToken: jest.fn()
}));

const loginData = {
  address: account.address,
  signature:
    '91fa5ef832087b55631d6eee90e9a02ae2520d08c2dd75e29eb29785560c994cfc547e7a9152fd5970acf8735b85d57718870f332ac9d0028da0691be6d2720b',
  multisig: 'erd1qqqqqqqqqqqqqpgqf738mcf8f08kuwhn8dvtka5veyad2fqwu00sqnjgln'
};

const nativeAuthConfig = {
  origin: 'https://localhost:3000',
  apiAddress: 'https://devnet-api.multiversx.com',
  expirySeconds: 86400,
  tokenExpirationToastWarningSeconds: 300
};

const modifiedLoginToken =
  'aHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMA.3c8eee378a3058bd2b5f0228a3ecf830327b1773d560c688ac087db8264a5969.86400.eyJtdWx0aXNpZyI6ImVyZDFxcXFxcXFxcXFxcXFxcGdxZjczOG1jZjhmMDhrdXdobjhkdnRrYTV2ZXlhZDJmcXd1MDBzcW5qZ2xuIiwidGltZXN0YW1wIjoxNzYxNjQwOTEygQ';

const originalLoginToken =
  'aHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMA.1c8e908b5d42a76ba873210a0fbf65ad36c3d3b067b308aac44ac4b6f1d761f6.86400.eyJ0aW1lc3RhbXAiOjE3NjE2NDA5MTJ9';

describe('getMultisigLoginToken tests', () => {
  const mockInitialize = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (nativeAuth as jest.Mock).mockReturnValue({
      initialize: mockInitialize
    });
    (decodeLoginToken as jest.Mock).mockReturnValue({
      blockHash: 'block-hash',
      extraInfo: { timestamp: 1761640912 }
    });
  });

  test('returns original loginToken when no multisig provided', async () => {
    const result = await getMultisigLoginToken({
      loginData: {
        address: loginData.address,
        signature: loginData.signature
      },
      nativeAuthConfig,
      loginToken: originalLoginToken
    });

    expect(nativeAuth).not.toHaveBeenCalled();
    expect(result).toBe(originalLoginToken);
  });

  test('returns modified token when multisig provided', async () => {
    mockInitialize.mockResolvedValueOnce(modifiedLoginToken);

    const result = await getMultisigLoginToken({
      loginData,
      nativeAuthConfig,
      loginToken: originalLoginToken
    });

    expect(nativeAuth).toHaveBeenCalledWith({
      ...nativeAuthConfig,
      extraInfo: { multisig: loginData.multisig }
    });
    expect(mockInitialize).toHaveBeenCalledWith({
      noCache: true,
      latestBlockInfo: { hash: 'block-hash', timestamp: 1761640912 }
    });
    expect(result).toBe(modifiedLoginToken);
  });
});
