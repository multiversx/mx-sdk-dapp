import {
  MIN_TRANSACTIONS_STATUS_POLLING_INTERVAL_MS,
  TRANSACTIONS_STATUS_POLLING_INTERVAL_MS
} from 'constants/transactions.constants';
import { roundDurationSelectorSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { getPollingInterval } from '../getPollingInterval';

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

jest.mock('store/selectors/networkSelectors', () => ({
  roundDurationSelectorSelector: jest.fn()
}));

describe('getPollingInterval tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return half of round duration when it is above the minimum', () => {
    const mockRoundDuration = 6000; // 6 seconds
    (getState as jest.Mock).mockReturnValue({});
    (roundDurationSelectorSelector as jest.Mock).mockReturnValue(
      mockRoundDuration
    );

    const result = getPollingInterval();

    expect(roundDurationSelectorSelector).toHaveBeenCalledWith({});
    expect(result).toBe(3000);
  });

  it('should not poll faster than the minimum when round duration is short', () => {
    const mockRoundDuration = 600; // 600 ms
    (getState as jest.Mock).mockReturnValue({});
    (roundDurationSelectorSelector as jest.Mock).mockReturnValue(
      mockRoundDuration
    );

    const result = getPollingInterval();

    expect(roundDurationSelectorSelector).toHaveBeenCalledWith({});
    expect(result).toBe(MIN_TRANSACTIONS_STATUS_POLLING_INTERVAL_MS);
  });

  it('should return default polling interval when round duration is not available', () => {
    (getState as jest.Mock).mockReturnValue({});
    (roundDurationSelectorSelector as jest.Mock).mockReturnValue(null);

    const result = getPollingInterval();

    expect(roundDurationSelectorSelector).toHaveBeenCalledWith({});
    expect(result).toBe(TRANSACTIONS_STATUS_POLLING_INTERVAL_MS);
  });
});
