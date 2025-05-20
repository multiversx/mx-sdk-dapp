import BigNumber from 'bignumber.js';
import trimEnd from 'lodash.trimend';
import { formatAmount, DECIMALS, DIGITS, ZERO } from 'lib/sdkDappUtils';

import { trimAmountDecimals } from 'utils/operations/trimAmountDecimals';
import { isTransferNftOrSft } from './isTransferNftOrSft';

export const getAssetAmount = (transactionTransfer: Record<string, string>) => {
  if (isTransferNftOrSft(transactionTransfer)) {
    return parseFloat(transactionTransfer.value).toLocaleString();
  }

  const formattedAmount = formatAmount({
    input: String(transactionTransfer.value ?? ZERO),
    decimals: Number(transactionTransfer.decimals ?? DECIMALS),
    showLastNonZeroDecimal: true,
    addCommas: true
  });

  const trimmedAmount = trimAmountDecimals({
    minimumPositiveDecimals: DIGITS,
    amount: formattedAmount
  });

  const [price, decimals] = trimmedAmount.split('.');
  const trimmedDecimals = trimEnd(decimals, ZERO);

  if (decimals && new BigNumber(decimals).isGreaterThan(ZERO)) {
    return `${price}.${trimmedDecimals}`;
  }

  return trimmedAmount;
};
