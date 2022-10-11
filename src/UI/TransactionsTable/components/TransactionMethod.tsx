import React from 'react';
import classNames from 'classnames';

import { getTransactionMethod } from 'utils/transactions/getInterpretedTransaction/helpers/getTransactionMethod';
import { WithTransactionType } from 'UI/types';

import globalStyles from 'assets/sass/main.scss';
import styles from './transactionsTable.styles.scss';

export const TransactionMethod = ({ transaction }: WithTransactionType) => (
  <div className={styles.transactionCell}>
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
