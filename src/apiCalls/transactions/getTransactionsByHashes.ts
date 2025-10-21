import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { ServerTransactionType } from 'types/serverTransactions.types';
import {
  TrackedTransactionResultType,
  SignedTransactionType
} from 'types/transactions.types';
import { getServerTransactionsByHashes } from './getServerTransactionsByHashes';

export const getTransactionsByHashes = async (
  pendingTransactions: SignedTransactionType[]
): Promise<TrackedTransactionResultType[]> => {
  const hashes = pendingTransactions.map((tx) => tx.hash);

  const responseData = await getServerTransactionsByHashes(hashes);

  const pendingTxs = pendingTransactions.map((transaction) => {
    const txOnNetwork = responseData.find(
      (txResponse: ServerTransactionType) =>
        txResponse?.txHash === transaction.hash
    );

    return {
      ...transaction,
      status: txOnNetwork?.status as
        | TransactionServerStatusesEnum
        | TransactionBatchStatusesEnum,
      invalidTransaction: txOnNetwork == null,
      results: txOnNetwork?.results ?? [],
      previousStatus: transaction.status?.toString() || '',
      hasStatusChanged: Boolean(
        txOnNetwork && txOnNetwork.status !== transaction.status
      )
    };
  });

  return pendingTxs;
};
