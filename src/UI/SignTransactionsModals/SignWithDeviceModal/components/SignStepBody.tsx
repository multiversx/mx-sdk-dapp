import React, { MouseEvent } from 'react';
import { Address } from '@multiversx/sdk-core/out';
import classNames from 'classnames';

import { useGetEgldPrice, useGetNetworkConfig } from 'hooks';
import { useGetTokenDetails } from 'hooks/transactions/useGetTokenDetails';
import type {
  ActiveLedgerTransactionType,
  MultiSignTransactionType
} from 'types';
import { NftEnumType } from 'types/tokens.types';
import { TransactionData } from 'UI/TransactionData';
import { getIdentifierType } from 'utils';
import { getEgldLabel } from 'utils/network/getEgldLabel';
import { formatAmount } from 'utils/operations/formatAmount';
import { isTokenTransfer } from 'utils/transactions/isTokenTransfer';

import { useSignStepsClasses } from '../hooks';
import { SignStepPropsType } from '../signWithDeviceModal.types';
import { ConfirmAmount } from './components/ConfirmAmount';
import { ConfirmFee } from './components/ConfirmFee';
import { ConfirmReceiver } from './components/ConfirmReceiver';
import { NftSftPreview } from './components/NftSftPreview';
import styles from './signStepBodyStyles.scss';

export interface SignStepInnerClassesType {
  buttonsWrapperClassName?: string;
  inputGroupClassName?: string;
  inputLabelClassName?: string;
  inputValueClassName?: string;
  errorClassName?: string;
  scamAlertClassName?: string;
  buttonClassName?: string;
  progressClassName?: string;
}

export interface SignStepBodyPropsType {
  error: string | null;
  callbackRoute?: string;
  currentStep: number;
  currentTransaction: ActiveLedgerTransactionType | null;
  allTransactions: MultiSignTransactionType[];
  signStepInnerClasses?: SignStepInnerClassesType;
  isGuarded?: boolean;
  waitingForDevice: SignStepPropsType['waitingForDevice'];
  signBtnLabel: string;
  buttonClassName: SignStepInnerClassesType['buttonClassName'];
  buttonsWrapperClassName: SignStepInnerClassesType['buttonsWrapperClassName'];
  onSubmit: () => void;
  onCloseClick: (event: MouseEvent<HTMLElement>) => void;
}

export const SignStepBody = ({
  currentTransaction,
  error,
  signStepInnerClasses,
  onCloseClick,
  onSubmit,
  buttonClassName,
  buttonsWrapperClassName,
  signBtnLabel,
  currentStep,
  waitingForDevice
}: SignStepBodyPropsType) => {
  const egldLabel = getEgldLabel();

  if (!currentTransaction) {
    return null;
  }

  const { network } = useGetNetworkConfig();
  const {
    inputGroupClassName,
    inputLabelClassName,
    inputValueClassName,
    errorClassName
  } = signStepInnerClasses || {};

  const { tokenId, nonce, amount, multiTxData, receiver } =
    currentTransaction.transactionTokenInfo;

  const isTokenTransaction = Boolean(
    tokenId && isTokenTransfer({ tokenId, erdLabel: egldLabel })
  );

  const { isNft, isEgld, isEsdt } = getIdentifierType(tokenId);

  // If the token has a nonce means that this is an NFT. Eg: TokenId=TOKEN-1hfr, nonce=123 => NFT id=TOKEN-1hfr-123
  const appendedNonce = nonce ? `-${nonce}` : '';
  const nftId = `${tokenId}${appendedNonce}`;

  const { tokenDecimals, tokenAvatar, tokenLabel, type, esdtPrice } =
    useGetTokenDetails({
      tokenId: nonce && nonce?.length > 0 ? nftId : tokenId
    });

  const formattedAmount = formatAmount({
    input: isTokenTransaction
      ? amount
      : currentTransaction.transaction.getValue().toString(),
    decimals: isTokenTransaction ? tokenDecimals : Number(network.decimals),
    digits: Number(network.digits),
    showLastNonZeroDecimal: false,
    addCommas: true
  });

  const scamReport = currentTransaction.receiverScamInfo;
  const classes = useSignStepsClasses(scamReport);

  const token = isNft ? nftId : tokenId || egldLabel;
  const shownAmount = isNft ? amount : formattedAmount;

  const isSft = type === NftEnumType.SemiFungibleESDT;
  const isNftOrSft = type === NftEnumType.SemiFungibleESDT || isSft;

  const { price: egldPrice } = useGetEgldPrice();
  let tokenPrice = null;

  if (isEgld && egldPrice) {
    tokenPrice = egldPrice;
  }

  if (isNft) {
    tokenPrice = 0;
  }

  if (isEsdt && type) {
    tokenPrice = esdtPrice ?? 0;
  }

  const shouldShowAmount =
    isEgld || isEsdt || (Boolean(type) && type !== NftEnumType.NonFungibleESDT);

  return (
    <>
      <div className={styles.summary}>
        <div className={styles.fields}>
          {isNftOrSft && (
            <NftSftPreview
              txType={type}
              tokenLabel={tokenLabel}
              tokenId={tokenId}
              tokenAvatar={tokenAvatar}
            />
          )}

          <ConfirmReceiver
            scamReport={scamReport}
            receiver={
              multiTxData
                ? new Address(receiver).bech32()
                : currentTransaction.transaction.getReceiver().toString()
            }
          />

          <div className={styles.columns}>
            {shouldShowAmount && (
              <div className={styles.column}>
                <ConfirmAmount
                  tokenAvatar={tokenAvatar}
                  amount={shownAmount}
                  token={token}
                  tokenType={isEgld ? egldLabel : type ?? undefined}
                  tokenPrice={tokenPrice}
                />
              </div>
            )}

            <div className={styles.column}>
              <ConfirmFee
                tokenAvatar={tokenAvatar}
                egldLabel={egldLabel}
                transaction={currentTransaction.transaction}
              />
            </div>
          </div>

          {currentTransaction.transaction.getData() && (
            <TransactionData
              isScCall={!tokenId}
              data={currentTransaction.transaction.getData().toString()}
              highlight={multiTxData}
              className={inputGroupClassName}
              innerTransactionDataClasses={{
                transactionDataInputLabelClassName: inputLabelClassName,
                transactionDataInputValueClassName: inputValueClassName
              }}
            />
          )}

          {error && (
            <p className={classNames(classes.errorMessage, errorClassName)}>
              {error}
            </p>
          )}
        </div>
      </div>

      <div
        className={classNames(classes.buttonsWrapper, buttonsWrapperClassName)}
      >
        <button
          id='closeButton'
          data-testid='closeButton'
          onClick={onCloseClick}
          className={classNames(classes.cancelButton, buttonClassName)}
        >
          {currentStep === 0 ? 'Cancel' : 'Back'}
        </button>

        <button
          type='button'
          className={classNames(classes.signButton, buttonClassName)}
          id='signBtn'
          data-testid='signBtn'
          onClick={onSubmit}
          disabled={waitingForDevice}
        >
          {signBtnLabel}
        </button>
      </div>
    </>
  );
};
