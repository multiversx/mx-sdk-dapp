import { server, rest, mockPendingTransaction, testNetwork } from '__mocks__';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { getState } from 'store/store';
import { getTransactionsByHashes } from '../getTransactionsByHashes';

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

jest.mock('store/selectors', () => ({
  apiAddressSelector: jest.fn()
}));

describe('getTransactionsByHashes test', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    (getState as jest.Mock).mockReturnValue({
      network: {
        network: testNetwork
      }
    });
  });

  it('maps server transactions to tracked results for provided pending hashes', async () => {
    const pending = { ...mockPendingTransaction };
    const hash = pending.hash;

    const serverTx = {
      ...mockPendingTransaction,
      status: 'success' as const
    };

    // Use MSW to intercept the request to testNetwork.apiAddress
    server.use(
      rest.get(
        `${testNetwork.apiAddress}/${TRANSACTIONS_ENDPOINT}`,
        (req, res, ctx) => {
          expect(req.url.searchParams.get('hashes')).toBe(hash);
          expect(req.url.searchParams.get('withScResults')).toBe('true');

          return res(ctx.status(200), ctx.json([serverTx]));
        }
      )
    );

    const result = await getTransactionsByHashes([pending]);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(
      expect.objectContaining({
        ...pending,
        txHash: hash,
        status: 'success',
        hash,
        invalidTransaction: false,
        results: [],
        previousStatus: 'pending',
        hasStatusChanged: true
      })
    );
  });
});
