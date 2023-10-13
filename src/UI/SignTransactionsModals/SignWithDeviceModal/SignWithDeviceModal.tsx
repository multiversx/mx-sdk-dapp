import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { useGetAccount, useSignTransactionsWithDevice } from 'hooks';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { SignStep } from './SignStep';
import styles from './signWithDeviceModalStyles.scss';

export const SignWithDeviceModal = ({
  handleClose,
  error,
  className = 'dapp-device-modal',
  verifyReceiverScam = true,
  GuardianScreen,
  title = 'Confirm transaction',
  signStepInnerClasses
}: SignModalPropsType) => {
  const { address } = useGetAccount();

  const {
    allTransactions,
    callbackRoute,
    currentStep,
    currentTransaction,
    isLastTransaction,
    isSigning,
    onAbort,
    onPrev,
    onSignTransaction,
    setSignedTransactions,
    signedTransactions,
    waitingForDevice
  } = useSignTransactionsWithDevice({
    onCancel: handleClose,
    verifyReceiverScam,
    hasGuardianScreen: Boolean(GuardianScreen)
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
          GuardianScreen={GuardianScreen}
          address={address}
          allTransactions={allTransactions}
          callbackRoute={callbackRoute}
          currentStep={currentStep}
          currentTransaction={currentTransaction}
          error={error}
          handleClose={onAbort}
          isLastTransaction={isLastTransaction}
          isSigning={isSigning}
          onPrev={onPrev}
          onSignTransaction={onSignTransaction}
          setSignedTransactions={setSignedTransactions}
          signStepInnerClasses={signStepInnerClasses}
          signedTransactions={signedTransactions}
          title={title}
          waitingForDevice={waitingForDevice}
        />
      </div>
    </ModalContainer>
  );
};
