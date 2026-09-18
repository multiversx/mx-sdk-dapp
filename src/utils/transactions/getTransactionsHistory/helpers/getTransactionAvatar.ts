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
      senderAssets?.iconPng ??
      senderAssets?.svgUrl ??
      senderAssets?.iconSvg ??
      null
    );
  }

  return (
    receiverAssets?.iconPng ??
    receiverAssets?.svgUrl ??
    receiverAssets?.iconSvg ??
    null
  );
};
