import React, { MouseEvent, ReactNode } from 'react';
import {
  faExclamationTriangle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Address } from '@multiversx/sdk-core/out';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { useGetNetworkConfig } from 'hooks';
import { useGetTokenDetails } from 'hooks/transactions/useGetTokenDetails';
import type {
  ActiveLedgerTransactionType,
  MultiSignTransactionType
} from 'types';
import { PageState } from 'UI/PageState';
import { ProgressSteps } from 'UI/ProgressSteps';
import { TokenDetails } from 'UI/TokenDetails';
import { TransactionData } from 'UI/TransactionData';

import { getIdentifierType } from 'utils';
import { getEgldLabel } from 'utils/network/getEgldLabel';
import { formatAmount } from 'utils/operations/formatAmount';
import { isTokenTransfer } from 'utils/transactions/isTokenTransfer';

import type { WithClassnameType } from '../../types';

import { useSignStepsClasses } from './hooks/useSignStepsClasses';

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

// TODO: Rename to "SignStepPropsType" when sdk-dapp@3.0.0
export interface SignStepType extends WithClassnameType {
  onSignTransaction: () => void;
  onPrev: () => void;
  handleClose: () => void;
  waitingForDevice: boolean;
  error: string | null;
  callbackRoute?: string;
  title?: ReactNode;
  currentStep: number;
  currentTransaction: ActiveLedgerTransactionType | null;
  allTransactions: MultiSignTransactionType[];
  isLastTransaction: boolean;
  signStepInnerClasses?: SignStepInnerClassesType;
}

export const SignStep = ({
  onSignTransaction,
  handleClose,
  onPrev,
  title,
  waitingForDevice,
  currentTransaction,
  error,
  allTransactions,
  isLastTransaction,
  currentStep,
  className,
  signStepInnerClasses
}: SignStepType) => {
  const egldLabel = getEgldLabel();

  if (!currentTransaction) {
    return null;
  }

  const transactionData = currentTransaction.transaction.getData().toString();
  const { network } = useGetNetworkConfig();

  const {
    buttonsWrapperClassName,
    inputGroupClassName,
    inputLabelClassName,
    inputValueClassName,
    errorClassName,
    scamAlertClassName,
    buttonClassName,
    progressClassName
  } = signStepInnerClasses || {};

  const { tokenId, nonce, amount, type, multiTxData, receiver } =
    currentTransaction.transactionTokenInfo;

  const isTokenTransaction = Boolean(
    tokenId && isTokenTransfer({ tokenId, erdLabel: egldLabel })
  );

  const isFirst = currentStep === 0;

  const onCloseClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (isFirst) {
      handleClose();
    } else {
      onPrev();
    }
  };

  const continueWithoutSigning =
    type && multiTxData && !transactionData.endsWith(multiTxData);

  let signBtnLabel = 'Sign & Continue';
  signBtnLabel = waitingForDevice ? 'Check your Ledger' : signBtnLabel;
  signBtnLabel =
    isLastTransaction && !waitingForDevice ? 'Sign & Submit' : signBtnLabel;
  signBtnLabel = continueWithoutSigning ? 'Continue' : signBtnLabel;

  const { isNft } = getIdentifierType(tokenId);

  // If the token has a nonce means that this is an NFT. Eg: TokenId=TOKEN-1hfr, nonce=123 => NFT id=TOKEN-1hfr-123
  const appendedNonce = nonce ? `-${nonce}` : '';
  const nftId = `${tokenId}${appendedNonce}`;

  const { tokenDecimals, tokenAvatar } = useGetTokenDetails({
    tokenId: nonce && nonce.length > 0 ? nftId : tokenId
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
  const showProgressSteps = allTransactions.length > 1;
  const classes = useSignStepsClasses(scamReport);

  const token = isNft ? nftId : tokenId || egldLabel;
  const shownAmount = isNft ? amount : formattedAmount;

  return (
    <PageState
      icon={error ? faTimes : null}
      iconClass={classes.icon}
      iconBgClass={error ? globalStyles.bgDanger : globalStyles.bgWarning}
      iconSize='3x'
      className={className}
      title={title || 'Confirm on Ledger'}
      description={
        <>
          {currentTransaction.transaction && (
            <>
              {showProgressSteps && (
                <ProgressSteps
                  totalSteps={allTransactions.length}
                  currentStep={currentStep + 1} // currentStep starts at 0
                  className={classNames(globalStyles.mb4, progressClassName)}
                />
              )}

              <div
                data-testid='transactionTitle'
                className={classNames(classes.formGroup, inputGroupClassName)}
              >
                <div
                  className={classNames(classes.formLabel, inputLabelClassName)}
                >
                  To
                </div>

                <div
                  className={inputValueClassName}
                  data-testid='confirmReceiver'
                >
                  {multiTxData
                    ? new Address(receiver).bech32()
                    : currentTransaction.transaction.getReceiver().toString()}
                </div>

                {scamReport && (
                  <div
                    className={classNames(
                      classes.scamReport,
                      scamAlertClassName
                    )}
                  >
                    <span>
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className={classes.scamReportIcon}
                      />

                      <small data-testid='confirmScamReport'>
                        {scamReport}
                      </small>
                    </span>
                  </div>
                )}
              </div>

              <div
                className={classNames(
                  classes.tokenWrapper,
                  inputGroupClassName
                )}
              >
                <div
                  className={classNames(
                    classes.tokenLabel,
                    inputLabelClassName
                  )}
                >
                  Token
                </div>

                <div className={inputValueClassName} data-testid='confirmToken'>
                  <div className={classes.tokenValue}>
                    <TokenDetails.Icon
                      tokenAvatar={tokenAvatar}
                      token={token}
                    />

                    <div className={globalStyles.mr2}></div>
                    <TokenDetails.Label token={token} />
                  </div>
                </div>
              </div>

              <div className={inputGroupClassName}>
                <div
                  className={classNames(
                    classes.tokenAmountLabel,
                    inputLabelClassName
                  )}
                >
                  Amount
                </div>

                <div
                  className={classNames(
                    classes.tokenAmountValue,
                    inputValueClassName
                  )}
                  data-testid='confirmAmount'
                >
                  {shownAmount}
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
            </>
          )}
        </>
      }
      action={
        <div
          className={classNames(
            classes.buttonsWrapper,
            buttonsWrapperClassName
          )}
        >
          <button
            id='closeButton'
            data-testid='closeButton'
            onClick={onCloseClick}
            className={classNames(classes.cancelButton, buttonClassName)}
          >
            {isFirst ? 'Cancel' : 'Back'}
          </button>

          <button
            type='button'
            className={classNames(classes.signButton, buttonClassName)}
            id='signBtn'
            data-testid='signBtn'
            onClick={onSignTransaction}
            disabled={waitingForDevice}
          >
            {signBtnLabel}
          </button>
        </div>
      }
    />
  );
};
