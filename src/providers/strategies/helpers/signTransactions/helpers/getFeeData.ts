import { GAS_PER_DATA_BYTE, GAS_PRICE_MODIFIER } from 'constants/mvx.constants';
import { Transaction } from 'lib/sdkCore';
import { formatAmount } from 'lib/sdkDappUtils';
import { calculateFeeInFiat } from './calculateFeeInFiat';
import { calculateFeeLimit } from './calculateFeeLimit';

export const getFeeData = ({
  transaction,
  price
}: {
  transaction: Transaction;
  price?: number;
}) => {
  const feeLimit = calculateFeeLimit({
    from: transaction.sender.toBech32(),
    to: transaction.receiver.toBech32(),
    gasPerDataByte: String(GAS_PER_DATA_BYTE),
    gasPriceModifier: String(GAS_PRICE_MODIFIER),
    gasLimit: transaction.gasLimit.valueOf().toString(),
    gasPrice: transaction.gasPrice.valueOf().toString(),
    data: transaction.data ?? new Uint8Array(),
    chainId: transaction.chainID.valueOf().toString()
  });

  if (feeLimit == null) {
    return { feeLimitFormatted: '', feeInFiatLimit: null, feeLimit };
  }

  const feeLimitFormatted = formatAmount({
    input: feeLimit,
    showLastNonZeroDecimal: true
  });

  const feeInFiatLimit = price
    ? calculateFeeInFiat({
        feeLimit,
        egldPriceInUsd: price,
        hideEqualSign: true
      })
    : null;

  return { feeLimitFormatted, feeInFiatLimit, feeLimit };
};
