import React from 'react';
import { useSignTransactionsWithLedger } from 'hooks';
import ReactBootstrap from 'optionalPackages/react-bootstrap';
import { getGeneratedClasses } from 'utils';
import SignStep from './SignStep';

export interface SignModalType {
  handleClose: () => void;
  error: string | null;
  className?: string;
}

const SignWithLedgerModal = ({
  handleClose,
  error,
  className = 'ledger-modal'
}: SignModalType) => {
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
  } = useSignTransactionsWithLedger({ onCancel: handleClose });
  const classes = getGeneratedClasses(className, true, {
    wrapper: 'modal-container wallet-connect',
    container: 'card container',
    cardBody: 'card-body'
  });
  console.log(error);
  return (
    <ReactBootstrap.Modal
      show={currentTransaction != null}
      backdrop='static'
      onHide={handleClose}
      className={classes.wrapper}
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
