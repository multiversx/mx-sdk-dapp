import { useEffect } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { getWebsocketUrl } from 'utils/websocket/getWebsocketUrl';
import { useGetNetworkConfig } from '../useGetNetworkConfig';
import { useRegisterWebsocketListener } from '../websocketListener';
import { useCheckTransactionStatus } from './useCheckTransactionStatus';
import { useGetPollingInterval } from './useGetPollingInterval';

export function useTransactionsTracker(props?: TransactionsTrackerType) {
  const checkTransactionStatus = useCheckTransactionStatus();
  const pollingInterval = useGetPollingInterval();
  const { network } = useGetNetworkConfig();

  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

  const onMessage = () => {
    checkTransactionStatus({
      shouldRefreshBalance: true,
      getTransactionsByHash,
      ...props
    });
  };

  useRegisterWebsocketListener(onMessage);

  const setPollingInterval = async () => {
    const websocketUrl = await getWebsocketUrl(network.apiAddress);

    if (websocketUrl != null) {
      // Do not setInterval if we already subscribe to websocket event
      return;
    }

    const interval = setInterval(onMessage, pollingInterval);

    return () => {
      clearInterval(interval);
    };
  };

  useEffect(() => {
    setPollingInterval();
  }, [onMessage]);
}
