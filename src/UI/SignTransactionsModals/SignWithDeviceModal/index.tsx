import React from 'react';
import { useSignTransactionsWithDevice } from 'hooks';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { SignStep } from './SignStep';
import styles from './sign-with-device-modal.scss';
import globalStyles from 'assets/sass/main.scss';
import classNames from 'classnames';

export const SignWithDeviceModal = ({
  handleClose,
  error,
  className = 'dapp-device-modal',
  modalContentClassName,
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
  const classes = {
    wrapper: classNames(styles.modalContainer, styles.walletConnect, className),
    container: classNames(globalStyles.card, globalStyles.container),
    cardBody: globalStyles.cardBody
  };

  return (
    <ModalContainer
      onClose={handleClose}
      modalConfig={{
        modalDialogClassName: classes.wrapper
      }}
      visible={currentTransaction != null}
    >
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
            modalContentClassName,
            error,
            title
          }}
        />
      </div>
    </ModalContainer>
  );
};
