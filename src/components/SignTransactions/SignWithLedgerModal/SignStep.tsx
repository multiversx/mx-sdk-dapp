import React from 'react';
import { Transaction } from '@elrondnetwork/erdjs';
import { Address } from '@elrondnetwork/erdjs/out';
import { faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { denomination, decimals } from 'constants/index';
import useGetTokenDetails from 'hooks/useGetTokenDetails';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import { egldLabelSelector, providerSelector } from 'redux/selectors';
import { updateSignedTransaction } from 'redux/slices/transactionsSlice';
import { TransactionBatchStatusesEnum } from 'types/enums';
import { MultiSignTxType, TxDataTokenType } from 'types/transactions';
import PageState from 'UI/PageState';
import TokenDetails from 'UI/TokenDetails';
import TransactionData from 'UI/TransactionData';
import { denominate, getGeneratedClasses, isTokenTransfer } from 'utils';
import { HandleCloseType } from '../helpers';
import { parseTransactionAfterSigning } from '../helpers/parseTransactionAfterSigning';

export interface SignStepType {
  handleClose: (props?: HandleCloseType) => void;
  error: string;
  tx: MultiSignTxType;
  callbackRoute: string;
  sessionId: string;
  index: number;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  isLast: boolean;
  signedTransactions?: Record<number, Transaction>;
  setSignedTransactions: React.Dispatch<
    React.SetStateAction<Record<number, Transaction> | undefined>
  >;
  txsDataToken: TxDataTokenType;
  className: string;
}

const SignStep = ({
  handleClose,
  error,
  tx,
  index,
  sessionId,
  isLast,
  setSignedTransactions,
  signedTransactions,
  currentStep,
  setCurrentStep,
  callbackRoute,
  txsDataToken,
  className
}: SignStepType) => {
  const provider = useSelector(providerSelector);
  const egldLabel = useSelector(egldLabelSelector);
  const [waitingForDevice, setWaitingForDevice] = React.useState(false);
  const dispatch = useDispatch();
  const transactionData = tx.transaction.getData().toString();

  const { tokenId, amount, type, multiTxData, receiver } = txsDataToken;

  const isTokenTransaction = Boolean(
    tokenId && isTokenTransfer({ tokenId, erdLabel: egldLabel })
  );

  const { tokenDenomination } = useGetTokenDetails({
    tokenId
  });

  const reset = () => {
    setCurrentStep(0);
    setSignedTransactions(undefined);
    setWaitingForDevice(false);
  };

  const sign = async () => {
    try {
      setWaitingForDevice(true);
      const signedTx = await provider.signTransaction(tx.transaction);
      const newSignedTx = { [tx.transactionIndex]: signedTx };
      const newSignedTransactions = signedTransactions
        ? { ...signedTransactions, ...newSignedTx }
        : newSignedTx;
      setSignedTransactions(newSignedTransactions);
      if (!isLast) {
        setCurrentStep((exising) => exising + 1);
      } else if (newSignedTransactions) {
        handleClose({ updateBatchStatus: false });
        dispatch(
          updateSignedTransaction({
            [sessionId]: {
              status: TransactionBatchStatusesEnum.signed,
              transactions: Object.values(newSignedTransactions).map((tx) =>
                parseTransactionAfterSigning(tx, true)
              )
            }
          })
        );
        reset();
        if (window.location.pathname != callbackRoute) {
          window.location.href = callbackRoute;
        }
      }
    } catch (err) {
      console.error(err, 'sign error');
      reset();
      handleClose({ updateBatchStatus: false });
    }
  };

  const signTx = () => {
    try {
      const signature = tx.transaction.getSignature();
      if (signature) {
        if (!isLast) {
          setCurrentStep((exising) => exising + 1);
        }
      } else {
        // currently code doesn't reach here because getSignature throws error if none is found
        sign();
      }
    } catch {
      // the only way to check if tx has signature is with try catch
      sign();
    }
  };

  const onCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFirst) {
      handleClose();
      window.location.href = callbackRoute;
    } else {
      setCurrentStep((existing) => existing - 1);
    }
  };

  const continueWithoutSigning =
    type && multiTxData && !transactionData.endsWith(multiTxData);

  const onSignClick = () => {
    if (continueWithoutSigning) {
      setCurrentStep((exising) => exising + 1);
    } else {
      signTx();
    }
  };

  let signBtnLabel = 'Sign & Continue';
  signBtnLabel = waitingForDevice ? 'Check your Ledger' : signBtnLabel;
  signBtnLabel = isLast && !waitingForDevice ? 'Sign & Submit' : signBtnLabel;
  signBtnLabel = continueWithoutSigning ? 'Continue' : signBtnLabel;

  const isFirst = currentStep === 0;
  const isVisible = currentStep === index;

  const denominatedAmount = denominate({
    input: isTokenTransaction ? amount : tx.transaction.getValue().toString(),
    denomination: isTokenTransaction ? tokenDenomination : denomination,
    decimals: decimals,
    showLastNonZeroDecimal: false,
    addCommas: true
  });

  const classes = getGeneratedClasses(className, true, {
    formGroup: 'form-group text-left',
    formLabel: 'form-label text-secondary',
    icon: 'text-white',
    contentWrapper:
      'd-flex flex-column justify-content-start flex-md-row justify-content-md-between mb-3',
    tokenWrapper: 'mb-3 mb-md-0',
    tokenLabel: 'text-secondary text-left',
    tokenValue: 'd-flex align-items-center',
    tokenAmountLabel: 'text-secondary text-left',
    tokenAmountValue: 'd-flex align-items-center',
    dataFormGroup: 'form-group text-left',
    errorMessage:
      'text-danger d-flex justify-content-center align-items-center',
    buttonsWrapper: 'd-flex align-items-center justify-content-end mt-spacer',
    cancelButton: 'btn btn-dark text-white flex-even mr-2',
    signButton: 'btn btn-primary flex-even ml-2'
  });

  return isVisible ? (
    <PageState
      icon={error ? faTimes : faHourglass}
      iconClass={classes.icon}
      iconBgClass={error ? 'bg-danger' : 'bg-warning'}
      iconSize='3x'
      className={className}
      title='Confirm on Ledger'
      description={
        <React.Fragment>
          {tx.transaction && (
            <React.Fragment>
              <div className={classes.formGroup} data-testid='transactionTitle'>
                <div className={classes.formLabel}>To: </div>
                {tx.multiTxData
                  ? new Address(receiver).bech32()
                  : tx.transaction.getReceiver().toString()}
              </div>

              <div className={classes.contentWrapper}>
                <div className={classes.tokenWrapper}>
                  <div className={classes.tokenlabel}>Token</div>
                  <div className={classes.tokenValue}>
                    <TokenDetails.Icon token={tokenId || egldLabel} />
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
                {tx.transaction.getData() && (
                  <TransactionData
                    {...{
                      data: tx.transaction.getData().toString(),
                      highlight: multiTxData,
                      isScCall: !tokenId
                    }}
                  />
                )}
              </div>
              {error && <p className={classes.errorMessage}>{error}</p>}
            </React.Fragment>
          )}
        </React.Fragment>
      }
      action={
        <div className={classes.buttonsWrapper}>
          <a
            href='/'
            id='closeButton'
            data-testid='closeButton'
            onClick={onCloseClick}
            className={classes.cancelButton}
          >
            {isFirst ? 'Cancel' : 'Back'}
          </a>

          <button
            type='button'
            className={classes.signButton}
            id='signBtn'
            data-testid='signBtn'
            onClick={onSignClick}
            disabled={waitingForDevice}
          >
            {signBtnLabel}
          </button>
        </div>
      }
    />
  ) : null;
};

export default SignStep;
