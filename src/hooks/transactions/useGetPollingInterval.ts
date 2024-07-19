import { TRANSACTIONS_STATUS_POLLING_INTERVAL_MS } from 'constants/transactionStatus';
import { useSelector } from 'reduxStore/DappProviderContext';
import { roundDurationSelectorSelector } from 'reduxStore/selectors';

export const useGetPollingInterval = () => {
  const roundDuration = useSelector(roundDurationSelectorSelector);

  if (!roundDuration) {
    return TRANSACTIONS_STATUS_POLLING_INTERVAL_MS;
  }

  // Polling interval should not be less than 1s
  return Math.max(1000, roundDuration / 2);
};
