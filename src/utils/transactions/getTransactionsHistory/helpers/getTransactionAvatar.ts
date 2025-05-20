interface IGetTransactionAvatarParams {
  senderAssets?: IAsset;
  receiverAssets?: IAsset;
  userIsReceiver: boolean;
}

interface IAsset {
  svgUrl?: string;
  iconSvg?: string;
  iconPng?: string;
}

export const getTransactionAvatar = ({
  senderAssets,
  receiverAssets,
  userIsReceiver
}: IGetTransactionAvatarParams): string | null => {
  if (userIsReceiver) {
    return (
      senderAssets?.svgUrl ??
      senderAssets?.iconSvg ??
      senderAssets?.iconPng ??
      null
    );
  }

  return (
    receiverAssets?.svgUrl ??
    receiverAssets?.iconSvg ??
    receiverAssets?.iconPng ??
    null
  );
};
