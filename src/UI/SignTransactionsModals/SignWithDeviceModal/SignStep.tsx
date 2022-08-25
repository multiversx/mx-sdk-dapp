import React from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import {
  faExclamationTriangle,
  faHourglass,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import globalStyles from 'assets/sass/main.scss';
import { useGetNetworkConfig } from 'hooks';
import { useGetTokenDetails } from 'hooks/transactions/useGetTokenDetails';

import { ActiveLedgerTransactionType, MultiSignTransactionType } from 'types';
import { PageState } from 'UI/PageState';
import { ProgressSteps } from 'UI/ProgressSteps';
import { TokenDetails } from 'UI/TokenDetails';
import { TransactionData } from 'UI/TransactionData';
import { getEgldLabel, isTokenTransfer } from 'utils';
import { formatAmount } from '../../../utils/operations/formatAmount';
import { WithClassnameType } from '../../types';
import { useSignStepsClasses } from './hooks/useSignStepsClasses';

export interface SignStepType extends WithClassnameType {
  onSignTransaction: () => void;
  onPrev: () => void;
  handleClose: () => void;
  waitingForDevice: boolean;
  error: string | null;
  callbackRoute?: string;
  title?: React.ReactNode;
  currentStep: number;
  currentTransaction: ActiveLedgerTransactionType | null;
  allTransactions: MultiSignTransactionType[];
  isLastTransaction: boolean;
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

  const denominatedAmount = formatAmount({
    input: isTokenTransaction
      ? amount
      : currentTransaction.transaction.getValue().toString(),
    decimals: isTokenTransaction
      ? tokenDenomination
      : Number(network.egldDenomination),
    digits: Number(network.decimals),
    showLastNonZeroDecimal: false,
    addCommas: true
  });

  const scamReport = currentTransaction.receiverScamInfo;
  const showProgressSteps = allTransactions.length > 1;

  const classes = useSignStepsClasses(scamReport);

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
