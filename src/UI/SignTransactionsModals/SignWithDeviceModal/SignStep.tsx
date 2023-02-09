import React, { MouseEvent, ReactNode } from 'react';
import {
  faExclamationTriangle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Address } from '@multiversx/sdk-core/out';

import globalStyles from 'assets/sass/main.scss';
import { useGetNetworkConfig } from 'hooks';
import { useGetTokenDetails } from 'hooks/transactions/useGetTokenDetails';
import { ActiveLedgerTransactionType, MultiSignTransactionType } from 'types';
import { PageState } from 'UI/PageState';
import { ProgressSteps } from 'UI/ProgressSteps';
import { TokenDetails } from 'UI/TokenDetails';
import { TransactionData } from 'UI/TransactionData';

import { getEgldLabel } from 'utils/network/getEgldLabel';
import { formatAmount } from 'utils/operations/formatAmount';
import { isTokenTransfer } from 'utils/transactions/isTokenTransfer';

import { getIdentifierType } from 'utils/validation/getIdentifierType';
import { WithClassnameType } from '../../types';
import { useSignStepsClasses } from './hooks/useSignStepsClasses';

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

  const token = isNft ? nftId : tokenId ?? egldLabel;
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
                  className={globalStyles.mb4}
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
                      token={token}
                    />

                    <div className={globalStyles.mr1}></div>

                    <TokenDetails.Label token={token} />
                  </div>
                </div>

                <div>
                  <div className={classes.tokenAmountLabel}>Amount</div>

                  <div className={classes.tokenAmountValue}>
                    <div className={globalStyles.mr1}>{shownAmount}</div>
                    <TokenDetails.Symbol token={token} />
                  </div>
                </div>
              </div>

              <div className={classes.dataFormGroup}>
                {currentTransaction.transaction.getData() && (
                  <TransactionData
                    isScCall={!tokenId}
                    data={currentTransaction.transaction.getData().toString()}
                    highlight={multiTxData}
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
