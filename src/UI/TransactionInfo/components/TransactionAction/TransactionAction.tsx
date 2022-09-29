import React, { useMemo } from 'react';
import classNames from 'classnames';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { transactionActionUnwrapper } from 'utils/transactions/transactionInfoHelpers/transactionActionUnwrapper/transactionActionUnwrapper';
import { ActionText } from './components/ActionText';

import styles from './transactionAction.module.scss';
import globalStyles from 'assets/sass/main.scss';

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
    <div
      data-testid='transactionAction'
      className={classNames(
        styles.transactionAction,
        globalStyles.dFlex,
        globalStyles.flexColumn,
        globalStyles.flexLgRow,
        globalStyles.flexLgWrap
      )}
    >
      {unwrappedResult.map((entry, i) => (
        <div key={JSON.stringify(unwrappedResult) + i}>
          <ActionText {...{ entry, transaction }} />
        </div>
      ))}
    </div>
  );
};
