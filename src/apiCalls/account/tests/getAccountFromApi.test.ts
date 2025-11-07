import { server, rest, testNetwork } from '__mocks__';
import { ACCOUNTS_ENDPOINT } from 'apiCalls/endpoints';
import { getAccountFromApi } from '../getAccountFromApi';

describe('getAccountFromApi tests', () => {
  it('should return null when address is empty', async () => {
    const account = await getAccountFromApi({
      address: '',
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
