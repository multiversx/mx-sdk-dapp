import React from 'react';
import classNames from 'classnames';
import { Progress } from 'UI/Progress';
import wrapperStyles from 'UI/TransactionsToastList/styles.scss';
import { TransactionToastContent } from './TransactionToastContent';
import { TransactionToastWrapper } from './TransactionToastWrapper';
import {
  TransactionToastCustomizationProps,
  TransactionToastDefaultProps
} from './types';
import { useTransactionToast } from './hooks/useTransactionToast';

export type TransactionToastPropsType = {
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  customization?: TransactionToastCustomizationProps;
} & TransactionToastDefaultProps;

export const TransactionToast = ({
  toastId,
  title = '',
  shouldRenderDefaultCss = true,
  className = 'transaction-toast',
  onDelete,
  startTimestamp,
  endTimeProgress,
  lifetimeAfterSuccess,
  status,
  transactions,
  customization
}: TransactionToastPropsType) => {
  const {
    progress,
    isPending,
    isTimedOut,
    toastDataState,
    style,
    handleDeleteToast
  } = useTransactionToast({
    toastId,
    transactions,
    status,
    lifetimeAfterSuccess,
    shouldRenderDefaultCss,
    className,
    startTimestamp,
    endTimeProgress,
    onDelete
  });

  const ProgressComponent = customization?.Progress ?? Progress;
  const TransactionToastContentComponent =
    customization?.TransactionToastContent ?? TransactionToastContent;

  return (
    <TransactionToastWrapper
      className={classNames(
        className,
        wrapperStyles.toasts,
        wrapperStyles.toastWrapper
      )}
    >
      <ProgressComponent
        key={toastId}
        id={toastId}
        progress={progress}
        expiresIn={lifetimeAfterSuccess}
        done={!isPending || isTimedOut}
      >
        <TransactionToastContentComponent
          style={style}
          toastDataState={toastDataState}
          transactions={transactions ?? []}
          toastTitle={title}
          isTimedOut={isTimedOut}
          showCloseButton={!isPending}
          onDeleteToast={handleDeleteToast}
          customElements={customization?.TransactionToastContentCustomElements}
        />
      </ProgressComponent>
    </TransactionToastWrapper>
  );
};
