// src/hooks/transactions/useTransactionsTracker/usePollingWithWebsocketFallback.ts
import { useEffect, useRef, useState } from 'react';
import { accountSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { useGetAccount } from '../../account/useGetAccount';
import {
  websocketConnection,
  WebsocketConnectionStatusEnum
} from '../../websocketListener/websocketConnection';
import { useGetPollingInterval } from '../useGetPollingInterval';

interface UseWebsocketPollingFallbackParamsType {
  onPoll: () => void | Promise<void>;
  pollingInterval?: number;
}

/**
 * A hook that handles polling with websocket fallback mechanism.
 * It will start polling when:
 * 1. There is an address present
 * 2. Websocket is not in COMPLETED state
 *
 * It will stop polling when:
 * 1. Address is removed
 * 2. Websocket becomes COMPLETED
 */
export const useWebsocketPollingFallback = ({
  onPoll,
  pollingInterval
}: UseWebsocketPollingFallbackParamsType) => {
  const defaultPollingInterval = useGetPollingInterval();
  const usedPollingInterval = pollingInterval ?? defaultPollingInterval;
  const pollingIntervalTimer = useRef<NodeJS.Timeout | null>(null);
  const { address } = useGetAccount();
  const [websocketStatus, setWebsocketStatus] = useState(
    websocketConnection.status
  );

  const clearFallbackTimer = () => {
    if (pollingIntervalTimer.current) {
      clearInterval(pollingIntervalTimer.current);
      pollingIntervalTimer.current = null;
    }
  };

  useEffect(() => {
    const unsubscribe = websocketConnection.subscribe((status) => {
      console.info('Websocket status changed:', status);
      setWebsocketStatus(status);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const isWebsocketCompleted =
      websocketStatus === WebsocketConnectionStatusEnum.COMPLETED;

    if (!address || isWebsocketCompleted) {
      clearFallbackTimer();
      return;
    }

    if (pollingIntervalTimer.current) {
      return;
    }

    console.info('Websocket connection failed. Starting polling fallback...');
    pollingIntervalTimer.current = setInterval(() => {
      const currentStatus = websocketConnection.status;
      const isNowCompleted =
        currentStatus === WebsocketConnectionStatusEnum.COMPLETED;

      // Get the address from store directly to avoid closure issues related to hooks
      const { address: currentAddress } = accountSelector(store.getState());

      if (!currentAddress || isNowCompleted) {
        clearFallbackTimer();
        return;
      }

      onPoll();
    }, usedPollingInterval);

    return () => {
      clearFallbackTimer();
    };
  }, [address, websocketStatus, onPoll, usedPollingInterval]);

  return clearFallbackTimer;
};
