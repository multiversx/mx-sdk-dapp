import { DECIMALS } from 'lib/sdkDappUtils';
import { ServerTransactionType } from 'types/serverTransactions.types';

import { getAssetAmount } from './getAssetAmount';
import { getAssetPrice } from './getAssetPrice';

interface IGetTransactionAssetsParams {
  transaction: ServerTransactionType;
  userIsReceiver: boolean;
  egldLabel?: string;
}

export interface ITransactionAsset {
  assetPrefix: string;
  assetTicker: string;
  assetAmount: string;
  assetImage?: string;
  assetPrice?: string;
  type: string;
}

export const getTransactionAssets = ({
  transaction,
  userIsReceiver,
  egldLabel
}: IGetTransactionAssetsParams): ITransactionAsset[] => {
  const transactionAction = transaction.action;
  const transactionArguments = transactionAction && transactionAction.arguments;

  const transactionTransfers: Record<string, string>[] =
    transactionArguments && Array.isArray(transactionArguments.transfers)
      ? transactionArguments.transfers
      : [];

  const isEgldTransfer = transactionTransfers.length === 0;
  const processedEgldLabel = egldLabel ?? 'EGLD';
  const assetPrefix = userIsReceiver ? '+' : '-';

  const egldTransferAsset: ITransactionAsset = {
    assetPrefix,
    type: processedEgldLabel,
    assetTicker: processedEgldLabel,
    assetAmount: getAssetAmount({
      value: transaction.value,
      decimals: String(DECIMALS)
    })
  };

  const transfersAssets = transactionTransfers.map(
    (transactionTransfer): ITransactionAsset => ({
      assetPrefix,
      type: transactionTransfer.type,
      assetTicker: transactionTransfer.ticker,
      assetImage: transactionTransfer.svgUrl,
      assetAmount: getAssetAmount(transactionTransfer),
      assetPrice: getAssetPrice(transactionTransfer)
    })
  );

  if (isEgldTransfer) {
    return [egldTransferAsset];
  }

  return transfersAssets;
};
