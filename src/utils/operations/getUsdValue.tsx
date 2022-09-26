export const getUsdValue = ({
  amount,
  usd,
  decimals = 2,
  addEqualSign
}: {
  amount: string;
  usd: number;
  decimals?: number;
  addEqualSign?: boolean;
}) => {
  const sum = (parseFloat(amount) * usd).toFixed(decimals);
  const formattedValue = parseFloat(sum).toLocaleString('en', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals
  });
  const equalSign = parseFloat(amount) > 0 ? '≈' : '=';
  const equalSignPrefix = addEqualSign ? `${equalSign} ` : '';
  return `${equalSignPrefix}$${formattedValue}`;
};
