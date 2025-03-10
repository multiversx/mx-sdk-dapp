import { useEffect, useRef } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';

import { accountSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { TransactionsTrackerType } from 'types/transactionsTracker.types';
import { useGetAccount } from '../../account/useGetAccount';
import {
  websocketConnection,
  WebsocketConnectionStatusEnum
} from '../../websocketListener/websocketConnection';
import { useCheckTransactionStatus } from '../useCheckTransactionStatus';
import { useGetPollingInterval } from '../useGetPollingInterval';

/**
 * Fallback mechanism to check the transaction in case of ws connection failure
 * Resolves the toast by checking the transaction after a certain time (90seconds)
 * */
export const useCheckTransactionOnWsFailureFallback = (
  props?: TransactionsTrackerType
) => {
  const checkTransactionStatus = useCheckTransactionStatus();
  const pollingInterval = useGetPollingInterval();
  const pollingIntervalTimer = useRef<NodeJS.Timeout | null>(null);
  const { address } = useGetAccount();

  // Track websocket status changes
  const prevWebsocketStatusRef = useRef(websocketConnection.status);

  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

  const clearFallbackTimer = () => {
    if (pollingIntervalTimer.current) {
      clearInterval(pollingIntervalTimer.current);
      pollingIntervalTimer.current = null;
    }
  };

  useEffect(() => {
    const currentStatus = websocketConnection.status;
    const isWebsocketActive =
      currentStatus === WebsocketConnectionStatusEnum.COMPLETED;

    if (prevWebsocketStatusRef.current !== currentStatus) {
      prevWebsocketStatusRef.current = currentStatus;
    }

    if (!address || !isWebsocketActive) {
      clearFallbackTimer();
      return;
    }

    if (pollingIntervalTimer.current) {
      return;
    }

    pollingIntervalTimer.current = setInterval(() => {
      const currentStatus = websocketConnection.status;
      const isNowActive =
        currentStatus === WebsocketConnectionStatusEnum.COMPLETED;

      // Get the address from store directly to avoid closure issues related to hooks
      const { address: currentAddress } = accountSelector(store.getState());

      if (!currentAddress || isNowActive) {
        clearFallbackTimer();
        return;
      }

      checkTransactionStatus({
        getTransactionsByHash,
        ...props
      });
    }, pollingInterval);

    return () => {
      clearFallbackTimer();
    };
  }, [
    checkTransactionStatus,
    pollingInterval,
    address,
    websocketConnection.status
  ]);
};
