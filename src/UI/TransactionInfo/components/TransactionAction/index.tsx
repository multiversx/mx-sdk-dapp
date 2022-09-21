import React from 'react';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { transactionActionUnwrapper } from 'utils/transactions/transactionInfoHelpers/transactionActionUnwrapper/transactionActionUnwrapper';
import { ActionText } from './components/ActionText';
import './transactionAction.scss';

export const TransactionAction = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  const unwrappedResult: ReturnType<typeof transactionActionUnwrapper> = React.useMemo(() => {
    if (transaction.action) {
      const result = transactionActionUnwrapper(transaction.action);
      return result;
    }
    return [];
  }, [transaction.action]);

  return (
    <div className='transaction-action d-flex flex-column flex-lg-row flex-lg-wrap'>
      {unwrappedResult.map((entry, i) => {
        return (
          <div
            key={JSON.stringify(unwrappedResult) + i}
            className='action-step'
          >
            <ActionText entry={entry} transaction={transaction} />
          </div>
        );
      })}
    </div>
  );
};
