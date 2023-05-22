import React, { MouseEvent, useState } from 'react';

import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { SignStepBody, SignStepBodyPropsType } from './components';
import { ProgressHeader } from './components/ProgressHeader';
import { ProgressHeaderPropsType } from './components/ProgressHeader/ProgressHeader.types';
import {
  SignStepPropsType as SignStepType,
  SignStepInnerClassesType
} from './signWithDeviceModal.types';

import styles from './signWithDeviceModalStyles.scss';

export { SignStepType, SignStepInnerClassesType };

export const SignStep = (props: SignStepType) => {
  const {
    onSignTransaction,
    handleClose,
    onPrev,
    GuardianScreen,
    title,
    waitingForDevice,
    currentTransaction,
    error,
    allTransactions,
    isLastTransaction,
    currentStep,
    className,
    signStepInnerClasses
  } = props;

  const [showGuardianScreen, setShowGuardianScreen] = useState(false);

  if (!currentTransaction) {
    return null;
  }

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

  const onSubmit = () => {
    onSignTransaction();
    if (signLastTransaction && GuardianScreen) {
      return setShowGuardianScreen(true);
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
    waitingForDevice,
    signBtnLabel,
    signStepInnerClasses,
    buttonsWrapperClassName,
    buttonClassName,
    onCloseClick,
    onSubmit
  };

  const onGuardianScreenPrev = () => {
    setShowGuardianScreen(false);
  };

  const steps: ProgressHeaderPropsType['steps'] = [
    {
      title: title || 'Sign Transaction',
      active: !showGuardianScreen
    },
    {
      title: 'Confirm Transaction',
      active: showGuardianScreen,
      hidden: !signStepBodyProps.isGuarded
    }
  ];

  const currentProgressStep = steps.find((step) => step.active);

  return (
    <div
      className={classNames(
        styles.modalLayoutContent,
        styles.spaced,
        className,
        { [styles.guarded]: signStepBodyProps.isGuarded }
      )}
    >
      {showGuardianScreen && (
        <div
          onClick={onGuardianScreenPrev}
          className={classNames(styles.modalLayoutHeadingIcon, styles.back)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      )}

      <div
        onClick={onCloseClick}
        className={classNames(styles.modalLayoutHeadingIcon, styles.close)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>

      {signStepBodyProps.isGuarded && (
        <ProgressHeader steps={steps} type='detailed' size='small' />
      )}

      <div className={styles.title}>
        {currentProgressStep?.title || 'Confirm on Ledger'}
      </div>

      {GuardianScreen && showGuardianScreen ? (
        <GuardianScreen
          {...props}
          onPrev={onGuardianScreenPrev}
          guardianFormDescription='Enter the code from your Authenticator app to verify this transaction.'
        />
      ) : (
        <SignStepBody {...signStepBodyProps} />
      )}
    </div>
  );
};
