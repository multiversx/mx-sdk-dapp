import React from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum, N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { decodePart } from 'utils/decoders/decodePart';
import { getUnHighlightedDataFieldParts } from 'utils/transactions/getUnHighlightedDataFieldParts';
import { WithClassnameType } from '../types';

const allOccurences = (sourceStr: string, searchStr: string) => {
  const occurrences = [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map(
    (result) => result.index
  );

  return occurrences.filter((search) => Number.isFinite(search)) as number[];
};

export interface TransactionDataPropsType extends WithClassnameType {
  data: string;
  highlight?: string;
  isScCall?: boolean;
  innerTransactionDataClasses?: {
    transactionDataInputLabelClassName?: string;
    transactionDataInputValueClassName?: string;
  };
  transactionIndex: number;
}

const TransactionDataComponent = ({
  className = 'dapp-transaction-data',
  data,
  highlight,
  innerTransactionDataClasses,
  isScCall,
  transactionIndex,
  globalStyles,
  styles
}: TransactionDataPropsType & WithStylesImportType) => {
  const {
    transactionDataInputLabelClassName,
    transactionDataInputValueClassName
  } = innerTransactionDataClasses || {};

  let output = <>{data}</>;

  const [encodedScCall, ...remainingDataFields] =
    highlight && isScCall ? highlight.split('@') : [];

  const isHighlightedData = data && highlight;
  const occurrences = isHighlightedData ? allOccurences(data, highlight) : [];
  const showHighlight = isHighlightedData && occurrences.length > 0;

  if (showHighlight) {
    switch (true) {
      case data.startsWith(highlight): {
        const [, rest] = data.split(highlight);

        output = (
          <>
            {highlight}
            <span className={globalStyles?.textMuted}>{rest}</span>
          </>
        );
        break;
      }
      case data.endsWith(highlight): {
        const [rest] = data.split(highlight);

        output = (
          <>
            <span className={globalStyles?.textMuted}>{rest}</span>
            {highlight}
          </>
        );
        break;
      }

      default: {
        const { start, end } = getUnHighlightedDataFieldParts({
          occurrences,
          transactionIndex,
          data,
          highlight
        });

        output = (
          <>
            <span className={globalStyles?.textMuted}>{start}</span>
            <span className={globalStyles?.highlighted}>{highlight}</span>
            <span className={globalStyles?.textMuted}>{end}</span>
          </>
        );
        break;
      }
    }
  }

  return (
    <>
      {encodedScCall && (
        <div className={classNames(styles?.data, className)}>
          <span
            className={classNames(
              styles?.label,
              transactionDataInputLabelClassName
            )}
          >
            SC Call
          </span>

          <div
            data-testid={DataTestIdsEnum.confirmScCall}
            className={classNames(
              styles?.value,
              transactionDataInputValueClassName
            )}
          >
            {[decodePart(encodedScCall), ...remainingDataFields].join('@')}
          </div>
        </div>
      )}

      <div className={styles?.data}>
        <span
          className={classNames(
            styles?.label,
            transactionDataInputLabelClassName
          )}
        >
          Data
        </span>

        <div
          data-testid={DataTestIdsEnum.confirmData}
          className={classNames(
            styles?.value,
            transactionDataInputValueClassName
          )}
        >
          {data ? output : N_A}
        </div>
      </div>
    </>
  );
};

export const TransactionData = withStyles(TransactionDataComponent, {
  local: () => import('UI/TransactionData/TransactionDataStyles.scss')
});
