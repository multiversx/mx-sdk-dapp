import React, { useMemo } from 'react';

import { WithTransactionType } from 'UI/types';
import { transactionActionUnwrapper } from 'utils/transactions/transactionInfoHelpers/transactionActionUnwrapper/transactionActionUnwrapper';

import { ActionText } from './components/ActionText';

import styles from './styles.scss';

export const TransactionAction = ({ transaction }: WithTransactionType) => {
  const unwrappedResult: ReturnType<typeof transactionActionUnwrapper> = useMemo(() => {
    if (transaction.action) {
      return transactionActionUnwrapper(transaction.action);
    }

    return [];
  }, [transaction.action]);

  return (
    <div data-testid='transactionAction' className={styles.action}>
      {unwrappedResult.map((entry, i) => (
        <div
          key={JSON.stringify(unwrappedResult) + i}
          className={styles.result}
        >
          <ActionText transaction={transaction} entry={entry} />
        </div>
      ))}
    </div>
  );
};
