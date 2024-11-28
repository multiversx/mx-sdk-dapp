import React, { ReactNode, useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';

import { DataTestIdsEnum, N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { CopyButton } from 'UI/CopyButton';
import { decodePart } from 'utils/decoders/decodePart';
import { getUnHighlightedDataFieldParts } from 'utils/transactions/getUnHighlightedDataFieldParts';

import { WithClassnameType } from '../types';
import { TransactionDataDecode } from './components';

const allOccurences = (sourceStr: string, searchStr: string) => {
  const occurrences = [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map(
    (result) => result.index
  );

  return occurrences.filter((search) => Number.isFinite(search)) as number[];
};

export interface TransactionDataPropsType extends WithClassnameType {
  customCopyIcon?: IconProp;
  data: string;
  highlight?: string;
  innerTransactionDataClasses?: {
    transactionDataInputLabelClassName?: string;
    transactionDataInputValueClassName?: string;
  };
  isScCall?: boolean;
  label?: ReactNode;
  showCopyButton?: boolean;
  showDataDecode?: boolean;
  transactionIndex: number;
}

const TransactionDataComponent = ({
  className = 'dapp-transaction-data',
  customCopyIcon,
  data,
  globalStyles,
  highlight,
  innerTransactionDataClasses,
  isScCall,
  label,
  showCopyButton = true,
  styles,
  showDataDecode,
  transactionIndex
}: TransactionDataPropsType & WithStylesImportType) => {
  const [decodedData, setDecodedData] = useState(data);

  const {
    transactionDataInputLabelClassName,
    transactionDataInputValueClassName
  } = innerTransactionDataClasses || {};

  let output = <>{decodedData}</>;

  const [encodedScCall, ...remainingDataFields] =
    highlight && isScCall ? highlight.split('@') : [];

  const isHighlightedData = decodedData && highlight;
  const occurrences = isHighlightedData
    ? allOccurences(decodedData, highlight)
    : [];
  const showHighlight = isHighlightedData && occurrences.length > 0;

  const handleElementReference = (element: HTMLElement | null) => {
    if (!element) {
      return;
    }

    element.scrollIntoView();
  };

  const handleDecode = (decoded: string) => {
    setDecodedData(decoded);
  };

  const handleDecodeError = () => {
    setDecodedData(data);
  };

  if (showHighlight) {
    switch (true) {
      case decodedData.startsWith(highlight): {
        const [, rest] = decodedData.split(highlight);

        output = (
          <>
            <span className={globalStyles?.highlighted}>{highlight}</span>
            <span className={globalStyles?.textMuted}>{rest}</span>
          </>
        );
        break;
      }
      case decodedData.endsWith(highlight): {
        const [rest] = decodedData.split(highlight);

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
          data: decodedData,
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

              {decodedData && (
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
        <div
          className={classNames(
            styles?.transactionDataLabel,
            transactionDataInputLabelClassName
          )}
        >
          {label ?? 'Data'}
          {showDataDecode && (
            <TransactionDataDecode
              data={data}
              onDecode={handleDecode}
              onDecodeError={handleDecodeError}
            />
          )}
        </div>

        <div className={styles?.transactionDataValueWrapper}>
          <div
            data-testid={DataTestIdsEnum.confirmData}
            className={classNames(
              styles?.transactionDataValue,
              transactionDataInputValueClassName
            )}
          >
            <span className={styles?.transactionDataValueText}>
              {decodedData ? output : N_A}
            </span>

            {decodedData && showCopyButton && (
              <CopyButton
                copyIcon={customCopyIcon}
                text={decodedData}
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
