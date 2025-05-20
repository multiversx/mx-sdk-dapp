import { ITransactionListItemAsset } from 'lib/sdkDappUi';
import { AssetType } from 'types/account.types';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { TransactionIconTypeEnum } from 'types/transaction-list-item.types';
import { isContract } from 'utils/validation/isContract';
import { getIsTransactionInvalidOrFailed } from './getIsTransactionInvalidOrFailed';
import { ITransactionAsset } from './getTransactionAssets';
import { getTransactionAvatar } from './getTransactionAvatar';

enum NftTypeEnum {
  NonFungibleESDT = 'NonFungibleESDT',
  SemiFungibleESDT = 'SemiFungibleESDT'
}

interface IGetTransactionAssetParams {
  receiver: string;
  sender: string;
  receiverAssets?: AssetType;
  senderAssets?: AssetType;
  transactionAssets: ITransactionAsset[];
  showDefaultState?: boolean;
  status: TransactionServerStatusesEnum;
}

export const getTransactionAsset = ({
  receiver,
  sender,
  senderAssets,
  receiverAssets,
  transactionAssets,
  showDefaultState = false,
  status
}: IGetTransactionAssetParams): ITransactionListItemAsset | null => {
  const userIsReceiver = receiver === sender;
  const isContractInteraction = userIsReceiver
    ? isContract(sender)
    : isContract(receiver);

  const transactionAvatar = getTransactionAvatar({
    senderAssets,
    receiverAssets,
    userIsReceiver
  });

  const [latestAsset] = transactionAssets ?? [];
  const isMultipleAssets = transactionAssets.length > 1;
  const assetIsNft = latestAsset?.type === NftTypeEnum.NonFungibleESDT;
  const assetIsSft = latestAsset?.type === NftTypeEnum.SemiFungibleESDT;

  const areMultipleAssetsSameType =
    transactionAssets?.every(
      (asset) => latestAsset && asset.assetTicker === latestAsset.assetTicker
    ) ?? false;

  const isTransactionFailedOrInvalid = getIsTransactionInvalidOrFailed(status);
  const isTransactionPending = status === TransactionServerStatusesEnum.pending;

  const showDefaultTransactionIcon =
    isTransactionPending || isTransactionFailedOrInvalid;

  if (showDefaultTransactionIcon && !showDefaultState) {
    return {
      icon: isTransactionPending ? 'faHourglass' : 'faTimes'
    };
  }

  if (isMultipleAssets && !areMultipleAssetsSameType) {
    return {
      icon: 'faCoins'
    };
  }

  if (latestAsset?.assetImage) {
    return {
      imageUrl: latestAsset.assetImage
    };
  }

  if (assetIsNft || assetIsSft) {
    return {
      text: assetIsSft
        ? TransactionIconTypeEnum.SFT
        : TransactionIconTypeEnum.NFT
    };
  }

  if (isContractInteraction) {
    return {
      imageUrl: transactionAvatar || undefined
    };
  }

  return null;
};
