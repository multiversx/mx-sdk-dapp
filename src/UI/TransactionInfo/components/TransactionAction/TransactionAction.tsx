import React, { useMemo } from 'react';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithTransactionType } from 'UI/types';
import { transactionActionUnwrapper } from 'utils/transactions/transactionInfoHelpers/transactionActionUnwrapper/transactionActionUnwrapper';
import { ActionText } from './components/ActionText';

export const TransactionActionComponent = ({
  transaction,
  styles
}: WithTransactionType & WithStylesImportType) => {
  const unwrappedResult: ReturnType<typeof transactionActionUnwrapper> =
    useMemo(() => {
      if (transaction.action) {
        return transactionActionUnwrapper(transaction.action);
      }

      return [];
    }, [transaction.action]);

  return (
    <div
      data-testid={DataTestIdsEnum.transactionAction}
      className={styles?.action}
    >
      {unwrappedResult.map((entry, i) => (
        <div
          key={JSON.stringify(unwrappedResult) + i}
          className={styles?.result}
        >
          <ActionText transaction={transaction} entry={entry} />
        </div>
      ))}
    </div>
  );
};

export const TransactionAction = withStyles(TransactionActionComponent, {
  ssrStyles: () =>
    import('UI/TransactionInfo/components/TransactionAction/styles.scss'),
  clientStyles: () =>
    require('UI/TransactionInfo/components/TransactionAction/styles.scss')
      .default
});
