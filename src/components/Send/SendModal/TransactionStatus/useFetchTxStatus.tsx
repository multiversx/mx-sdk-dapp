import * as React from "react";
import { TransactionHash, TransactionStatus } from "@elrondnetwork/erdjs";
import { useContext } from "context";

const searchInteval = 2000;

const useLastTxStatus = (hash: TransactionHash): TransactionStatus => {
  const [lastTxStatus, setLastTxStatus] = React.useState(
    new TransactionStatus("pending")
  );
  const { dapp } = useContext();

  const checkTransaction = () => {
    const interval = setInterval(() => {
      if (!document.hidden) {
        dapp.apiProvider.getTransaction(hash).then(({ status }) => {
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(checkTransaction, [lastTxStatus]);

  return lastTxStatus;
};

export default useLastTxStatus;
