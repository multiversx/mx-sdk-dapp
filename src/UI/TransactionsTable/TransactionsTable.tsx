import React, { ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { useGetAccount, useGetNetworkConfig } from 'hooks';
import { ServerTransactionType } from 'types/serverTransactions.types';
import { getInterpretedTransaction } from 'utils/transactions/getInterpretedTransaction/getInterpretedTransaction';
import { withStyles, WithStylesImportType } from '../../hocs/withStyles';
import { WithClassnameType } from '../types';
import { TransactionRow } from './components/TransactionRow';

export interface TransactionsTableType extends WithClassnameType {
  transactions: ServerTransactionType[];
  title?: ReactNode;
  directionCol?: boolean;
  showLockedAccounts?: boolean;
}

const TransactionsTableComponent = ({
  transactions,
  directionCol = false,
  showLockedAccounts = false,
  className = 'dapp-transactions-table',
  title,
  globalStyles,
  styles
}: TransactionsTableType & WithStylesImportType) => {
  const { address } = useGetAccount();
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();

  const interpretedTransactions = useMemo(() => {
    if (!address) {
      return [];
    }
    return transactions.map((transaction) =>
      getInterpretedTransaction({ transaction, address, explorerAddress })
    );
  }, [getInterpretedTransaction, transactions, explorerAddress, address]);

  if (!address) {
    return null;
  }

  return (
    <div
      className={classNames(
        globalStyles?.card,
        globalStyles?.mt5,
        globalStyles?.mb5,
        styles?.transactionsTable,
        className
      )}
    >
      <div
        className={classNames(
          globalStyles?.cardHeader,
          globalStyles?.cardHeaderItem,
          globalStyles?.dFlex,
          globalStyles?.justifyContentBetween,
          globalStyles?.alignItemsCenter,
          styles?.transactionsTableHeader
        )}
      >
        <h6 className={globalStyles?.h6} data-testid={DataTestIdsEnum.title}>
          {title || 'Transactions'}
        </h6>
      </div>

      <div className={classNames(globalStyles?.cardBody, globalStyles?.p0)}>
        <div className={styles?.tableWrapper}>
          <table
            className={classNames(styles?.table, globalStyles?.trimSizeSm)}
            data-testid={DataTestIdsEnum.transactionsTable}
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

export const TransactionsTable = withStyles(TransactionsTableComponent, {
  ssrStyles: () =>
    import('UI/TransactionsTable/components/transactionsTable.styles.scss'),
  clientStyles: () =>
    require('UI/TransactionsTable/components/transactionsTable.styles.scss')
      .default
});
