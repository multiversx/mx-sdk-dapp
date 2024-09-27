import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetAccount, useSignTransactionsWithDevice } from 'hooks';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { Loader } from '../../Loader';
import { SignStep } from './SignStep';

console.log('\x1b[42m%s\x1b[0m', 'Link created');

const SignWithDeviceModalComponent = ({
  handleClose,
  handleSubmit,
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

  const isLoading = currentTransaction == null;

  const classes = {
    wrapper: classNames(
      styles?.modalContainer,
      styles?.walletConnect,
      className
    ),
    container: classNames(globalStyles?.card, globalStyles?.container),
    cardBody: globalStyles?.cardBody
  };

  console.log('IS IT LOADING? ', { isLoading });

  return (
    <ModalContainer
      onClose={handleClose}
      modalConfig={{
        modalDialogClassName: classes.wrapper
      }}
      visible
    >
      <div className={classes.cardBody}>
        {isLoading ? (
          <Loader />
        ) : (
          <SignStep
            address={address}
            allTransactions={allTransactions}
            callbackRoute={callbackRoute}
            currentStep={currentStep}
            currentTransaction={currentTransaction}
            error={error}
            GuardianScreen={GuardianScreen}
            handleClose={onAbort}
            handleSubmit={handleSubmit}
            isLastTransaction={isLastTransaction}
            onPrev={onPrev}
            onSignTransaction={onSignTransaction}
            setSignedTransactions={setSignedTransactions}
            signStepInnerClasses={signStepInnerClasses}
            signedTransactions={signedTransactions}
            title={title}
            waitingForDevice={waitingForDevice}
          />
        )}
      </div>
    </ModalContainer>
  );
};

export const SignWithDeviceModal = withStyles(SignWithDeviceModalComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/signWithDeviceModalStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/signWithDeviceModalStyles.scss')
      .default
});
