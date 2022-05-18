import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { GetTransactionsByHashesType } from 'contexts/types';

import useTransactionsTracker from './useTransactionsTracker';

export interface TransactionsTrackerType {
  refetchTimestamp?: number;
  getTransactionsByHash?: GetTransactionsByHashesType;
}

export function TransactionsTracker({
  getTransactionsByHash: getTxByHash
}: TransactionsTrackerType) {
  const getTransactionsByHash = getTxByHash ?? defaultGetTxByHash;
  useTransactionsTracker({ getTransactionsByHash });
  return null;
}

export default TransactionsTracker;
