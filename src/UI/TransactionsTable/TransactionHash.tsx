import React from 'react';
import classNames from 'classnames';

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
        <Trim text={transaction.txHash} />
      </ExplorerLink>
    </div>
  );
};
