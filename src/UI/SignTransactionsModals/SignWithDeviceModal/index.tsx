import React, { useEffect } from 'react';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSignTransactionsWithDevice } from 'hooks';
import { SignModalPropsType } from 'types';
import useDappModal from 'UI/DappModal/hooks/useDappModal';
import { getGeneratedClasses } from 'utils';
import ModalContainer from 'UI/ModalContainer/ModalContainer';
import SignStep from './SignStep';
import { getGeneratedClasses } from 'UI/utils';
import { SignStep } from './SignStep';

export const SignWithDeviceModal = ({
  handleClose,
  error,
  className = 'device-modal',
  verifyReceiverScam = true,
  title = 'Confirm transaction'
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
  } = useSignTransactionsWithDevice({
    onCancel: handleClose,
    verifyReceiverScam
  });
  const classes = getGeneratedClasses(className, true, {
    wrapper: 'modal-container wallet-connect',
    container: 'card container',
    cardBody: 'card-body'
  });
  const { handleShowModal, handleHideModal } = useDappModal();

  useEffect(() => {
    if (currentTransaction != null) {
      handleShowModal();
    } else {
      handleHideModal();
    }
  }, [currentTransaction]);

  return (
    <ModalContainer
      onClose={handleClose}
      modalConfig={{
        modalDialogClassName: classes.wrapper
      }}
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
              error,
              title
            }}
          />
        </div>
      </div>
    </ModalContainer>
  );
};
