import { getServerTransactionsByHashes } from 'apiCalls/transactions/getServerTransactionsByHashes';
import { ITransactionListItem } from 'lib/sdkDappUi';
import { saveToCache } from 'store/actions/cache/cacheActions';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { ServerTransactionType } from 'types/serverTransactions.types';
import { SignedTransactionType } from 'types/transactions.types';
import { getCachedTransactionListItem } from './getCachedTransactionListItem';
import { mapTransactionToListItem } from './mapTransactionToListItem';

interface IMapServerTransactionsToListItemsParams {
  transactions: SignedTransactionType[];
  address: string;
  explorerAddress: string;
  egldLabel: string;
}

const sortTransactionsByTimestamp = (transactions: ITransactionListItem[]) =>
  transactions.sort((a, b) => b.timestamp - a.timestamp);

export const mapServerTransactionsToListItems = async ({
  transactions,
  address,
  explorerAddress,
  egldLabel
}: IMapServerTransactionsToListItemsParams): Promise<
  ITransactionListItem[]
> => {
  const cachedTransactions: ITransactionListItem[] = [];
  const hashesToFetch: string[] = [];

  transactions.forEach((transaction) => {
    const cachedTransaction = getCachedTransactionListItem(transaction.hash);
    if (cachedTransaction) {
      cachedTransactions.push(cachedTransaction);
    } else {
      hashesToFetch.push(transaction.hash);
    }
  });

  if (hashesToFetch.length === 0) {
    return sortTransactionsByTimestamp(cachedTransactions);
  }

  const newTransactions = await getServerTransactionsByHashes(hashesToFetch);

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

  newTransactions.forEach((transaction) => {
    const transactionListItem = mapTransactionToListItem({
      transaction,
      address,
      explorerAddress,
      egldLabel
    });

    if (transactionListItem.status !== TransactionServerStatusesEnum.pending) {
      saveToCache({
        key: `transaction-${transaction.txHash}`,
        value: transactionListItem
      });
    }

    cachedTransactions.push(transactionListItem);
  });

  return sortTransactionsByTimestamp(cachedTransactions);
};
