import React from 'react';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import MultiversXIcon from 'assets/icons/EGLD.svg';
import { NftEnumType } from 'types/tokens.types';

import styles from './tokenAvatarStyles.scss';

export interface TokenAvatarPropsType {
  type: string;
  avatar?: string;
}

export const TokenAvatar = (props: TokenAvatarPropsType) => {
  const { avatar, type } = props;

  if (type === NftEnumType.NonFungibleESDT) {
    return (
      <div className={classNames(styles.tokenAvatar, styles.tokenAvatarNFT)}>
        NFT
      </div>
    );
  }

  if (type === NftEnumType.SemiFungibleESDT) {
    return (
      <div className={classNames(styles.tokenAvatar, styles.tokenAvatarSFT)}>
        SFT
      </div>
    );
  }

  if (type === 'EGLD') {
    return (
      <div className={styles.tokenAvatar}>
        <MultiversXIcon />
      </div>
    );
  }

  if (avatar) {
    return (
      <div className={styles.tokenAvatar}>
        <img src={avatar} />
      </div>
    );
  }

  return (
    <div className={styles.tokenAvatar}>
      <FontAwesomeIcon icon={faDiamond} />
    </div>
  );
};
