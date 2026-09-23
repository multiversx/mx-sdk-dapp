import { server, rest, mockPendingTransaction, testNetwork } from '__mocks__';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { apiAddressSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { getTransactionsByHashes } from '../getTransactionsByHashes';

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

jest.mock('store/selectors/networkSelectors', () => ({
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
    (apiAddressSelector as jest.Mock).mockReturnValue(testNetwork.apiAddress);
  });
  afterEach(() => {
    server.resetHandlers();
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

  it('keeps the metadata the history needs and the locally signed fields', async () => {
    const pending = { ...mockPendingTransaction };
    const action = {
      category: 'esdtNft',
      name: 'transfer',
      arguments: { transfers: [{ identifier: 'TEST-123456', value: '1' }] }
    };

    server.use(
      rest.get(
        `${testNetwork.apiAddress}/${TRANSACTIONS_ENDPOINT}`,
        (_req, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json([
              {
                ...mockPendingTransaction,
                txHash: pending.hash,
                status: 'success',
                action,
                timestamp: 1700000000,
                logs: {
                  events: [{ identifier: 'ESDTTransfer', data: 'AAAA' }]
                },
                value: '999',
                receiver: 'erd1servervalue'
              }
            ])
          )
      )
    );

    const [result] = await getTransactionsByHashes([pending]);

    expect(result).toMatchObject({
      action,
      timestamp: 1700000000,
      value: pending.value,
      receiver: pending.receiver,
      hash: pending.hash
    });
    expect(result).not.toHaveProperty('logs');
  });
});
