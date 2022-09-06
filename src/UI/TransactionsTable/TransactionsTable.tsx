import * as React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { WithClassnameType } from '../types';
import { TransactionRow } from './components/TransactionRow';
import styles from './components/transactionsTableStyles.scss';

export interface TransactionsTableType extends WithClassnameType {
  extendedTransactions: InterpretedTransactionType[];
  address?: string;
  title?: React.ReactNode;
  directionCol?: boolean;
  showLockedAccounts?: boolean;
}

export const TransactionsTable = ({
  extendedTransactions,
  address,
  title = (
    <h6 className={globalStyles.h6} data-testid='title'>
      Transactions
    </h6>
  ),
  directionCol = false,
  showLockedAccounts = false,
  className = 'dapp-transactions-table'
}: TransactionsTableType) => {
  if (!address) {
    console.error('Invalid account');
    return null;
  }

  return (
    <div className={classNames(styles.transactionsTable, className)}>
      <div className={globalStyles.card}>
        <div className={globalStyles.cardHeader}>
          <div
            className={classNames(
              globalStyles.cardHeaderItem,
              globalStyles.dFlex,
              globalStyles.justifyContentBetween,
              globalStyles.alignItemsCenter
            )}
          >
            <div>{title}</div>
          </div>
        </div>
        <div className={classNames(globalStyles.cardBody, globalStyles.p0)}>
          <div className={styles.tableWrapper}>
            <table
              className={classNames(styles.table, globalStyles.trimSizeSm)}
              data-testid='transactionsTable'
            >
              <thead>
                <tr>
                  <th scope='col'>Tx Hash</th>
                  <th scope='col'>Age</th>
                  <th scope='col'>Shard</th>
                  <th scope='col'>From</th>
                  {directionCol && <th scope='col'> Tx Direction </th>}
                  <th scope='col'>To</th>
                  <th scope='col'>Method</th>
                  <th scope='col'>Value</th>
                </tr>
              </thead>
              <tbody>
                {extendedTransactions.map((transaction) => (
                  <TransactionRow
                    transaction={transaction}
                    key={transaction.txHash}
                    showDirectionCol={directionCol}
                    showLockedAccounts={showLockedAccounts}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
