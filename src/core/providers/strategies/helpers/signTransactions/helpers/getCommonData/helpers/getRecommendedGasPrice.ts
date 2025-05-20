import { IPlainTransactionObject } from '@multiversx/sdk-core/out';
import { ISignTransactionsPanelCommonData } from 'core/managers/internal/SignTransactionsStateManager/types/signTransactionsPanel.types';
import { recommendGasPrice } from 'lib/sdkDappUtils';
interface GetRecommendedGasPricePropsType {
  transaction: IPlainTransactionObject;
  gasPriceData?: {
    initialGasPrice: number;
    ppu: ISignTransactionsPanelCommonData['ppu'];
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
