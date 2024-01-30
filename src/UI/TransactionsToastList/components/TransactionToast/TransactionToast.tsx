import React, { ReactNode } from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { Progress } from 'UI/Progress';
import { WithClassnameType } from '../../../types';
import { TransactionToastContent, TransactionToastWrapper } from './components';
import { useTransactionToast } from './hooks/useTransactionToast';
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

const TransactionToastComponent = ({
  toastId,
  title = '',
  className = 'dapp-transaction-toast',
  onDelete,
  startTimestamp,
  endTimeProgress,
  lifetimeAfterSuccess,
  status,
  transactions,
  customization,
  styles
}: TransactionToastPropsType & WithStylesImportType) => {
  const {
    isCrossShard,
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

  const ProgressComponent = customization?.Progress ?? Progress;
  const TransactionToastContentComponent =
    customization?.TransactionToastContent ?? TransactionToastContent;

  return (
    <TransactionToastWrapper className={className} id={`toast-${toastId}`}>
      <ProgressComponent
        key={toastId}
        id={toastId}
        progress={progress}
        expiresIn={lifetimeAfterSuccess}
        done={!isPending || isTimedOut}
        isCrossShard={isCrossShard}
      >
        <TransactionToastContentComponent
          style={styles ?? {}}
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

export const TransactionToast = withStyles(TransactionToastComponent, {
  ssrStyles: () =>
    import(
      'UI/TransactionsToastList/components/TransactionToast/transactionToast.styles.scss'
    ),
  clientStyles: () =>
    require('UI/TransactionsToastList/components/TransactionToast/transactionToast.styles.scss')
      .default
});
