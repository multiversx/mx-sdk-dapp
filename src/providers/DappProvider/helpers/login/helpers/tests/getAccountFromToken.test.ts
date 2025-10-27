import { account } from '__mocks__';
import { getAccountFromToken } from '../getAccountFromToken';
import { getModifiedLoginToken } from '../getModifiedLoginToken';

jest.mock('../getModifiedLoginToken');

const tokenLogin =
  'aHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMA.1c8e908b5d42a76ba873210a0fbf65ad36c3d3b067b308aac44ac4b6f1d761f6.86400.eyJtdWx0aXNpZyI6ImVyZDFxcXFxcXFxcXFxcXFxcGdxZjczOG1jZjhmMDhrdXdobjhkdnRrYTV2ZXlhZDJmcXd1MDBzcW5qZ2xuIiwidGltZXN0YW1wIjoxNzYxNTcyMTQ5fQ';

const contractAddress =
  'erd1qqqqqqqqqqqqqpgqf738mcf8f08kuwhn8dvtka5veyad2fqwu00sqnjgln';

const extraInfoData = {
  multisig: contractAddress
};

const modifiedLoginToken = tokenLogin;

const originalAddress = account.address;

describe('getAccountFromToken tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return modifiedLoginToken and tokenAddress when modifiedLoginToken is not null', async () => {
    (getModifiedLoginToken as jest.Mock).mockResolvedValue(modifiedLoginToken);

    const result = await getAccountFromToken({
      originalLoginToken: tokenLogin,
      extraInfoData,
      address: originalAddress
    });

    expect(getModifiedLoginToken).toHaveBeenCalledWith({
      loginToken: tokenLogin,
      extraInfoData
    });

    expect(result).toEqual({
      address: contractAddress,
      modifiedLoginToken
    });
  });

  it('should return original address when signed toke in invalid', async () => {
    (getModifiedLoginToken as jest.Mock).mockResolvedValue(null);

    const result = await getAccountFromToken({
      originalLoginToken: tokenLogin,
      extraInfoData,
      address: originalAddress
    });

    expect(getModifiedLoginToken).toHaveBeenCalledWith({
      loginToken: tokenLogin,
      extraInfoData
    });

    expect(result).toEqual({
      address: originalAddress,
      modifiedLoginToken: null
    });
  });

  it('should use multisig address when multisig is provided in extraInfoData', async () => {
    (getModifiedLoginToken as jest.Mock).mockResolvedValue(modifiedLoginToken);

    const result = await getAccountFromToken({
      originalLoginToken: tokenLogin,
      extraInfoData: {
        multisig: contractAddress
      },
      address: originalAddress
    });

    expect(result.address).toBe(contractAddress);
  });
});
