import {
  CROSS_SHARD_ROUNDS,
  TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
} from 'constants/transactionStatus';
import { useSelector } from 'reduxStore/DappProviderContext';
import { roundDurationSelectorSelector } from 'reduxStore/selectors';

export const useGetPollingInterval = () => {
  const roundDuration = useSelector(roundDurationSelectorSelector);

  if (!roundDuration) {
    return TRANSACTIONS_STATUS_POLLING_INTERVAL_MS;
  }

  return roundDuration * CROSS_SHARD_ROUNDS;
};
