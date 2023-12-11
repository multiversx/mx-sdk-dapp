import React from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType, WithTransactionType } from 'UI/types';
import { getTransactionMethod } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionMethod';

const TransactionMethodComponent = ({
  className,
  transaction,
  globalStyles,
  styles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => (
  <div className={classNames(styles?.transactionCell, className)}>
    <span
      title={transaction.action?.description}
      className={classNames(
        globalStyles?.badge,
        globalStyles?.badgeSecondary,
        globalStyles?.badgePill,
        globalStyles?.fontWeightLight,
        globalStyles?.p0
      )}
      data-testid={DataTestIdsEnum.transactionMethod}
    >
      <div
        className={classNames(
          globalStyles?.badge,
          globalStyles?.badgeSecondary,
          globalStyles?.badgePill
        )}
      >
        <div
          className={classNames(
            styles?.transactionFunctionBadge,
            globalStyles?.textTruncate,
            globalStyles?.textCapitalize,
            globalStyles?.textWhite,
            globalStyles?.p1,
            styles?.transactionCellFontSmall
          )}
        >
          {getTransactionMethod(transaction)}
        </div>
      </div>
    </span>
  </div>
);

export const TransactionMethod = withStyles(TransactionMethodComponent, {
  ssrStyles: () =>
    import('UI/TransactionsTable/components/transactionsTable.styles.scss'),
  clientStyles: () =>
    require('UI/TransactionsTable/components/transactionsTable.styles.scss')
      .default
});
