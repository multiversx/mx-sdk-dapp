import React from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { getTransactionMethod } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionMethod';

import { WithClassnameType, WithTransactionType } from '../../../UI/types';

import styles from './transactionsTable.styles.scss';

export const TransactionMethod = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => (
  <div className={classNames(styles.transactionCell, className)}>
    <span
      title={transaction.action?.description}
      className={classNames(
        globalStyles.badge,
        globalStyles.badgeSecondary,
        globalStyles.badgePill,
        globalStyles.fontWeightLight,
        globalStyles.p0
      )}
      data-testid='transactionMethod'
    >
      <div
        className={classNames(
          globalStyles.badge,
          globalStyles.badgeSecondary,
          globalStyles.badgePill
        )}
      >
        <div
          className={classNames(
            styles.transactionFunctionBadge,
            globalStyles.textTruncate,
            globalStyles.textCapitalize,
            globalStyles.textWhite,
            globalStyles.p1,
            styles.transactionCellFontSmall
          )}
        >
          {getTransactionMethod(transaction)}
        </div>
      </div>
    </span>
  </div>
);
