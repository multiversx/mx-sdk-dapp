import React, { MouseEvent, useState } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { WithStylesImportType } from 'hocs/useStyles';
import { withStyles } from 'hocs/withStyles';
import {
  useGetEgldPrice,
  useGetNetworkConfig,
  useGetTokenDetails
} from 'hooks';
import { ActiveLedgerTransactionType } from 'types';
import { NftEnumType } from 'types/tokens.types';
import { Balance } from 'UI/Balance';
import { UsdValue } from 'UI/UsdValue';
import { formatAmount, getEgldLabel } from 'utils';

import {
  explorerUrlBuilder,
  getExplorerLink
} from 'utils/transactions/getInterpretedTransaction/helpers';
import { ConfirmAmountLabel } from './components';

export interface ConfirmAmountPropsType extends WithStylesImportType {
  currentTransaction: ActiveLedgerTransactionType;
}

const ConfirmAmountComponent = ({
  styles,
  currentTransaction
}: ConfirmAmountPropsType) => {
  const { tokenId, nonce, amount } = currentTransaction.transactionTokenInfo;

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
    identifier
  } = useGetTokenDetails({
    tokenId: tokenIdForTokenDetails
  });

  const isEgld = !tokenId;
  const isNftOrSft = type
    ? [NftEnumType.SemiFungibleESDT, NftEnumType.NonFungibleESDT].includes(type)
    : false;

  const getFormattedAmount = ({ addCommas }: { addCommas: boolean }) =>
    formatAmount({
      input: isEgld
        ? currentTransaction.transaction.getValue().toString()
        : amount,
      decimals: isEgld ? Number(network.decimals) : tokenDecimals,
      digits: Number(network.digits),
      showLastNonZeroDecimal: false,
      addCommas
    });

  const duplicatedSftAvatars = Array(Math.min(4, Number(amount))).fill(null);
  const formattedAmount = getFormattedAmount({ addCommas: true });
  const rawAmount = getFormattedAmount({ addCommas: false });
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

  const [, setLoading] = useState(true);

  const getElementWidth = (element: Element) =>
    element.getBoundingClientRect().width;

  const getFontSize = (element: Element) => {
    const propertyName = 'font-size';
    const propertyValue =
      getComputedStyle(element).getPropertyValue(propertyName);

    return parseInt(propertyValue);
  };

  const handleRef = (element: any) => {
    if (!element) {
      return;
    }

    const getElementWidth = (element: any) =>
      element.getBoundingClientRect().width;
    const getFontSize = (element: any) =>
      parseInt(getComputedStyle(element).getPropertyValue('font-size'));

    const span = element.firstChild;
    const sizes = {
      parent: element.offsetWidth,
      span: getFontSize(span)
    };

    while (sizes.parent < getElementWidth(span)) {
      const updatedFontSize = { fontSize: `${sizes.span - 0.1}px` };
      const updatedSizesObject = { span: sizes.span - 0.1 };

      Object.assign(span.style, updatedFontSize);
      Object.assign(sizes, updatedSizesObject);
    }

    setLoading(false);
  };

  // const handleRef = (referencedElement: HTMLElement | null) => {
  //   console.log('WAT?S');

  //   if (!referencedElement) {
  //     return;
  //   }

  //   if (!referencedElement.firstChild) {
  //     return;
  //   }

  //   const sizes = {
  //     parent: referencedElement.offsetWidth,
  //     span: getFontSize(referencedElement.firstChild as Element)
  //   };

  //   while (
  //     sizes.parent < getElementWidth(referencedElement.firstChild as Element)
  //   ) {
  //     const currentSize = getFontSize(referencedElement.firstChild as Element);
  //     const updatedFontSize = { fontSize: `${currentSize - 0.1}px` };
  //     const updatedSizesObject = { span: currentSize - 0.1 };

  //     Object.assign(referencedElement.firstChild, updatedFontSize);
  //     Object.assign(sizes, updatedSizesObject);
  //   }

  //   setLoading(false);
  // };

  console.log({
    type,
    name,
    tokenAvatar,
    tokenDecimals,
    esdtPrice,
    ticker,
    identifier
  });

  if (!type) {
    return <span>Loading</span>;
  }

  return (
    <div className={styles?.confirmAmount}>
      <div className={styles?.confirmAmountLabel}>
        <ConfirmAmountLabel amount={amount} type={type} />
      </div>

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
                    marginLeft: (duplicatedSftAvatars.length - index - 1) * 4,
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
              <div className={styles?.confirmAmountPreviewTicker}>{ticker}</div>
            </div>
          </div>

          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className={styles?.confirmAmountPreviewIcon}
          />
        </div>
      ) : (
        <div className={styles?.confirmAmountData}>
          <div className={styles?.confirmAmountDataWrapper}>
            {!isEgld && (
              <img
                src={tokenAvatar}
                className={styles?.confirmAmountDataIcon}
              />
            )}

            <div
              className={styles?.confirmAmountDataBalanceWrapper}
              ref={handleRef}
            >
              <Balance
                amount={formattedAmount}
                egldIcon={isEgld}
                showTokenLabel={true}
                showTokenLabelSup={true}
                tokenLabel={isEgld ? egldLabel : ticker}
                className={styles?.confirmAmountDataBalance}
              />
            </div>
          </div>

          {tokenPrice && (
            <UsdValue
              amount={rawAmount}
              usd={tokenPrice}
              data-testid={DataTestIdsEnum.confirmUsdValue}
              className={styles?.confirmAmountDataPrice}
            />
          )}
        </div>
      )}
    </div>
  );
};

export const ConfirmAmount = withStyles(ConfirmAmountComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmAmount2/confirmAmountStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmAmount2/confirmAmountStyles.scss')
      .default
});
