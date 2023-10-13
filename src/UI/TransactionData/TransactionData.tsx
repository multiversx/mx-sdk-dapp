import React from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';

import { DataTestIdsEnum, N_A } from 'constants/index';
import { decodePart } from 'utils/decoders/decodePart';
import { WithClassnameType } from '../types';

import styles from './TransactionDataStyles.scss';

const allOccurences = (sourceStr: string, searchStr: string) =>
  [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map((a) => a.index);

export interface TransactionDataPropsType extends WithClassnameType {
  data: string;
  highlight?: string;
  isScCall?: boolean;
  innerTransactionDataClasses?: {
    transactionDataInputLabelClassName?: string;
    transactionDataInputValueClassName?: string;
  };
  txIndex: number;
}

export const TransactionData = ({
  className = 'dapp-transaction-data',
  data,
  highlight,
  innerTransactionDataClasses,
  isScCall,
  txIndex
}: TransactionDataPropsType) => {
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
        const [_, rest] = data.split(highlight);

        output = (
          <>
            {highlight}
            <span className={globalStyles.textMuted}>{rest}</span>
          </>
        );
        break;
      }
      case data.endsWith(highlight): {
        const [rest] = data.split(highlight);

        output = (
          <>
            <span className={globalStyles.textMuted}>{rest}</span>
            {highlight}
          </>
        );
        break;
      }

      default: {
        const highlightIndex = occurrences[txIndex] || data.indexOf(highlight);
        const highlightLength = highlight.length;
        const start = data.slice(0, highlightIndex);
        const end = data.slice(highlightIndex + highlightLength);

        output = (
          <>
            <span className={globalStyles.textMuted}>{start}</span>
            <span className={globalStyles.highlighted}>{highlight}</span>
            <span className={globalStyles.textMuted}>{end}</span>
          </>
        );
        break;
      }
    }
  }

  return (
    <>
      {encodedScCall && (
        <div className={classNames(styles.data, className)}>
          <span
            className={classNames(
              styles.label,
              transactionDataInputLabelClassName
            )}
          >
            SC Call
          </span>

          <div
            data-testid={DataTestIdsEnum.confirmScCall}
            className={classNames(
              styles.value,
              transactionDataInputValueClassName
            )}
          >
            {[decodePart(encodedScCall), ...remainingDataFields].join('@')}
          </div>
        </div>
      )}

      <div className={styles.data}>
        <span
          className={classNames(
            styles.label,
            transactionDataInputLabelClassName
          )}
        >
          Data
        </span>

        <div
          data-testid={DataTestIdsEnum.confirmData}
          className={classNames(
            styles.value,
            transactionDataInputValueClassName
          )}
        >
          {data ? output : N_A}
        </div>
      </div>
    </>
  );
};
