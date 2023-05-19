import React from 'react';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import MultiversXIcon from 'assets/icons/EGLD.svg';
import { NftEnumType } from 'types/tokens.types';

import { getEgldLabel } from 'utils';
import styles from './tokenAvatarStyles.scss';

export interface TokenAvatarPropsType {
  type?: NftEnumType | string;
  avatar?: string;
}

export const TokenAvatar = (props: TokenAvatarPropsType) => {
  const { avatar, type } = props;

  const egldLabel = getEgldLabel();
  const isNft = type === NftEnumType.NonFungibleESDT;
  const isSft = type === NftEnumType.SemiFungibleESDT;
  const isEgld = type === egldLabel;

  const tokenIcon = avatar ? (
    <img src={avatar} />
  ) : (
    <FontAwesomeIcon icon={faDiamond} />
  );

  if (isNft || isSft) {
    return (
      <div
        className={classNames(styles.tokenAvatar, {
          [styles.tokenAvatarNft]: isNft,
          [styles.tokenAvatarSft]: isSft
        })}
      >
        {isNft ? 'NFT' : 'SFT'}
      </div>
    );
  }

  return (
    <div className={styles.tokenAvatar}>
      {isEgld ? <MultiversXIcon /> : tokenIcon}
    </div>
  );
};
