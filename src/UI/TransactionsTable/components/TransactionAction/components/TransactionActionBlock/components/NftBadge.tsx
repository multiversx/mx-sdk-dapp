import React from 'react';
import { EsdtEnumType, NftEnumType } from 'types/tokens.types';

export const NftBadge = ({
  type,
  className
}: {
  type: NftEnumType | EsdtEnumType;
  className?: string;
}) => {
  switch (type) {
    case NftEnumType.SemiFungibleESDT:
      return (
        <div
          className={`badge badge-secondary badge-pill font-weight-light ${
            className ? className : ''
          }`}
        >
          SFT
        </div>
      );
    case NftEnumType.NonFungibleESDT:
      return (
        <div
          className={`badge badge-secondary badge-pill font-weight-light ${
            className ? className : ''
          }`}
        >
          NFT
        </div>
      );
    case NftEnumType.MetaESDT:
      return (
        <div
          className={`badge badge-secondary badge-pill font-weight-light ${
            className ? className : ''
          }`}
        >
          Meta-ESDT
        </div>
      );
    default:
      return null;
  }
};
