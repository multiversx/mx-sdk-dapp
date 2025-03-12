interface RecommendGasPriceParams {
  transactionDataLength: number;
  transactionGasLimit: number;
  ppu: number;
}

export function recommendGasPrice({
  transactionDataLength,
  transactionGasLimit,
  ppu
}: RecommendGasPriceParams) {
  const MIN_GAS_LIMIT = 50_000;
  const MIN_GAS_PRICE = 1_000_000_000;
  const GAS_PER_DATA_BYTE = 1_500;
  const GAS_PRICE_MODIFIER = 0.01;

  const GAS_PRICE_FALLBACK = MIN_GAS_PRICE;
  const MAX_GAS_PRICE = MIN_GAS_PRICE * 30;

  if (!ppu) {
    return GAS_PRICE_FALLBACK;
  }

  const dataCost = MIN_GAS_LIMIT + transactionDataLength * GAS_PER_DATA_BYTE;
  const executionCost = transactionGasLimit - dataCost;
  const initiallyPaidFee = transactionGasLimit * ppu;
  const gasPrice = Math.floor(
    initiallyPaidFee / (dataCost + executionCost * GAS_PRICE_MODIFIER)
  );

  if (gasPrice < MIN_GAS_PRICE) {
    return MIN_GAS_PRICE;
  }

  if (gasPrice > MAX_GAS_PRICE) {
    return MAX_GAS_PRICE;
  }

  return gasPrice;
}
