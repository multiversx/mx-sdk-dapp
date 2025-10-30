import { IPlainTransactionObject } from '@multiversx/sdk-core';
import { recommendGasPrice } from 'hooks/transactions/helpers/recommendGasPrice';

interface GetRecommendedGasPricePropsType {
  transaction: IPlainTransactionObject;
  gasPriceData?: {
    initialGasPrice: number;
    ppu: number;
  };
}

export function getRecommendedGasPrice({
  transaction,
  gasPriceData
}: GetRecommendedGasPricePropsType) {
  if (!gasPriceData) {
    throw new Error('Gas price not found for nonce: ' + transaction.nonce);
  }

  const { initialGasPrice, ppu } = gasPriceData;

  const newGasPrice = ppu
    ? recommendGasPrice({
        transactionDataLength: String(transaction?.data || '').length,
        transactionGasLimit: transaction.gasLimit,
        ppu
      })
    : initialGasPrice;

  return newGasPrice;
}
