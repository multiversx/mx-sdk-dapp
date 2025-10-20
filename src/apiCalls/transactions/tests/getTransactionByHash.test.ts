import { server, rest, mockPendingTransaction } from '__mocks__';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { getTransactionByHash } from '../getTransactionByHash';

const hash = '2b513313f36d1ece4ce8225bb2fe5eff365f5af6db2aaf1a3e5b60541c650fd8';

const tx = {
  ...mockPendingTransaction,
  txHash: hash,
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

describe('getTransactionByHash', () => {
  it('returns a transaction for the provided hash', async () => {
    server.use(
      rest.get(`*/${TRANSACTIONS_ENDPOINT}/${hash}`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(tx));
      })
    );

    const response = await getTransactionByHash(hash);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      expect.objectContaining({ txHash: hash, status: 'success' })
    );
  });
});
