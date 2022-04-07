export const getUsdValue = ({
  amount,
  usd,
  decimals = 2
}: {
  amount: string;
  usd: number;
  decimals?: number;
}) => {
  const sum = (parseFloat(amount) * usd).toFixed(decimals);
  return parseFloat(sum).toLocaleString('en', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals
  });
};
