import React, { MouseEvent, useState } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames';
import { WithStylesImportType } from 'hocs/useStyles';
import { withStyles } from 'hocs/withStyles';
import {
  useGetEgldPrice,
  useGetNetworkConfig,
  useGetTokenDetails
} from 'hooks';
import { ActiveLedgerTransactionType } from 'types';
import { NftEnumType } from 'types/tokens.types';
import { LoadingDots } from 'UI/LoadingDots';
import { getEgldLabel } from 'utils';

import {
  explorerUrlBuilder,
  getExplorerLink
} from 'utils/transactions/getInterpretedTransaction/helpers';
import { ConfirmAmountData, ConfirmAmountLabel } from './components';

export interface ConfirmAmountPropsType extends WithStylesImportType {
  currentTransaction: ActiveLedgerTransactionType;
}

const ConfirmAmountComponent = ({
  styles,
  currentTransaction
}: ConfirmAmountPropsType) => {
  const { tokenId, nonce, amount } = currentTransaction.transactionTokenInfo;
  const [isFontSizeLoading, setIsFontSizeLoading] = useState(true);

  // If the token has a nonce means that this is an NFT. Eg: TokenId=TOKEN-1hfr, nonce=123 => NFT id=TOKEN-1hfr-123
  const tokenIdForTokenDetails =
    nonce && nonce.length > 0 ? `${tokenId}-${nonce}` : tokenId;

  const { price: egldPrice } = useGetEgldPrice();
  const { network } = useGetNetworkConfig();

  const {
    type,
    name,
    tokenAvatar,
    tokenDecimals,
    esdtPrice,
    ticker,
    identifier,
    isLoading: isTokenDetailsLoading
  } = useGetTokenDetails({
    tokenId: tokenIdForTokenDetails
  });

  const isEgld = !tokenId;
  const isNftOrSft = type
    ? [NftEnumType.SemiFungibleESDT, NftEnumType.NonFungibleESDT].includes(type)
    : false;

  const duplicatedSftAvatars = Array(Math.min(4, Number(amount))).fill(null);
  const tokenPrice = isEgld ? egldPrice : esdtPrice;
  const egldLabel = getEgldLabel();

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

  const getElementWidth = (element: HTMLElement) =>
    element.getBoundingClientRect().width;

  const getFontSize = (element: HTMLElement) =>
    parseInt(getComputedStyle(element).getPropertyValue('font-size'));

  const handleReference = (element: HTMLElement | null) => {
    if (!element) {
      return;
    }

    const firstChild = element.firstChild as HTMLElement;
    const sizes = {
      parent: element.offsetWidth,
      firstChild: getFontSize(firstChild)
    };

    if (!firstChild) {
      return;
    }

    while (sizes.parent < getElementWidth(firstChild)) {
      const updatedSize = sizes.firstChild - 0.1;
      const updatedFontSize = { fontSize: `${updatedSize}px` };
      const updatedSizesObject = { firstChild: updatedSize };

      Object.assign(firstChild.style, updatedFontSize);
      Object.assign(sizes, updatedSizesObject);
    }

    setIsFontSizeLoading(false);
  };

  return (
    <div className={styles?.confirmAmount}>
      <div className={styles?.confirmAmountLabel}>
        {isTokenDetailsLoading ? (
          <LoadingDots />
        ) : (
          <ConfirmAmountLabel amount={amount} type={type} />
        )}
      </div>

      <div className={styles?.confirmAmountWrapper}>
        <LoadingDots
          className={classNames(styles?.confirmAmountLoading, {
            [styles?.confirmAmountLoadingVisible]:
              isTokenDetailsLoading || isFontSizeLoading
          })}
        />

        <div
          className={classNames(styles?.confirmAmountContent, {
            [styles?.confirmAmountContentHidden]:
              isTokenDetailsLoading || isFontSizeLoading
          })}
        >
          {isNftOrSft ? (
            <div
              onClick={handleNftSftClick}
              className={styles?.confirmAmountPreview}
            >
              <div className={styles?.confirmAmountPreviewWrapper}>
                <div className={styles?.confirmAmountPreviewIconWrapper}>
                  {duplicatedSftAvatars.map((_, index) => (
                    <img
                      src={tokenAvatar}
                      alt={type}
                      key={`nft-sft-avatar-${index}`}
                      style={{
                        opacity: 1 - 0.25 * index,
                        marginLeft:
                          (duplicatedSftAvatars.length - index - 1) * 4,
                        zIndex: duplicatedSftAvatars.length - index
                      }}
                      className={classNames(styles?.confirmAmountPreviewIcon, {
                        [styles?.confirmAmountPreviewIconRelative]: index === 0
                      })}
                    />
                  ))}
                </div>

                <div className={styles?.confirmAmountPreviewContent}>
                  <div className={styles?.confirmAmountPreviewName}>{name}</div>
                  <div className={styles?.confirmAmountPreviewTicker}>
                    {ticker}
                  </div>
                </div>
              </div>

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={styles?.confirmAmountPreviewIcon}
              />
            </div>
          ) : (
            <ConfirmAmountData
              isNftOrSft={isNftOrSft}
              isEgld={isEgld}
              amount={amount}
              handleReference={handleReference}
              tokenAvatar={tokenAvatar}
              currentTransaction={currentTransaction}
              egldLabel={egldLabel}
              tokenDecimals={tokenDecimals}
              tokenPrice={tokenPrice}
              network={network}
              ticker={ticker}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const ConfirmAmount = withStyles(ConfirmAmountComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmAmount/confirmAmountStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmAmount/confirmAmountStyles.scss')
      .default
});
