import React from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum, N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { CopyButton } from 'UI/CopyButton';
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

  const handleElementReference = (element: HTMLElement | null) => {
    if (!element) {
      return;
    }

    element.scrollIntoView();
  };

  if (showHighlight) {
    switch (true) {
      case data.startsWith(highlight): {
        const [, rest] = data.split(highlight);

        output = (
          <>
            <span className={globalStyles?.highlighted}>{highlight}</span>
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
            <span
              className={globalStyles?.highlighted}
              ref={handleElementReference}
            >
              {highlight}
            </span>
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
            <span
              className={globalStyles?.highlighted}
              ref={handleElementReference}
            >
              {highlight}
            </span>
            <span className={globalStyles?.textMuted}>{end}</span>
          </>
        );
        break;
      }
    }
  }

  const decodedScCall = [
    decodePart(encodedScCall),
    ...remainingDataFields
  ].join('@');

  return (
    <>
      {encodedScCall && (
        <div className={classNames(styles?.transactionData, className)}>
          <span
            className={classNames(
              styles?.transactionDataLabel,
              transactionDataInputLabelClassName
            )}
          >
            Smart Contract Call
          </span>

          <div className={styles?.transactionDataValueWrapper}>
            <div
              data-testid={DataTestIdsEnum.confirmScCall}
              className={classNames(
                styles?.transactionDataValue,
                transactionDataInputValueClassName
              )}
            >
              <span className={styles?.transactionDataValueText}>
                {decodedScCall}
              </span>

              {data && (
                <CopyButton
                  text={decodedScCall}
                  className={styles?.transactionDataValueCopy}
                />
              )}
            </div>
          </div>
        </div>
      )}

      <div className={classNames(styles?.transactionData, className)}>
        <span
          className={classNames(
            styles?.transactionDataLabel,
            transactionDataInputLabelClassName
          )}
        >
          Data
        </span>

        <div className={styles?.transactionDataValueWrapper}>
          <div
            data-testid={DataTestIdsEnum.confirmData}
            className={classNames(
              styles?.transactionDataValue,
              transactionDataInputValueClassName
            )}
          >
            <span className={styles?.transactionDataValueText}>
              {data ? output : N_A}
            </span>

            {data && (
              <CopyButton
                text={data}
                className={styles?.transactionDataValueCopy}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export const TransactionData = withStyles(TransactionDataComponent, {
  ssrStyles: () => import('UI/TransactionData/TransactionDataStyles.scss'),
  clientStyles: () =>
    require('UI/TransactionData/TransactionDataStyles.scss').default
});
