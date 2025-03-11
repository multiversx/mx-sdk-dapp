import { useCallback } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { useCheckTransactionStatus } from '../useCheckTransactionStatus';
import { useWebsocketPollingFallback } from './useWebsocketPollingFallback';

/**
 * Fallback mechanism to check the transaction in case of ws connection failure
 * Resolves the toast by checking the transaction after a certain time (90seconds)
 * */
export const useCheckTransactionOnWsFailureFallback = (
  props?: TransactionsTrackerType
) => {
  const checkTransactionStatus = useCheckTransactionStatus();
  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

  const checkTransaction = useCallback(() => {
    checkTransactionStatus({
      getTransactionsByHash,
      ...props
    });
  }, [checkTransactionStatus, getTransactionsByHash, props]);

  useWebsocketPollingFallback({
    onPoll: checkTransaction
  });
};
