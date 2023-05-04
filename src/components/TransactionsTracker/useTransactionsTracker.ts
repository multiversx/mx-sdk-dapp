import { useEffect } from 'react';
import { useCheckTransactionStatus, useRegisterWebsocketListener } from 'hooks';

export function useTransactionsTracker() {
  const checkTransactionStatus = useCheckTransactionStatus();

  const onMessage = () => {
    checkTransactionStatus({
      shouldRefreshBalance: true
    });
  };

  useRegisterWebsocketListener(onMessage);

  useEffect(() => {
    const interval = setInterval(onMessage, 30000);
    return () => {
      clearInterval(interval);
    };
  }, [onMessage]);
}
