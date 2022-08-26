import * as React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { parseTransactions } from 'components/TransactionsInterpreter/TransactionsInterpreter';
import { ServerTransactionType } from 'types/serverTransactions.types';
import { WithClassnameType } from '../types';
import { TransactionRow } from './TransactionRow';
import styles from './transactionsTableStyles.scss';

interface TransactionsTableType extends WithClassnameType {
  transactions: ServerTransactionType[];
  address?: string;
  title?: React.ReactNode;
  directionCol?: boolean;
  showLockedAccounts?: boolean;
}

export const TransactionsTable = ({
  transactions,
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

  const processedTransactions = parseTransactions(transactions, address);

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
                {processedTransactions.map((transaction) => (
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
