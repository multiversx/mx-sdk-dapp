import {
  MIN_TRANSACTIONS_STATUS_POLLING_INTERVAL_MS,
  TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
} from 'constants/transactions.constants';
import { roundDurationSelectorSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';

export function getPollingInterval() {
  const roundDuration = roundDurationSelectorSelector(getState());

  if (!roundDuration) {
    return TRANSACTIONS_STATUS_POLLING_INTERVAL_MS;
  }

  return Math.max(
    MIN_TRANSACTIONS_STATUS_POLLING_INTERVAL_MS,
    roundDuration / 2
  );
}
