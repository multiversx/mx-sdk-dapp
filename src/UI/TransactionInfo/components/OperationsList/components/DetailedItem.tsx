import React, { ReactNode } from 'react';
import classNames from 'classnames';

import {
  InterpretedTransactionType,
  OperationType
} from 'types/serverTransactions.types';
import { OperationText } from './OperationText';

import globalStyles from 'assets/sass/main.scss';

interface DetailedItemPropsTypes {
  children?: ReactNode;
  operation: OperationType;
  transaction: InterpretedTransactionType;
}

export const DetailedItem = (props: DetailedItemPropsTypes) => {
  const { children, operation, transaction } = props;

  return (
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
            globalStyles.colXl6,
            globalStyles.dFlex,
            globalStyles.alignItemsCenter
          )}
        >
          <div
            className={classNames(
              globalStyles.dFlex,
              globalStyles.textTruncate
            )}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
