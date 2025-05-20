export const maxDecimals = (amount: string, decimals = 18) => {
  if (
    amount != null &&
    amount.toString().indexOf('.') >= 0 &&
    (amount as any).toString().split('.').pop().length > decimals
  ) {
    return false;
  }
  return true;
};
