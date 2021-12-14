import * as React from 'react';
import { TransactionHash, TransactionStatus } from '@elrondnetwork/erdjs';
import { useSelector } from 'react-redux';
import { apiProviderSelector } from '../../../../redux/selectors';

const searchInteval = 2000;

const useLastTxStatus = (hash: TransactionHash): TransactionStatus => {
  const [lastTxStatus, setLastTxStatus] = React.useState(
    new TransactionStatus('pending')
  );

  const apiProvider = useSelector(apiProviderSelector);

  const checkTransaction = () => {
    const interval = setInterval(() => {
      if (!document.hidden) {
        apiProvider.getTransaction(hash).then(({ status }) => {
          if (!status.isPending()) {
            setLastTxStatus(status);
          }
        });
      }
    }, searchInteval);
    if (!lastTxStatus.isPending()) {
      clearInterval(interval);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  };

  React.useEffect(checkTransaction, [lastTxStatus]);

  return lastTxStatus;
};

export default useLastTxStatus;
