import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { OperationType } from 'types/serverTransactions.types';
import { WithTransactionType } from 'UI/types';

import { OperationText } from './OperationText';

import globalStyles from 'assets/sass/main.scss';

export interface DetailedItemPropsType extends WithTransactionType {
  children?: ReactNode;
  operation: OperationType;
}

export const DetailedItem = ({
  children,
  operation,
  transaction
}: DetailedItemPropsType) => (
  <div
    className={classNames(
      globalStyles.dFlex,
      globalStyles.row,
      globalStyles.mb3,
      globalStyles.mbXl2
    )}
  >
    <OperationText operation={operation} transaction={transaction} />

    {children && (
      <div
        className={classNames(
          globalStyles.colLg6,
          globalStyles.colXl4,
          globalStyles.dFlex,
          globalStyles.alignItemsCenter
        )}
      >
        <div
          className={classNames(globalStyles.dFlex, globalStyles.textTruncate)}
        >
          {children}
        </div>
      </div>
    )}
  </div>
);
