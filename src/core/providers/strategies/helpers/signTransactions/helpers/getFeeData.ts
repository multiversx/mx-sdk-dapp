import { Transaction } from '@multiversx/sdk-core/out';
import { GAS_PER_DATA_BYTE, GAS_PRICE_MODIFIER } from 'constants/mvx.constants';
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
    gasPerDataByte: String(GAS_PER_DATA_BYTE),
    gasPriceModifier: String(GAS_PRICE_MODIFIER),
    gasLimit: transaction.getGasLimit().valueOf().toString(),
    gasPrice: transaction.getGasPrice().valueOf().toString(),
    data: transaction.getData().toString(),
    chainId: transaction.getChainID().valueOf()
  });

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
