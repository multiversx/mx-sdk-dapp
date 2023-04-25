import React, { MouseEvent, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { PageState } from 'UI/PageState';

import { SignStepBody, SignStepBodyPropsType } from './components';
import { useSignStepsClasses } from './hooks/useSignStepsClasses';
import {
  SignStepPropsType as SignStepType,
  SignStepInnerClassesType
} from './signWithDeviceModal.types';

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

  const scamReport = currentTransaction.receiverScamInfo;
  const classes = useSignStepsClasses(scamReport);

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

  if (GuardianScreen && showGuardianScreen) {
    return <GuardianScreen {...props} onPrev={onGuardianScreenPrev} />;
  }

  return (
    <PageState
      icon={error ? faTimes : null}
      iconClass={classes.icon}
      iconBgClass={error ? globalStyles.bgDanger : globalStyles.bgWarning}
      iconSize='3x'
      className={className}
      title={title || 'Confirm on Ledger'}
      description={<SignStepBody {...signStepBodyProps} />}
      action={
        <div
          className={classNames(
            classes.buttonsWrapper,
            buttonsWrapperClassName
          )}
        >
          <button
            id='closeButton'
            data-testid='closeButton'
            onClick={onCloseClick}
            className={classNames(classes.cancelButton, buttonClassName)}
          >
            {isFirst ? 'Cancel' : 'Back'}
          </button>

          <button
            type='button'
            className={classNames(classes.signButton, buttonClassName)}
            id='signBtn'
            data-testid='signBtn'
            onClick={onSubmit}
            disabled={waitingForDevice}
          >
            {signBtnLabel}
          </button>
        </div>
      }
    />
  );
};
