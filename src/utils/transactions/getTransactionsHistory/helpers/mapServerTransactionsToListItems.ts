import { ITransactionListItem } from 'lib/sdkDappUi';
import { saveToCache } from 'store/actions/cache/cacheActions';
import { addressSelector } from 'store/selectors/accountSelectors';
import {
  egldLabelSelector,
  explorerAddressSelector
} from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { StoreType } from 'store/store.types';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { ServerTransactionType } from 'types/serverTransactions.types';
import { SignedTransactionType } from 'types/transactions.types';
import { getCachedTransactionListItem } from './getCachedTransactionListItem';
import { mapTransactionToListItem } from './mapTransactionToListItem';

interface IMapServerTransactionsToListItemsParams {
  transactions: SignedTransactionType[];
  store?: StoreType;
}

const sortTransactionsByTimestamp = (transactions: ITransactionListItem[]) =>
  transactions.sort((a, b) => b.timestamp - a.timestamp);

export const mapServerTransactionsToListItems = async ({
  transactions,
  ...props
}: IMapServerTransactionsToListItemsParams): Promise<
  ITransactionListItem[]
> => {
  const store = props.store ?? getState();
  const cachedTransactions: ITransactionListItem[] = [];
  const hashesToFetch: string[] = [];

  transactions.forEach((transaction) => {
    const cachedTransaction = getCachedTransactionListItem(
      transaction.hash,
      store
    );
    if (cachedTransaction) {
      cachedTransactions.push(cachedTransaction);
    } else {
      hashesToFetch.push(transaction.hash);
    }
  });

  if (hashesToFetch.length === 0) {
    return sortTransactionsByTimestamp(cachedTransactions);
  }

  let newTransactions: ServerTransactionType[] = transactions.map((tx) => ({
    // casting is correct since store transaction was replaced with fetched server transaction
    ...(tx as unknown as ServerTransactionType),
    txHash: tx.hash
  }));

  const retrievedHashes = newTransactions.map((tx) => tx.txHash);
  const missingHashes = hashesToFetch.filter(
    (hash) => !retrievedHashes.includes(hash)
  );

  if (missingHashes.length > 0) {
    const filteredTransactions = transactions.filter((transaction) =>
      missingHashes.includes(transaction.hash)
    );

    // In case the transactions were not found, we create a dummy transaction with the pending status
    // until all pending transactions are returned from the API
    const pendingDummyTransactions = filteredTransactions.map(
      (transaction) =>
        ({
          ...transaction,
          txHash: transaction.hash,
          price: 0,
          status: TransactionServerStatusesEnum.pending,
          gasUsed: 0,
          miniBlockHash: '',
          receiverShard: 0,
          round: 0,
          senderShard: 0,
          timestamp: Date.now()
        }) as ServerTransactionType
    );

    newTransactions.push(...pendingDummyTransactions);
  }

  const uniqueTransactionsMap = new Map<string, ITransactionListItem>();

  cachedTransactions.forEach((item) => {
    const key = item.hash;
    if (!key) {
      return;
    }
    uniqueTransactionsMap.set(String(key), item);
  });

  newTransactions.forEach((transaction) => {
    const transactionListItem = mapTransactionToListItem({
      transaction,
      address: addressSelector(store),
      explorerAddress: explorerAddressSelector(store),
      egldLabel: egldLabelSelector(store)
    });

    if (transactionListItem.status !== TransactionServerStatusesEnum.pending) {
      saveToCache({
        key: `transaction-${transaction.txHash}`,
        value: transactionListItem
      });
    }

    uniqueTransactionsMap.set(transaction.txHash, transactionListItem);
  });

  return sortTransactionsByTimestamp(
    Array.from(uniqueTransactionsMap.values())
  );
};
