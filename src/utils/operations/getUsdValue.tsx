export interface UsdValueType {
  amount: string;
  usd: number;
  decimals?: number;
}

export const getUsdValue = ({ amount, usd, decimals = 2 }: UsdValueType) => {
  const sum = (parseFloat(amount) * usd).toFixed(decimals);
  const formattedValue = parseFloat(sum).toLocaleString('en', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals
  });
  const equalSign = parseFloat(amount) > 0 ? '≈' : '=';
  return `${equalSign} $${formattedValue}`;
};
