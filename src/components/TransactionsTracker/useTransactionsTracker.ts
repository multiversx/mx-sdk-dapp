import { useEffect, useRef } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { GetTransactionsByHashesType } from 'types';
import {
  useCheckTransactionStatus,
  useGetAccountInfo,
  useGetNetworkConfig,
  useRegisterWebsocketListener
} from 'hooks/index';

export interface TransactionsTrackerType {
  getTransactionsByHash?: GetTransactionsByHashesType;
}

export function useTransactionsTracker(props?: TransactionsTrackerType) {
  const { network } = useGetNetworkConfig();
  const { address } = useGetAccountInfo();
  const checkTransactionStatus = useCheckTransactionStatus();
  const checkTransactionStatusRef = useRef(checkTransactionStatus);

  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

  const onMessage = () => {
    checkTransactionStatusRef.current({
      shouldRefreshBalance: true,
      getTransactionsByHash
    });
  };

  useEffect(() => {
    checkTransactionStatusRef.current = checkTransactionStatus;
  }, [checkTransactionStatus]);

  useRegisterWebsocketListener({
    onMessage,
    address,
    apiAddress: network.apiAddress
  });
}
