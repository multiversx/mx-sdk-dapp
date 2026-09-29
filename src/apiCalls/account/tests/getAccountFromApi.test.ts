import { server, rest, testAddress, testNetwork } from '__mocks__';
import { ACCOUNTS_ENDPOINT } from 'apiCalls/endpoints';
import { getAccountFromApi } from '../getAccountFromApi';

describe('getAccountFromApi tests', () => {
  afterEach(() => {
    server.resetHandlers();
  });
  it('should return null when address is empty', async () => {
    const account = await getAccountFromApi({
      address: '',
      baseURL: testNetwork.apiAddress
    });
    expect(account).toBeNull();
  });
  it('returns the account when the response is for the requested address', async () => {
    const account = await getAccountFromApi({
      address: testAddress,
      baseURL: testNetwork.apiAddress
    });

    expect(account?.address).toBe(testAddress);
  });

  it('returns null when the response is for another address', async () => {
    const otherAddress =
      'erd1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqzu66jx';
    jest.spyOn(console, 'warn').mockImplementation(() => undefined);

    server.use(
      rest.get(
        `${testNetwork.apiAddress}/${ACCOUNTS_ENDPOINT}/${testAddress}`,
        (_req, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({ address: otherAddress, balance: '1', nonce: 1 })
          )
      )
    );

    const account = await getAccountFromApi({
      address: testAddress,
      baseURL: testNetwork.apiAddress
    });

    expect(account).toBeNull();
  });

  it('should return null and log an error if account is not found', async () => {
    const missingAccountAddress =
      'erd1qqqqqqqqqqqqqpgqc978caxxxxxxxxxxxxxxxxxxxxxxxxxxxxplllss';

    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);

    server.use(
      rest.get(
        `${testNetwork.apiAddress}/${ACCOUNTS_ENDPOINT}/${missingAccountAddress}`,
        (_req, res, ctx) => {
          return res(ctx.status(404), ctx.json({ error: 'account not found' }));
        }
      )
    );

    try {
      const account = await getAccountFromApi({
        address: missingAccountAddress,
        baseURL: testNetwork.apiAddress
      });

      expect(account).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith(
        'error fetching configuration for ',
        missingAccountAddress
      );
    } finally {
      consoleSpy.mockRestore();
    }
  });
});
