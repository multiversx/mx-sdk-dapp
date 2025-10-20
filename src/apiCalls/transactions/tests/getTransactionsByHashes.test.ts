import { server, rest, mockPendingTransaction } from '__mocks__';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { getTransactionsByHashes } from '../getTransactionsByHashes';

describe('getTransactionsByHashes test', () => {
  it('maps server transactions to tracked results for provided pending hashes', async () => {
    const pending = { ...mockPendingTransaction };
    const hash = pending.hash;

    const serverTx = {
      ...mockPendingTransaction,
      status: 'success' as const
    };

    server.use(
      rest.get(`*/${TRANSACTIONS_ENDPOINT}`, (req, res, ctx) => {
        expect(req.url.searchParams.get('hashes')).toBe(hash);
        expect(req.url.searchParams.get('withScResults')).toBe('true');

        return res(ctx.status(200), ctx.json([serverTx]));
      })
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
