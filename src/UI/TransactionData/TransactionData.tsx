import React from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';

import { N_A } from 'constants/index';
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
}

export const TransactionData = ({
  data,
  highlight,
  isScCall,
  className = 'dapp-transaction-data',
  innerTransactionDataClasses
}: TransactionDataPropsType) => {
  const {
    transactionDataInputLabelClassName,
    transactionDataInputValueClassName
  } = innerTransactionDataClasses || {};

  let output = <>{data}</>;

  const [encodedScCall, ...remainingDataFields] =
    highlight && isScCall ? highlight.split('@') : [];

  if (data && highlight && allOccurences(data, highlight).length === 1) {
    switch (true) {
      case data.startsWith(highlight): {
        const [, rest] = data.split(highlight);
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
        const [start, end] = data.split(highlight);

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
            data-testid='confirmScCall'
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
          data-testid='confirmData'
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
