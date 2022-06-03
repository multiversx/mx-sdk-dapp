import { denomination as configDenomination } from 'constants/index';

export const maxDecimals = (amount: string, customDenomination?: number) => {
  const denomination =
    customDenomination === undefined ? configDenomination : customDenomination;
  if (
    amount !== undefined &&
    amount.toString().indexOf('.') >= 0 &&
    (amount as any)
      .toString()
      .split('.')
      .pop().length > denomination
  ) {
    return false;
  }
  return true;
};

export default maxDecimals;
