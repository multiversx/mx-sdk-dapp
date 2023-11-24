import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import {
  WithOperationType,
  WithTransactionType
} from '../../../../../UI/types';
import { OperationText } from './OperationText';

export interface DetailedItemPropsType
  extends WithTransactionType,
    WithOperationType {
  children?: ReactNode;
}

const DetailedItemComponent = ({
  children,
  operation,
  transaction,
  globalStyles
}: DetailedItemPropsType & WithStylesImportType) => (
  <div
    className={classNames(
      globalStyles?.dFlex,
      globalStyles?.row,
      globalStyles?.mb3,
      globalStyles?.mbXl2
    )}
  >
    <OperationText operation={operation} transaction={transaction} />

    {children && (
      <div
        className={classNames(
          globalStyles?.colLg6,
          globalStyles?.colXl4,
          globalStyles?.dFlex,
          globalStyles?.alignItemsCenter
        )}
      >
        <div
          className={classNames(
            globalStyles?.dFlex,
            globalStyles?.textTruncate
          )}
        >
          {children}
        </div>
      </div>
    )}
  </div>
);

export const DetailedItem = withStyles(DetailedItemComponent, {});
