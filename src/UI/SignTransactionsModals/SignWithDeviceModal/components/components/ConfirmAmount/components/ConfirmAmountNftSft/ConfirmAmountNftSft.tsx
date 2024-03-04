import React, { MouseEvent } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { WithStylesImportType } from 'hocs/useStyles';
import { withStyles } from 'hocs/withStyles';
import { AccountInfoSliceNetworkType } from 'types';
import { NftEnumType } from 'types/tokens.types';
import {
  explorerUrlBuilder,
  getExplorerLink
} from 'utils/transactions/getInterpretedTransaction/helpers';

export interface ConfirmAmountNftSftPropsType extends WithStylesImportType {
  tokenAvatar: string;
  ticker?: string;
  network: AccountInfoSliceNetworkType;
  identifier?: string;
  name?: string;
  type?: NftEnumType;
  amount: string;
}

const ConfirmAmountNftSftComponent = ({
  identifier,
  tokenAvatar,
  network,
  ticker,
  name,
  styles,
  amount,
  type
}: ConfirmAmountNftSftPropsType) => {
  const isSft = NftEnumType.SemiFungibleESDT === type;
  const duplicatedSftAvatars = Array(Math.min(4, Number(amount))).fill(null);

  const handleNftSftClick = (event: MouseEvent<HTMLElement>) => {
    if (!identifier) {
      return;
    }

    const explorerLink = getExplorerLink({
      explorerAddress: network.explorerAddress,
      to: explorerUrlBuilder.nftDetails(identifier)
    });

    event.preventDefault();
    event.stopPropagation();
    window.open(explorerLink);
  };

  return (
    <div onClick={handleNftSftClick} className={styles?.confirmAmountNftSft}>
      <div className={styles?.confirmAmountNftSftWrapper}>
        {tokenAvatar ? (
          <div className={styles?.confirmAmountNftSftIconWrapper}>
            {duplicatedSftAvatars.map((_, index) => (
              <img
                src={tokenAvatar}
                alt={type}
                key={`nft-sft-avatar-${index}`}
                style={{
                  opacity: 1 - 0.25 * index,
                  zIndex: duplicatedSftAvatars.length - index,
                  marginLeft: (duplicatedSftAvatars.length - index - 1) * 4
                }}
                className={classNames(styles?.confirmAmountNftSftIcon, {
                  [styles?.confirmAmountNftSftIconRelative]: index === 0
                })}
              />
            ))}
          </div>
        ) : (
          <div className={styles?.confirmAmountNftSftIconWrapper}>
            <div className={styles?.confirmAmountNftSftIconText}>
              {isSft ? 'SFT' : 'NFT'}
            </div>
          </div>
        )}

        <div className={styles?.confirmAmountNftSftContent}>
          <div className={styles?.confirmAmountNftSftName}>{name}</div>
          <div className={styles?.confirmAmountNftSftTicker}>{ticker}</div>
        </div>
      </div>

      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className={styles?.confirmAmountNftSftIcon}
      />
    </div>
  );
};

export const ConfirmAmountNftSft = withStyles(ConfirmAmountNftSftComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmAmount/components/ConfirmAmountNftSft/confirmAmountNftSftStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmAmount/components/ConfirmAmountNftSft/confirmAmountNftSftStyles.scss')
      .default
});
