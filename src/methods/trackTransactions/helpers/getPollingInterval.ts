import { TRANSACTIONS_STATUS_POLLING_INTERVAL_MS } from 'constants/transactions.constants';
import { roundDurationSelectorSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';

export function getPollingInterval() {
  const roundDuration = roundDurationSelectorSelector(getState());

  if (!roundDuration) {
    return TRANSACTIONS_STATUS_POLLING_INTERVAL_MS;
  }

  // Polling interval should not be less than 1s
  return Math.max(1000, roundDuration / 2);
}
