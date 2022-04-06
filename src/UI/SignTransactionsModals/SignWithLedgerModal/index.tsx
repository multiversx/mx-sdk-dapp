import React from 'react';
import { useSignTransactionsWithLedger } from 'hooks';
import classNames from 'optionalPackages/classnames';
import ReactBootstrap from 'optionalPackages/react-bootstrap';
import { SignModalPropsType } from 'types';
import { getGeneratedClasses, wrapperClassName } from 'utils';
import SignStep from './SignStep';

const SignWithLedgerModal = ({
  handleClose,
  error,
  className = 'ledger-modal',
  verifyReceiverScam = true
}: SignModalPropsType) => {
  const {
    onSignTransaction,
    onNext,
    onPrev,
    allTransactions,
    waitingForDevice,
    onAbort,
    isLastTransaction,
    currentStep,
    callbackRoute,
    currentTransaction
  } = useSignTransactionsWithLedger({
    onCancel: handleClose,
    verifyReceiverScam
  });
  const classes = getGeneratedClasses(className, true, {
    wrapper: 'modal-container wallet-connect',
    container: 'card container',
    cardBody: 'card-body'
  });
  return (
    <ReactBootstrap.Modal
      show={currentTransaction != null}
      backdrop='static'
      onHide={handleClose}
      className={classNames(classes.wrapper, wrapperClassName)}
      animation={false}
      centered
    >
      <div className={classes.container}>
        <div className={classes.cardBody}>
          <SignStep
            {...{
              onSignTransaction,
              onNext,
              onPrev,
              allTransactions,
              waitingForDevice,
              isLastTransaction,
              currentStep,
              callbackRoute,
              currentTransaction,
              handleClose: onAbort,
              className,
              error
            }}
          />
        </div>
      </div>
    </ReactBootstrap.Modal>
  );
};

export default SignWithLedgerModal;
