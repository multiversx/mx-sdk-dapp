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
import { WithClassname } from 'UI/types/with-classname';
import styles from './styles.scss';

export type TransactionToastPropsType = {
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  customization?: TransactionToastCustomizationProps;
} & TransactionToastDefaultProps &
  WithClassname;

export const TransactionToast = ({
  toastId,
  title = '',
  className = 'dapp-transaction-toast',
  onDelete,
  startTimestamp,
  endTimeProgress,
  lifetimeAfterSuccess,
  status,
  transactions,
  customization = {
    TransactionToastContent,
    Progress
  }
}: TransactionToastPropsType) => {
  const {
    progress,
    isPending,
    isTimedOut,
    toastDataState,
    handleDeleteToast
  } = useTransactionToast({
    toastId,
    transactions,
    status,
    lifetimeAfterSuccess,
    startTimestamp,
    endTimeProgress,
    onDelete
  });

  const ProgressComponent = customization.Progress!;
  const TransactionToastContentComponent = customization.TransactionToastContent!;

  return (
    <TransactionToastWrapper
      className={classNames(
        wrapperStyles.toasts,
        wrapperStyles.toastWrapper,
        className
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
          style={styles}
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
