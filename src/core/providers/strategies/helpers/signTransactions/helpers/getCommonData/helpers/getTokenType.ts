import { EsdtEnumType, NftEnumType } from 'types/tokens.types';

export const getTokenType = (type?: NftEnumType) => {
  switch (type) {
    case NftEnumType.NonFungibleESDT:
    case NftEnumType.SemiFungibleESDT:
    case NftEnumType.MetaESDT:
      return type;
    default:
      return EsdtEnumType.FungibleESDT;
  }
};
