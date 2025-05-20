import { DECIMALS, formatAmount } from 'lib/sdkDappUtils';

export const getEgldValueData = (value: string) => ({
  egldValueData: {
    value,
    formattedValue: formatAmount({ input: value }),
    decimals: DECIMALS
  }
});
