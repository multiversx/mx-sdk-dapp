import { network } from '__mocks__/data/storeData/network';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { getEgldLabel } from '../getEgldLabel';

jest.mock('store/store');
jest.mock('store/selectors/networkSelectors');

describe('getEgldLabel tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getState as jest.Mock).mockReturnValue({});
    (networkSelector as jest.Mock).mockReturnValue(network);
  });

  it('returns the EGLD label from network selector', () => {
    const result = getEgldLabel();

    expect(result).toBe(network.egldLabel);
  });
});
