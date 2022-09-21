export interface UsdValueType {
  amount: string;
  usd: number;
  decimals?: number;
  addEqualSign?: boolean;
}

export const getUsdValue = ({
  amount,
  usd,
  decimals = 2,
  addEqualSign
}: UsdValueType) => {
  const sum = (parseFloat(amount) * usd).toFixed(decimals);
  const formattedValue = parseFloat(sum).toLocaleString('en', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals
  });
  const equalSign = parseFloat(amount) > 0 ? '≈' : '=';
  const equalSignPrefix = addEqualSign ? `${equalSign} ` : '';
  return `${equalSignPrefix}$${formattedValue}`;
};
