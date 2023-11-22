import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetAccount, useSignTransactionsWithDevice } from 'hooks';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { SignStep } from './SignStep';

const SignWithDeviceModalComponent = ({
  handleClose,
  error,
  className = 'dapp-device-modal',
  verifyReceiverScam = true,
  GuardianScreen,
  title = 'Confirm transaction',
  signStepInnerClasses,
  globalStyles,
  styles
}: SignModalPropsType & WithStylesImportType) => {
  const { address } = useGetAccount();

  const {
    onSignTransaction,
    onPrev,
    allTransactions,
    waitingForDevice,
    onAbort,
    isLastTransaction,
    signedTransactions,
    setSignedTransactions,
    currentStep,
    callbackRoute,
    currentTransaction
  } = useSignTransactionsWithDevice({
    onCancel: handleClose,
    verifyReceiverScam,
    hasGuardianScreen: Boolean(GuardianScreen)
  });
  const classes = {
    wrapper: classNames(
      styles?.modalContainer,
      styles?.walletConnect,
      className
    ),
    container: classNames(globalStyles?.card, globalStyles?.container),
    cardBody: globalStyles?.cardBody
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
          address={address}
          onSignTransaction={onSignTransaction}
          allTransactions={allTransactions}
          onPrev={onPrev}
          GuardianScreen={GuardianScreen}
          signedTransactions={signedTransactions}
          setSignedTransactions={setSignedTransactions}
          waitingForDevice={waitingForDevice}
          currentStep={currentStep}
          isLastTransaction={isLastTransaction}
          callbackRoute={callbackRoute}
          currentTransaction={currentTransaction}
          handleClose={onAbort}
          error={error}
          title={title}
          signStepInnerClasses={signStepInnerClasses}
        />
      </div>
    </ModalContainer>
  );
};

export const SignWithDeviceModal = withStyles(SignWithDeviceModalComponent, {
  local: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/signWithDeviceModalStyles.scss'
    )
});
