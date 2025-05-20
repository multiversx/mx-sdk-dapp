import BigNumber from 'bignumber.js';

import { formatAmount, DECIMALS, ZERO } from 'lib/sdkDappUtils';

import { isTransferNftOrSft } from './isTransferNftOrSft';

export const getAssetPrice = (transactionTransfer: Record<string, string>) => {
  if (isTransferNftOrSft(transactionTransfer)) {
    return;
  }

  const formattedAmount = formatAmount({
    input: String(transactionTransfer.value ?? ZERO),
    decimals: Number(transactionTransfer.decimals ?? DECIMALS),
    showLastNonZeroDecimal: true
  });

  const assetPrice = new BigNumber(transactionTransfer.usdPrice ?? '1')
    .times(formattedAmount)
    .toString();

  return assetPrice;
};
