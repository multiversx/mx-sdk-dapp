import React from 'react';
import classNames from 'classnames';

import { withStyles } from 'hocs/withStyles';
import { useGetEgldPrice, useGetTokenDetails } from 'hooks';
import { ActiveLedgerTransactionType } from 'types';
import { NftEnumType } from 'types/tokens.types';
import { LoadingDots } from 'UI/LoadingDots';

import { WithStylesImportType } from '../../../../../../hocs/useStyles';

import {
  ConfirmAmountData,
  ConfirmAmountLabel,
  ConfirmAmountNftSft
} from './components';
import { useHandleAmountReference } from './hooks';

export interface ConfirmAmountPropsType extends WithStylesImportType {
  currentTransaction: ActiveLedgerTransactionType;
}

const ConfirmAmountComponent = ({
  styles,
  currentTransaction
}: ConfirmAmountPropsType) => {
  const { tokenId, nonce, amount } = currentTransaction.transactionTokenInfo;
  const { isFontSizeLoading, handleAmountReference } =
    useHandleAmountReference();

  // If the token has a nonce means that this is an NFT. Eg: TokenId=TOKEN-1hfr, nonce=123 => NFT id=TOKEN-1hfr-123
  const tokenIdForTokenDetails =
    nonce && nonce.length > 0 ? `${tokenId}-${nonce}` : tokenId;

  const tokenDetails = useGetTokenDetails({
    tokenId: tokenIdForTokenDetails
  });

  const { type, esdtPrice, isLoading: isTokenDetailsLoading } = tokenDetails;
  const { price: egldPrice } = useGetEgldPrice();

  const isEgld = !tokenId;
  const tokenPrice = isEgld ? egldPrice : esdtPrice;
  const isNftOrSft = type
    ? [NftEnumType.SemiFungibleESDT, NftEnumType.NonFungibleESDT].includes(type)
    : false;

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
            <ConfirmAmountNftSft
              amount={amount}
              type={type}
              tokenDetails={tokenDetails}
            />
          ) : (
            <ConfirmAmountData
              isNftOrSft={isNftOrSft}
              isEgld={isEgld}
              amount={amount}
              handleReference={handleAmountReference}
              currentTransaction={currentTransaction}
              tokenDetails={tokenDetails}
              tokenPrice={tokenPrice}
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
