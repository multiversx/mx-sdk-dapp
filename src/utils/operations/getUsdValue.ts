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
  let sum = (parseFloat(amount) * usd).toFixed(decimals);
  if (isNaN(Number(sum))) {
    sum = '0';
  }

  const formattedValue = parseFloat(sum).toLocaleString('en', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals
  });
  const equalSign = parseFloat(amount) > 0 ? '≈' : '=';
  const equalSignPrefix = addEqualSign ? `${equalSign} ` : '';
  return `${equalSignPrefix}$${formattedValue}`;
};
