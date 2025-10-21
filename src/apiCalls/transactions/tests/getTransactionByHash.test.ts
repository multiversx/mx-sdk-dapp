import { server, rest, mockPendingTransaction, testNetwork } from '__mocks__';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { networkSelector } from 'store/selectors';
import { getTransactionByHash } from '../getTransactionByHash';

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

jest.mock('store/selectors', () => ({
  networkSelector: jest.fn()
}));

const hash = mockPendingTransaction.hash;

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
  beforeEach(() => {
    (networkSelector as jest.Mock).mockReturnValue(testNetwork);
  });

  it('returns a transaction for the provided hash', async () => {
    // Use MSW to intercept the request to testNetwork.apiAddress
    server.use(
      rest.get(
        `${testNetwork.apiAddress}/${TRANSACTIONS_ENDPOINT}/${encodeURIComponent(hash)}`,
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(tx));
        }
      )
    );

    const response = await getTransactionByHash(hash);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      expect.objectContaining({ txHash: hash, status: 'success' })
    );
  });
});
