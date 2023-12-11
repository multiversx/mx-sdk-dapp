import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithTransactionType } from '../../../UI/types';

const TransactionDirectionBadgeComponent = ({
  transaction,
  globalStyles,
  styles
}: WithTransactionType & WithStylesImportType) => (
  <div className={globalStyles?.dFlex}>
    <span
      className={classNames(
        styles?.directionBadge,
        transaction.transactionDetails.direction?.toLowerCase()
      )}
    >
      {transaction.transactionDetails.direction?.toUpperCase()}
    </span>
  </div>
);

export const TransactionDirectionBadge = withStyles(
  TransactionDirectionBadgeComponent,
  {
    ssrStyles: () =>
      import('UI/TransactionsTable/components/transactionsTable.styles.scss'),
    clientStyles: () =>
      require('UI/TransactionsTable/components/transactionsTable.styles.scss')
        .default
  }
);
