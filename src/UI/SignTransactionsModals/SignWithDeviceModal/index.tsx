import React from 'react';
import { useSignTransactionsWithDevice } from 'hooks';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { getGeneratedClasses } from 'UI/utils';
import { SignStep } from './SignStep';
import styles from './sing-with-device-modal.scss';
import globalStyles from 'assets/sass/main.scss';
import classNames from 'classnames';

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
    wrapper: classNames(styles.modalContainer, styles.walletConnect),
    container: classNames(globalStyles.card, globalStyles.container),
    cardBody: globalStyles.cardBody
  });

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
            className,
            error,
            title
          }}
        />
      </div>
    </ModalContainer>
  );
};
