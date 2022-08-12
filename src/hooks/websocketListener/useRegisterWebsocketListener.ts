import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { useGetWebsocketUrl } from './useGetWebsocketUrl';

interface UseRegisterWebsocketListenerPropsType {
  onMessage: (message: string) => void;
  address: string;
  apiAddress: string;
}

const TIMEOUT = 3000;
const RECONNECTION_ATTEMPTS = 3;
const RETRY_INTERVAL = 500;

export function useRegisterWebsocketListener({
  onMessage,
  address,
  apiAddress
}: UseRegisterWebsocketListenerPropsType) {
  const { data: websocketUrl, getUrl, error } = useGetWebsocketUrl(apiAddress);

  const websocketRef = useRef<Socket | null>(null);
  const refetchInterval = useRef<NodeJS.Timer | null>(null);

  function initializeWebsocketConnection() {
    if (!websocketUrl) {
      return;
    }
    websocketRef.current = io(websocketUrl, {
      forceNew: true,
      reconnectionAttempts: RECONNECTION_ATTEMPTS,
      timeout: TIMEOUT,
      query: {
        address: address
      }
    });

    websocketRef.current.onAny((message: string) => {
      onMessage(message);
    });
  }

  function handleRefetchUrlLogic() {
    if (error) {
      refetchInterval.current = setInterval(getUrl, RETRY_INTERVAL);
    } else if (refetchInterval.current != null) {
      clearInterval(refetchInterval.current);
      refetchInterval.current = null;
    }
  }

  useEffect(() => {
    if (address && websocketUrl) {
      initializeWebsocketConnection();
    }
  }, [address, websocketUrl]);

  useEffect(() => {
    return () => {
      websocketRef.current?.close();
    };
  }, []);

  useEffect(() => {
    handleRefetchUrlLogic();
  }, [error]);
}
