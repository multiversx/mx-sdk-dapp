import { SignedTransactionType, TransactionServerStatusesEnum } from 'types';

export const getTransactionsStatus = ({
  transactions,
  hasUnrelatedTransactions
}: {
  transactions: SignedTransactionType[];
  hasUnrelatedTransactions?: boolean;
}) => {
  const allTxFailed = transactions.every(
    ({ status }) => status === TransactionServerStatusesEnum.fail
  );

  const someTxFailed = transactions.some(
    ({ status }) => status === TransactionServerStatusesEnum.fail
  );

  const isPending = transactions.some(
    ({ status }) => status === TransactionServerStatusesEnum.pending
  );

  const isSuccessful = transactions.every(
    ({ status }) => status === TransactionServerStatusesEnum.success
  );

  const isIncompleteFailed =
    hasUnrelatedTransactions &&
    Boolean(!isPending && !allTxFailed && someTxFailed);

  const isFailed = hasUnrelatedTransactions
    ? isIncompleteFailed
      ? false
      : allTxFailed
    : someTxFailed;

  return { isPending, isSuccessful, isFailed, isIncompleteFailed };
};
