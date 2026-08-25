import { SignedTransactionType } from 'types/transactions.types';
import { mapServerTransactionsToListItems } from '../mapServerTransactionsToListItems';

jest.mock('store/actions/cache/cacheActions', () => ({
  saveToCache: jest.fn()
}));

jest.mock('store/store', () => ({
  getState: () => ({})
}));

jest.mock('store/selectors/accountSelectors', () => ({
  addressSelector: () => 'erd1address'
}));

jest.mock('store/selectors/networkSelectors', () => ({
  egldLabelSelector: () => 'EGLD',
  explorerAddressSelector: () => 'https://explorer.multiversx.com'
}));

jest.mock('../getCachedTransactionListItem', () => ({
  getCachedTransactionListItem: () => null
}));

jest.mock('../mapTransactionToListItem', () => ({
  mapTransactionToListItem: ({ transaction }: any) => ({
    hash: transaction.txHash,
    timestamp: transaction.timestamp,
    timestampMs: transaction.timestampMs,
    status: transaction.status
  })
}));

const timestamp = 1760956682;

const buildTransaction = (hash: string, timestampMs?: number) =>
  ({
    hash,
    txHash: hash,
    timestamp,
    timestampMs,
    status: 'success'
  }) as unknown as SignedTransactionType;

describe('mapServerTransactionsToListItems tests', () => {
  it('orders transactions from the same second by timestampMs', async () => {
    const result = await mapServerTransactionsToListItems({
      transactions: [
        buildTransaction('older', timestamp * 1000 + 200),
        buildTransaction('newer', timestamp * 1000 + 800)
      ]
    });

    expect(result.map(({ hash }) => hash)).toEqual(['newer', 'older']);
  });

  it('falls back to the seconds timestamp when timestampMs is absent', async () => {
    const result = await mapServerTransactionsToListItems({
      transactions: [
        { ...buildTransaction('older'), timestamp: timestamp - 60 } as any,
        buildTransaction('newer')
      ]
    });

    expect(result.map(({ hash }) => hash)).toEqual(['newer', 'older']);
  });
});
