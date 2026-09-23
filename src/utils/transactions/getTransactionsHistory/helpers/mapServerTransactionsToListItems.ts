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
import { getTransactionTimestampMs } from 'utils/transactions/getTransactionTimestampMs';
import { getCachedTransactionListItem } from './getCachedTransactionListItem';
import { mapTransactionToListItem } from './mapTransactionToListItem';

interface IMapServerTransactionsToListItemsParams {
  transactions: SignedTransactionType[];
  store?: StoreType;
}

const sortTransactionsByTimestamp = (transactions: ITransactionListItem[]) =>
  transactions.sort(
    (a, b) =>
      (getTransactionTimestampMs(b) ?? 0) - (getTransactionTimestampMs(a) ?? 0)
  );

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

  const newTransactions: ServerTransactionType[] = transactions
    .filter((tx) => hashesToFetch.includes(tx.hash))
    .map((tx) => ({
      // tracking merges the executed transaction's metadata into the stored one
      ...(tx as unknown as ServerTransactionType),
      txHash: tx.hash
    }));

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
