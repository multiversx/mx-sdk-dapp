import React, { useMemo, ReactNode } from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { SignedTransactionType } from 'types/index';
import { isServerTransactionPending } from 'utils/transactions/transactionStateByStatus';
import {
  TransactionDetailsBody,
  TransactionDetailsBodyPropsType
} from './components';

export interface TransactionDetailsType {
  title?: ReactNode;
  isTimedOut?: boolean;
  transactions?: SignedTransactionType[];
  className?: string;
}

const TransactionDetailsComponent = ({
  title,
  transactions,
  isTimedOut = false,
  className = 'dapp-transaction-details',
  styles
}: TransactionDetailsType & WithStylesImportType) => {
  if (transactions == null) {
    return null;
  }

  const processedTransactionsStatus = useMemo(() => {
    const processedTransactions = transactions.filter(
      (tx) => !isServerTransactionPending(tx?.status)
    ).length;
    const totalTransactions = transactions.length;

    if (totalTransactions === 1 && processedTransactions === 1) {
      return isServerTransactionPending(transactions[0].status)
        ? 'Processing transaction'
        : 'Transaction processed';
    }

    return `${processedTransactions} / ${totalTransactions} transactions processed`;
  }, [transactions]);

  return (
    <>
      {title && <div className={styles?.title}>{title}</div>}

      <div className={styles?.status}>{processedTransactionsStatus}</div>

      {transactions.map(({ hash, status }) => {
        const transactionDetailsBodyProps: TransactionDetailsBodyPropsType = {
          className,
          hash,
          status,
          isTimedOut
        };

        return (
          <TransactionDetailsBody {...transactionDetailsBodyProps} key={hash} />
        );
      })}
    </>
  );
};

export const TransactionDetails = withStyles(TransactionDetailsComponent, {
  local: () => import('UI/TransactionDetails/transactionDetails.styles.scss')
});
