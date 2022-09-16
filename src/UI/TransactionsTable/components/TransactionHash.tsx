import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { Trim } from 'UI/Trim/Trim';
import { TransactionIcon } from './TransactionIcon';

type TransactionHashColumnProps = {
  transaction: InterpretedTransactionType;
};

export const TransactionHash = ({
  transaction
}: TransactionHashColumnProps) => {
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
        <Trim text={transaction.txHash} dataTestId='transactionHash' />
      </ExplorerLink>
    </div>
  );
};
