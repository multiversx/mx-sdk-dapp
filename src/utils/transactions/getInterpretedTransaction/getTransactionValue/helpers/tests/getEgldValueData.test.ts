import { DECIMALS } from 'lib/sdkDappUtils';
import { getEgldValueData } from '../getEgldValueData';

jest.mock('lib/sdkDappUtils', () => ({
  DECIMALS: 18,
  formatAmount: jest.fn()
}));

const { formatAmount: mockFormatAmount } = jest.requireMock(
  'lib/sdkDappUtils'
) as {
  formatAmount: jest.Mock;
};

describe('getEgldValueData tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFormatAmount.mockReturnValue('1.23');
  });

  it('returns formatted EGLD value data', () => {
    const value = '1230000000000000000';
    const result = getEgldValueData(value);

    expect(mockFormatAmount).toHaveBeenCalledWith({ input: value });
    expect(result).toEqual({
      egldValueData: {
        value,
        formattedValue: '1.23',
        decimals: DECIMALS
      }
    });
  });
});
