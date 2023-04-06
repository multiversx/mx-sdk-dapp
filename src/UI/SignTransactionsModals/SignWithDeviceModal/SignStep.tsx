import React, { MouseEvent, ReactNode, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { useGetAccount } from 'hooks';
import type {
  ActiveLedgerTransactionType,
  MultiSignTransactionType
} from 'types';
import { PageState } from 'UI/PageState';
import type { WithClassnameType } from '../../types';

import {
  GuardianScreen,
  SignStepBody,
  SignStepBodyPropsType
} from './components';
import { useSignStepsClasses } from './hooks/useSignStepsClasses';

export interface SignStepInnerClassesType {
  buttonsWrapperClassName?: string;
  inputGroupClassName?: string;
  inputLabelClassName?: string;
  inputValueClassName?: string;
  errorClassName?: string;
  scamAlertClassName?: string;
  buttonClassName?: string;
  progressClassName?: string;
}

// TODO: Rename to "SignStepPropsType" when sdk-dapp@3.0.0
export interface SignStepType extends WithClassnameType {
  onSignTransaction: () => void;
  onPrev: () => void;
  onSetCode: (code: string) => void;
  codeError?: string;
  handleClose: () => void;
  waitingForDevice: boolean;
  error: string | null;
  callbackRoute?: string;
  title?: ReactNode;
  currentStep: number;
  currentTransaction: ActiveLedgerTransactionType | null;
  allTransactions: MultiSignTransactionType[];
  isLastTransaction: boolean;
  signStepInnerClasses?: SignStepInnerClassesType;
}

export const SignStep = ({
  onSignTransaction,
  handleClose,
  onPrev,
  onSetCode,
  codeError,
  title,
  waitingForDevice,
  currentTransaction,
  error,
  allTransactions,
  isLastTransaction,
  currentStep,
  className,
  signStepInnerClasses
}: SignStepType) => {
  const { isGuarded } = useGetAccount();
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
      onSetCode('');
      onPrev();
    }
  };

  const signLastTransaction = isLastTransaction && !waitingForDevice;

  const onSubmit = () => {
    onSignTransaction();
    if (signLastTransaction && isGuarded) {
      return setShowGuardianScreen(true);
    }
  };

  const continueWithoutSigning =
    type && multiTxData && !transactionData.endsWith(multiTxData);

  let signBtnLabel = 'Sign & Continue';
  signBtnLabel = waitingForDevice ? 'Check your Ledger' : signBtnLabel;
  signBtnLabel = signLastTransaction ? 'Sign & Submit' : signBtnLabel;
  signBtnLabel =
    signLastTransaction && isGuarded ? 'Sign & Continue' : signBtnLabel;

  signBtnLabel = continueWithoutSigning ? 'Continue' : signBtnLabel;

  const scamReport = currentTransaction.receiverScamInfo;
  const classes = useSignStepsClasses(scamReport);

  const signStepBodyProps: SignStepBodyPropsType = {
    currentTransaction,
    error,
    allTransactions,
    currentStep,
    signStepInnerClasses
  };

  return (
    <PageState
      icon={error ? faTimes : null}
      iconClass={classes.icon}
      iconBgClass={error ? globalStyles.bgDanger : globalStyles.bgWarning}
      iconSize='3x'
      className={className}
      title={title || 'Confirm on Ledger'}
      description={
        showGuardianScreen ? (
          <GuardianScreen onSetCode={onSetCode} codeError={codeError} />
        ) : (
          <SignStepBody {...signStepBodyProps} />
        )
      }
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
