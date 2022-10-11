import React, { ReactNode, useMemo } from 'react';
import classNames from 'classnames';

import { ServerTransactionType } from 'types/serverTransactions.types';
import { WithClassnameType } from '../types';
import { TransactionRow } from './components/TransactionRow';

import { getInterpretedTransaction } from 'utils';
import { useGetAccount, useGetNetworkConfig } from 'hooks';

import globalStyles from 'assets/sass/main.scss';
import styles from './components/transactionsTable.styles.scss';

export interface TransactionsTableType extends WithClassnameType {
  transactions: ServerTransactionType[];
  title?: ReactNode;
  directionCol?: boolean;
  showLockedAccounts?: boolean;
}

export const TransactionsTable = ({
  transactions,
  directionCol = false,
  showLockedAccounts = false,
  className = 'dapp-transactions-table',
  title
}: TransactionsTableType) => {
  const { address } = useGetAccount();
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();

  if (!address) {
    return null;
  }

  const interpretedTransactions = useMemo(
    () =>
      transactions.map((transaction) =>
        getInterpretedTransaction({ transaction, address, explorerAddress })
      ),
    [getInterpretedTransaction, transactions, explorerAddress, address]
  );

  return (
    <div
      className={classNames(
        globalStyles.card,
        globalStyles.mt5,
        globalStyles.mb5,
        styles.transactionsTable,
        className
      )}
    >
      <div
        className={classNames(
          globalStyles.cardHeader,
          globalStyles.cardHeaderItem,
          globalStyles.dFlex,
          globalStyles.justifyContentBetween,
          globalStyles.alignItemsCenter,
          styles.transactionsTableHeader
        )}
      >
        <h6 className={globalStyles.h6} data-testid='title'>
          {title || 'Transactions'}
        </h6>
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
              {interpretedTransactions.map((transaction) => (
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
  );
};
