import classNames from 'classnames';
import globalStyles from '../../assets/sass/main.scss';
import { TransactionIcon } from './TransactionIcon';
import { ExplorerLink } from '../ExplorerLink';
import { Trim } from '../Trim';
import React from 'react';
import { ExtendedTransactionType } from 'components/TransactionsInterpreter/helpers/types';

type TransactionHashColumnProps = {
  transaction: ExtendedTransactionType;
};

export const TransactionHash: React.FC<TransactionHashColumnProps> = ({
  transaction
}) => {
  const transactionHashLink = `/transactions/${
    transaction.originalTxHash
      ? `${transaction.originalTxHash}#${transaction.txHash}`
      : transaction.txHash
  }`;

  return (
    <div
      className={classNames(globalStyles.dFlex, globalStyles.alignItemsCenter)}
    >
      <TransactionIcon transaction={transaction} />
      <ExplorerLink
        page={transactionHashLink}
        data-testid='transactionLink'
        className={globalStyles.trimWrapper}
      >
        <Trim text={transaction.txHash} />
      </ExplorerLink>
    </div>
  );
};
