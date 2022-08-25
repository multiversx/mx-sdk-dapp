import { useEffect, useRef } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import {
  useCheckTransactionStatus,
  useGetAccountInfo,
  useRegisterWebsocketListener
} from 'hooks';
import { GetTransactionsByHashesType } from 'types';
import { useClosureRef } from './useClosureRef';

export interface TransactionsTrackerType {
  getTransactionsByHash?: GetTransactionsByHashesType;
}

export function useTransactionsTracker(props?: TransactionsTrackerType) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const { address } = useGetAccountInfo();
  const checkTransactionStatus = useCheckTransactionStatus();
  const checkTransactionStatusCallback = useClosureRef(checkTransactionStatus);

  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

  const onMessage = () => {
    checkTransactionStatusCallback.current({
      shouldRefreshBalance: true,
      getTransactionsByHash
    });
  };

  useRegisterWebsocketListener({
    onMessage,
    address
  });

  useEffect(() => {
    timeoutRef.current = setTimeout(() => onMessage(), 30000);
    return () => {
      clearInterval(timeoutRef.current);
    };
  }, [timeoutRef.current, onMessage]);
}
