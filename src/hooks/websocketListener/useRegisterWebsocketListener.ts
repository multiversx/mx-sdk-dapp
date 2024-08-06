import { useEffect } from 'react';
import { BatchTransactionsWSResponseType } from 'types';
import { useGetBatchWebsocketEvent, useGetWebsocketEvent } from '../account';
import { useInitializeWebsocketConnection } from './useInitializeWebsocketConnection';

export function useRegisterWebsocketListener(
  onMessage: (message: string) => void,
  onBatchMessage?: (data: BatchTransactionsWSResponseType) => void
) {
  const websocketConnection = useInitializeWebsocketConnection();
  const websocketEvent = useGetWebsocketEvent();
  const websocketBatchEvent = useGetBatchWebsocketEvent();

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
  }, [onBatchMessage, websocketBatchEvent]);

  return websocketConnection;
}
