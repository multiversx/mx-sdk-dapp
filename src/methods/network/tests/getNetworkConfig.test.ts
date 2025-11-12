import { network } from '__mocks__/data/storeData/network';
import { networkConfigSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { getNetworkConfig } from '../getNetworkConfig';

jest.mock('store/store');
jest.mock('store/selectors/networkSelectors');

describe('getNetworkConfig tests', () => {
  const mockNetworkConfig = { network };

  beforeEach(() => {
    jest.clearAllMocks();
    (getState as jest.Mock).mockReturnValue({});
    (networkConfigSelector as jest.Mock).mockReturnValue(mockNetworkConfig);
  });

  it('returns the network config from networkConfigSelector', () => {
    const result = getNetworkConfig();

    expect(result).toEqual(mockNetworkConfig);
  });
});
