import React from 'react';
import classNames from 'classnames';

import { NftEnumType } from 'types/tokens.types';

import styles from './NFTSFTPreviewStyles.scss';

export interface NFTSFTPreviewPropsType {
  txType: NftEnumType;
  tokenLabel: string;
  tokenId: string;
  tokenAvatar: string;
}

export const NFTSFTPreview = ({
  txType,
  tokenLabel,
  tokenId,
  tokenAvatar
}: NFTSFTPreviewPropsType) => {
  const badge = txType === NftEnumType.NonFungibleESDT ? 'NFT' : 'SFT';

  return (
    <div className={styles.preview}>
      <img src={tokenAvatar} className={styles.image} />

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.name}>{tokenLabel}</div>

          <div className={styles.identifier}>{tokenId}</div>
        </div>
        <div className={styles.right}>
          <div
            className={classNames(styles.badge, {
              [styles.nft]: txType === NftEnumType.NonFungibleESDT,
              [styles.sft]: txType === NftEnumType.SemiFungibleESDT
            })}
          >
            {badge}
          </div>
        </div>
      </div>
    </div>
  );
};
