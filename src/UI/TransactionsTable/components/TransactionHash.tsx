import React from 'react';
import classNames from 'classnames';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { Trim } from 'UI/Trim/Trim';

export interface TransactionHashPropsTypes {
  transaction: ExtendedTransactionType;

<<<<<<< HEAD:src/UI/TransactionsTable/TransactionHash.tsx

import { ExtendedTransactionType } from 'components/TransactionsInterpreter/helpers/types';

import { ExplorerLink } from '../ExplorerLink';
import { Trim } from '../Trim';
import { TransactionIcon } from './TransactionIcon';

import globalStyles from 'assets/sass/main.scss';
import styles from './transactionsTableStyles.scss';

export interface TransactionHashPropsTypes {
  transaction: ExtendedTransactionType;
}

export const TransactionHash = (props: TransactionHashPropsTypes) => {
  const { transaction } = props;

=======
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
>>>>>>> origin/tm-transactions-interpreter:src/UI/TransactionsTable/components/TransactionHash.tsx
  const transactionHashLink = `/transactions/${
    transaction.originalTxHash
      ? `${transaction.originalTxHash}#${transaction.txHash}`
      : transaction.txHash
  }`;

  return (
    <div
      className={classNames(
        globalStyles.dFlex,
        globalStyles.alignItemsCenter,
        styles.transactionCell
      )}
    >
      <TransactionIcon {...{ transaction }} />

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
