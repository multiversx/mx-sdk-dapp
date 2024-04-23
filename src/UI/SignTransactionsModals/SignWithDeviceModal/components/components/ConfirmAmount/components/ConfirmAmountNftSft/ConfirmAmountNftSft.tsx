import React, { MouseEvent } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { DataTestIdsEnum } from 'constants/index';
import { withStyles } from 'hocs/withStyles';
import { TokenOptionType, useGetNetworkConfig } from 'hooks';
import { safeWindow } from 'lib/sdkWebWalletCrossWindowProvider';
import { NftEnumType } from 'types/tokens.types';
import {
  explorerUrlBuilder,
  getExplorerLink
} from 'utils/transactions/getInterpretedTransaction/helpers';

import { WithStylesImportType } from '../../../../../../../../hocs/useStyles';

export interface ConfirmAmountNftSftPropsType extends WithStylesImportType {
  type?: NftEnumType;
  amount: string;
  tokenDetails: TokenOptionType;
}

const ConfirmAmountNftSftComponent = ({
  styles,
  amount,
  type,
  tokenDetails
}: ConfirmAmountNftSftPropsType) => {
  const { network } = useGetNetworkConfig();
  const { identifier, tokenAvatar, name } = tokenDetails;

  const isSft = NftEnumType.SemiFungibleESDT === type;
  const mirroredSftAvatarsCount = 4;
  const duplicatedSftAvatars = Array(
    Math.min(mirroredSftAvatarsCount, Number(amount))
  ).fill(null);

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

    if (safeWindow.open) {
      safeWindow.open(explorerLink);
    }
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
          <div
            className={styles?.confirmAmountNftSftName}
            data-testid={DataTestIdsEnum.nftLabel}
          >
            {name}
          </div>

          <div
            className={styles?.confirmAmountNftSftTicker}
            data-testid={DataTestIdsEnum.nftIdentifier}
          >
            {identifier}
          </div>
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
