import React, { ReactNode, useMemo } from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetAccount } from 'hooks/account/useGetAccount';
import {
  SignedTransactionType,
  TransactionServerStatusesEnum
} from 'types/index';
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

  const { address } = useGetAccount();

  const processedTransactionsStatus = useMemo(() => {
    const processedTransactions = transactions.filter(
      (tx) =>
        !isServerTransactionPending(TransactionServerStatusesEnum[tx?.status])
    ).length;

    const totalTransactions = transactions.length;

    if (totalTransactions === 1 && processedTransactions === 1) {
      return isServerTransactionPending(
        TransactionServerStatusesEnum[transactions[0].status]
      )
        ? 'Processing transaction'
        : 'Transaction processed';
    }

    return `${processedTransactions} / ${totalTransactions} transactions processed`;
  }, [transactions]);

  const hideProcessedTransactionsStatus =
    transactions.length === 1 && transactions[0].sender !== address;

  return (
    <>
      {title && <div className={styles?.title}>{title}</div>}

      {!hideProcessedTransactionsStatus && (
        <div className={styles?.status}>{processedTransactionsStatus}</div>
      )}

      {transactions.map(({ hash, status }) => {
        const transactionDetailsBodyProps: TransactionDetailsBodyPropsType = {
          className,
          hash,
          status: TransactionServerStatusesEnum[status],
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
  ssrStyles: () =>
    import('UI/TransactionDetails/transactionDetails.styles.scss'),
  clientStyles: () =>
    require('UI/TransactionDetails/transactionDetails.styles.scss').default
});
