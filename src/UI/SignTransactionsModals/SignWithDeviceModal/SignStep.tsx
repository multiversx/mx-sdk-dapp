import React, { MouseEvent, useEffect, useState } from 'react';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { SignStepBody, SignStepBodyPropsType } from './components';
import { ProgressHeader } from './components/ProgressHeader';
import { ProgressHeaderPropsType } from './components/ProgressHeader/ProgressHeader.types';
import {
  SignStepPropsType as SignStepType,
  SignStepInnerClassesType
} from './signWithDeviceModal.types';
export { SignStepType, SignStepInnerClassesType };

const SignStepComponent = (props: SignStepType & WithStylesImportType) => {
  const {
    allTransactions,
    className,
    currentStep,
    currentTransaction,
    GuardianScreen,
    error,
    globalStyles,
    handleClose,
    handleSubmit,
    isLastTransaction,
    onPrev,
    onSignTransaction,
    signStepInnerClasses,
    styles,
    title,
    waitingForDevice
  } = props;

  const [showGuardianScreen, setShowGuardianScreen] = useState(false);

  // a unique mapping between nonce + data and step to prevent signing same transaction twice
  const [nonceDataStepMap, setNonceDataStepMap] = useState<
    Record<number, number | undefined>
  >({});

  if (!currentTransaction) {
    return null;
  }

  const currentNonce = currentTransaction.transaction.getNonce().valueOf();
  const currentNonceData = `${currentNonce.toString()}_${
    currentTransaction.transactionTokenInfo.multiTxData
  }_${currentTransaction.transactionIndex}`;

  useEffect(() => {
    const isCurrentNonceRegistered =
      Object.keys(nonceDataStepMap).includes(currentNonceData);
    const isCurrentStepRegistered =
      Object.values(nonceDataStepMap).includes(currentStep);

    if (isCurrentNonceRegistered || isCurrentStepRegistered) {
      return;
    }

    setNonceDataStepMap((existing) => {
      return {
        ...existing,
        [currentNonceData]: currentStep
      };
    });
  }, [currentNonceData, currentStep]);

  const transactionData = currentTransaction.transaction.getData().toString();

  const { buttonsWrapperClassName, buttonClassName } =
    signStepInnerClasses || {};

  const { type, multiTxData } = currentTransaction.transactionTokenInfo;

  const isFirst = currentStep === 0;

  const onCloseClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (isFirst) {
      handleClose();
    } else {
      onPrev();
    }
  };

  const signLastTransaction = isLastTransaction && !waitingForDevice;

  const onSubmit = async () => {
    await onSignTransaction();

    if (signLastTransaction && GuardianScreen) {
      return setShowGuardianScreen(true);
    }

    if (signLastTransaction && handleSubmit) {
      handleSubmit();
    }
  };

  const continueWithoutSigning =
    type && multiTxData && !transactionData.endsWith(multiTxData);

  let signBtnLabel = 'Sign & Continue';
  signBtnLabel = waitingForDevice ? 'Check your Ledger' : signBtnLabel;
  signBtnLabel = signLastTransaction ? 'Sign & Submit' : signBtnLabel;
  signBtnLabel = continueWithoutSigning ? 'Continue' : signBtnLabel;

  const signStepBodyProps: SignStepBodyPropsType = {
    currentTransaction,
    error,
    allTransactions,
    currentStep,
    isGuarded: Boolean(GuardianScreen),
    signStepInnerClasses
  };

  const onGuardianScreenPrev = () => {
    setShowGuardianScreen(false);
  };

  const signTransactionNavigationTitle =
    allTransactions.length > 1 ? 'Sign Transactions' : 'Sign Transaction';

  const confirmTransactionNavigationTitle =
    allTransactions.length > 1 ? 'Confirm Transactions' : 'Confirm Transaction';

  const defaultSignTitle =
    allTransactions.length > 1
      ? `Signing Transaction ${currentStep + 1} of ${allTransactions.length}`
      : title || 'Sign Transaction';

  const isGuardianScreenVisible = GuardianScreen && showGuardianScreen;
  const signFlowTitle = isGuardianScreenVisible
    ? 'Verify Guardian'
    : defaultSignTitle;

  const steps: ProgressHeaderPropsType['steps'] = [
    {
      title: signTransactionNavigationTitle,
      active: !showGuardianScreen
    },
    {
      title: confirmTransactionNavigationTitle,
      active: showGuardianScreen,
      hidden: !signStepBodyProps.isGuarded
    }
  ];

  const isSigningReady = nonceDataStepMap[currentNonceData] === currentStep;

  return (
    <div
      className={classNames(
        styles?.modalLayoutContent,
        styles?.spaced,
        className,
        { [styles?.guarded ?? '']: signStepBodyProps.isGuarded }
      )}
    >
      {isGuardianScreenVisible && (
        <div
          onClick={onGuardianScreenPrev}
          className={classNames(styles?.modalLayoutHeadingIcon, styles?.back)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      )}

      <div
        onClick={onCloseClick}
        className={classNames(styles?.modalLayoutHeadingIcon, styles?.close)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>

      {signStepBodyProps.isGuarded && (
        <ProgressHeader steps={steps} type='detailed' size='small' />
      )}

      <div
        className={styles?.title}
        data-testid={DataTestIdsEnum.signStepTitle}
      >
        {signFlowTitle || 'Confirm on Ledger'}
      </div>

      {isGuardianScreenVisible ? (
        <GuardianScreen
          {...props}
          onPrev={onGuardianScreenPrev}
          guardianFormDescription='Enter the code from your Authenticator app to verify this transaction.'
        />
      ) : (
        <>
          <SignStepBody {...signStepBodyProps} />

          <div
            className={classNames(styles?.signButtons, buttonsWrapperClassName)}
          >
            <button
              id='closeButton'
              data-testid={DataTestIdsEnum.closeButton}
              onClick={onCloseClick}
              className={classNames(styles?.signButtonCancel, buttonClassName)}
            >
              {currentStep === 0 ? 'Cancel' : 'Back'}
            </button>

            <button
              type='button'
              className={classNames(
                globalStyles?.btnPrimary,
                styles?.signButtonSubmit,
                buttonClassName
              )}
              id='signBtn'
              data-testid={DataTestIdsEnum.signBtn}
              onClick={onSubmit}
              disabled={waitingForDevice || !isSigningReady}
            >
              {isSigningReady ? signBtnLabel : 'Loading...'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export const SignStep = withStyles(SignStepComponent, {
  ssrStyles: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/signWithDeviceModalStyles.scss'
    ),
  clientStyles: () =>
    require('UI/SignTransactionsModals/SignWithDeviceModal/signWithDeviceModalStyles.scss')
      .default
});
