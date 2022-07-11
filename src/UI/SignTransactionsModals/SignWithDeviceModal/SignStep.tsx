import React from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import {
  faExclamationTriangle,
  faHourglass,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetNetworkConfig } from 'hooks';
import useGetTokenDetails from 'hooks/transactions/useGetTokenDetails';

import { ActiveLedgerTransactionType, MultiSignTxType } from 'types';
import { PageState } from 'UI/PageState';
import { ProgressSteps } from 'UI/ProgressSteps';
import { TokenDetails } from 'UI/TokenDetails';
import { TransactionData } from 'UI/TransactionData';
import { getGeneratedClasses } from 'UI/utils';
import { denominate, getEgldLabel, isTokenTransfer } from 'utils';
import globalStyles from 'assets/sass/main.scss';
import classNames from 'classnames';

export interface SignStepType {
  onSignTransaction: () => void;
  onPrev: () => void;
  handleClose: () => void;
  waitingForDevice: boolean;
  error: string | null;
  callbackRoute?: string;
  title?: React.ReactNode;
  currentStep: number;
  currentTransaction: ActiveLedgerTransactionType | null;
  allTransactions: MultiSignTxType[];
  isLastTransaction: boolean;
  className: string;
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
  className
}: SignStepType) => {
  const egldLabel = getEgldLabel();

  if (!currentTransaction) {
    return null;
  }

  const transactionData = currentTransaction.transaction.getData().toString();
  const { network } = useGetNetworkConfig();

  const {
    tokenId,
    amount,
    type,
    multiTxData,
    receiver
  } = currentTransaction.transactionTokenInfo;

  const isTokenTransaction = Boolean(
    tokenId && isTokenTransfer({ tokenId, erdLabel: egldLabel })
  );

  const isFirst = currentStep === 0;

  const onCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
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

  const { tokenDenomination, tokenAvatar } = useGetTokenDetails({
    tokenId: currentTransaction.transactionTokenInfo.tokenId
  });

  const denominatedAmount = denominate({
    input: isTokenTransaction
      ? amount
      : currentTransaction.transaction.getValue().toString(),
    denomination: isTokenTransaction
      ? tokenDenomination
      : Number(network.egldDenomination),
    decimals: Number(network.decimals),
    showLastNonZeroDecimal: false,
    addCommas: true
  });

  const scamReport = currentTransaction.receiverScamInfo;
  const showProgressSteps = allTransactions.length > 1;

  const classes = getGeneratedClasses(className, true, {
    formGroup: classNames(
      globalStyles.formGroup,
      globalStyles.textBreak,
      globalStyles.textLeft
    ),
    formLabel: classNames(globalStyles.textBreak, globalStyles.textSecondary),
    icon: globalStyles.textWhite,
    contentWrapper: classNames(
      globalStyles.dFlex,
      globalStyles.flexColumn,
      globalStyles.justifyContentStart,
      globalStyles.flexRow,
      globalStyles.justifyContentBetween,
      globalStyles.mb3
    ),
    tokenWrapper: classNames(
      globalStyles.mb3,
      globalStyles.mb0,
      globalStyles.dFlex,
      globalStyles.flexColumn,
      globalStyles.alignItemsStart
    ),
    tokenLabel: classNames(globalStyles.textSecondary, globalStyles.textLeft),
    tokenValue: classNames(
      globalStyles.dFlex,
      globalStyles.alignItemsCenter,
      globalStyles.mt1
    ),
    scamReport: globalStyles.textWarning,
    scamReportIcon: classNames(globalStyles.textWarning, globalStyles.mr1),
    tokenAmountLabel: classNames(
      globalStyles.textSecondary,
      globalStyles.textLeft
    ),
    tokenAmountValue: classNames(
      globalStyles.dFlex,
      globalStyles.alignItemsCenter
    ),
    dataFormGroup: classNames(globalStyles.formGroup, globalStyles.textLeft),
    errorMessage: classNames(
      globalStyles.textDanger,
      globalStyles.dFlex,
      globalStyles.justifyContentCenter,
      globalStyles.alignItemsCenter
    ),
    buttonsWrapper: classNames(
      globalStyles.dFlex,
      globalStyles.alignItemsCenter,
      globalStyles.justifyContentEnd,
      globalStyles.mt1
    ),
    cancelButton: classNames(
      globalStyles.btn,
      globalStyles.btnDark,
      globalStyles.textWhite,
      globalStyles.dFlex,
      globalStyles.mr2
    ),
    signButton: classNames(
      globalStyles.btn,
      scamReport ? globalStyles.btnWarning : globalStyles.btnPrimary,
      globalStyles.dFlex,
      globalStyles.ml2
    )
  });

  return (
    <PageState
      icon={error ? faTimes : faHourglass}
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
                  className='mb-4'
                />
              )}

              <div className={classes.formGroup} data-testid='transactionTitle'>
                <div className={classes.formLabel}>To </div>
                {multiTxData
                  ? new Address(receiver).bech32()
                  : currentTransaction.transaction.getReceiver().toString()}
                {scamReport && (
                  <div className={classes.scamReport}>
                    <span>
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className={classes.scamReportIcon}
                      />
                      <small>{scamReport}</small>
                    </span>
                  </div>
                )}
              </div>

              <div className={classes.contentWrapper}>
                <div className={classes.tokenWrapper}>
                  <div className={classes.tokenLabel}>Token</div>
                  <div className={classes.tokenValue}>
                    <TokenDetails.Icon
                      tokenAvatar={tokenAvatar}
                      token={tokenId || egldLabel}
                    />
                    <div className='mr-1'></div>
                    <TokenDetails.Label token={tokenId || egldLabel} />
                  </div>
                </div>
                <div>
                  <div className={classes.tokenAmountLabel}>Amount</div>
                  <div className={classes.tokenAmountValue}>
                    <div className='mr-1'>{denominatedAmount}</div>
                    <TokenDetails.Symbol token={tokenId || egldLabel} />
                  </div>
                </div>
              </div>

              <div className={classes.dataFormGroup}>
                {currentTransaction.transaction.getData() && (
                  <TransactionData
                    {...{
                      data: currentTransaction.transaction.getData().toString(),
                      highlight: multiTxData,
                      isScCall: !tokenId
                    }}
                  />
                )}
              </div>
              {error && <p className={classes.errorMessage}>{error}</p>}
            </>
          )}
        </>
      }
      action={
        <div className={classes.buttonsWrapper}>
          <button
            id='closeButton'
            data-testid='closeButton'
            onClick={onCloseClick}
            className={classes.cancelButton}
          >
            {isFirst ? 'Cancel' : 'Back'}
          </button>

          <button
            type='button'
            className={classes.signButton}
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
