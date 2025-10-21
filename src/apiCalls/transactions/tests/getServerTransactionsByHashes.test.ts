import { server, rest, testNetwork, mockPendingTransaction } from '__mocks__';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { getServerTransactionsByHashes } from '../getServerTransactionsByHashes';

const tx = {
  ...mockPendingTransaction,
  gasUsed: 50000,
  miniBlockHash:
    'a8881b2bd43bb452383b17dd49728ee9508a0a82d1aaea3a3bdbf4b858e91d55',
  round: 11159447,
  epoch: 4623,
  fee: '50000000000000',
  timestamp: 1760956682,
  timestampMs: 1760956682000,
  function: 'transfer',
  price: 0,
  status: 'success'
};

describe('getServerTransactionsByHashes', () => {
  it('returns transactions for provided hashes', async () => {
    const hash = tx.txHash;

    // Mock the API response using MSW for the GET /transactions endpoint
    server.use(
      rest.get(
        `${testNetwork.apiAddress}/${TRANSACTIONS_ENDPOINT}`,
        (req, res, ctx) => {
          const hashesParam = req.url.searchParams.get('hashes');
          expect(hashesParam).toBe(hash);
          expect(req.url.searchParams.get('withScResults')).toBe('true');
          return res(ctx.status(200), ctx.json([tx]));
        }
      )
    );

    const result = await getServerTransactionsByHashes([hash], {
      apiAddress: testNetwork.apiAddress
    });

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(
      expect.objectContaining({ txHash: hash, status: 'success' })
    );
  });
});
