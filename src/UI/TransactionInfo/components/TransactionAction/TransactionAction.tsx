import React, { useMemo } from 'react';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { transactionActionUnwrapper } from 'utils/transactions/transactionInfoHelpers/transactionActionUnwrapper/transactionActionUnwrapper';
import { ActionText } from './components/ActionText';

import styles from './styles.scss';

interface TransactionActionPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionAction = (props: TransactionActionPropsTypes) => {
  const { transaction } = props;

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
          <ActionText {...{ entry, transaction }} />
        </div>
      ))}
    </div>
  );
};
