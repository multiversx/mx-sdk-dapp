import { useEffect } from 'react';
import { useSelector } from 'reduxStore/DappProviderContext';
import {
  websocketBatchEventSelector,
  websocketEventSelector
} from 'reduxStore/selectors';
import { useInitializeWebsocketConnection } from './useInitializeWebsocketConnection';
import { BatchTransactionsWSResponseType } from 'types';

export function useRegisterWebsocketListener(
  onMessage: (message: string) => void,
  onBatchMessage?: (data: BatchTransactionsWSResponseType) => void
) {
  useInitializeWebsocketConnection();

  const websocketEvent = useSelector(websocketEventSelector);
  const websocketBatchEvent = useSelector(websocketBatchEventSelector);

  useEffect(() => {
    const message = websocketEvent?.message;
    if (message) {
      onMessage(message);
    }
  }, [onMessage, websocketEvent]);

  useEffect(() => {
    const data = websocketBatchEvent?.data;
    if (data) {
      onBatchMessage?.(data);
    }
  }, [onMessage, websocketBatchEvent]);
}
