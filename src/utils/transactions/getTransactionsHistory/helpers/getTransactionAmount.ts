import BigNumber from 'bignumber.js';
import { ITransactionAsset } from './getTransactionAssets';

interface IGetTransactionAmountParams {
  transactionAssets: ITransactionAsset[];
  isIncomingTransaction: boolean;
}

export const getTransactionAmount = ({
  transactionAssets,
  isIncomingTransaction
}: IGetTransactionAmountParams): string => {
  if (transactionAssets.length > 1) {
    const firstAssetTicker = transactionAssets[0]?.assetTicker;
    const hasMultipleDifferentAssets = transactionAssets.some(
      (asset) => asset.assetTicker !== firstAssetTicker
    );

    if (hasMultipleDifferentAssets) {
      return '';
    }
  }

  if (!transactionAssets[0]?.assetAmount) {
    return '';
  }

  const amount = transactionAssets[0].assetAmount;
  const ticker = transactionAssets[0].assetTicker;

  if (new BigNumber(amount).isZero()) {
    return `${amount} ${ticker}`;
  }

  const prefix = isIncomingTransaction ? '+' : '-';

  return `${prefix}${amount} ${ticker}`;
};
