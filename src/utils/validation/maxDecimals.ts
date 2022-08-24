import { DECIMALS } from 'constants/index';

export const maxDecimals = (amount: string, customDecimals?: number) => {
  const decimals = customDecimals === undefined ? DECIMALS : customDecimals;
  if (
    amount !== undefined &&
    amount.toString().indexOf('.') >= 0 &&
    (amount as any)
      .toString()
      .split('.')
      .pop().length > decimals
  ) {
    return false;
  }
  return true;
};
