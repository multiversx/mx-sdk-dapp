import React, { ReactNode } from 'react';

import { Progress } from 'UI/Progress';

import { WithClassnameType } from '../../../types';
import { TransactionToastContent, TransactionToastWrapper } from './components';
import { useTransactionToast } from './hooks/useTransactionToast';
import styles from './transactionToast.styles.scss';
import {
  TransactionToastCustomizationProps,
  TransactionToastDefaultProps
} from './transactionToast.type';

export interface TransactionToastPropsType
  extends TransactionToastDefaultProps,
    WithClassnameType {
  title?: string | ReactNode;
  children?: ReactNode;
  customization?: TransactionToastCustomizationProps;
}

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
  customization
}: TransactionToastPropsType) => {
  const { progress, isPending, isTimedOut, toastDataState, handleDeleteToast } =
    useTransactionToast({
      toastId,
      transactions,
      status,
      lifetimeAfterSuccess,
      startTimestamp,
      endTimeProgress,
      onDelete
    });

  const ProgressComponent = customization?.Progress ?? Progress;
  const TransactionToastContentComponent =
    customization?.TransactionToastContent ?? TransactionToastContent;

  return (
    <TransactionToastWrapper className={className}>
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
