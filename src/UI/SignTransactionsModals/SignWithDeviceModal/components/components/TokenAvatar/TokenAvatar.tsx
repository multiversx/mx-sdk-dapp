import React from 'react';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import MultiversXIcon from 'assets/icons/EGLD.svg';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { NftEnumType } from 'types/tokens.types';
import { getEgldLabel } from 'utils/network';

export interface TokenAvatarPropsType {
  type?: NftEnumType | string;
  avatar?: string;
}

const TokenAvatarComponent = (
  props: TokenAvatarPropsType & WithStylesImportType
) => {
  const { avatar, type, styles } = props;

  const egldLabel = getEgldLabel();
  const isNft = type === NftEnumType.NonFungibleESDT;
  const isSft = type === NftEnumType.SemiFungibleESDT;
  const isEgld = type === egldLabel;

  const tokenIcon = avatar ? (
    <img src={avatar} alt={type} />
  ) : (
    <FontAwesomeIcon icon={faDiamond} />
  );

  if (isNft || isSft) {
    return (
      <div
        className={classNames(styles?.tokenAvatar, {
          [styles?.tokenAvatarNft]: isNft,
          [styles?.tokenAvatarSft]: isSft
        })}
      >
        {isNft ? 'NFT' : 'SFT'}
      </div>
    );
  }

  return (
    <div className={styles?.tokenAvatar}>
      {isEgld ? <MultiversXIcon /> : tokenIcon}
    </div>
  );
};

export const TokenAvatar = withStyles(TokenAvatarComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/TokenAvatar/tokenAvatarStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/components/components/TokenAvatar/tokenAvatarStyles.scss')
      .default
});
