import React from 'react';
import classNames from 'classnames';

import { N_A } from 'constants/index';
import { decodePart } from 'utils/decoders/decodePart';
import { WithClassnameType } from '../types';

import globalStyles from 'assets/sass/main.scss';

const allOccurences = (sourceStr: string, searchStr: string) =>
  [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map((a) => a.index);

export interface TransactionDataPropsType extends WithClassnameType {
  data: string;
  highlight?: string;
  isScCall?: boolean;
}

export const TransactionData = ({
  data,
  highlight,
  isScCall,
  className = 'dapp-transaction-data'
}: TransactionDataPropsType) => {
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
        <div
          className={classNames(
            globalStyles.formGroup,
            globalStyles.mb0,
            globalStyles.dataField,
            globalStyles.mw100,
            globalStyles.w100,
            className
          )}
        >
          <span
            className={classNames(
              globalStyles.formLabel,
              globalStyles.textSecondary,
              globalStyles.dBlock
            )}
          >
            SC Call
          </span>

          <div
            data-testid='confirmScCall'
            className={classNames(
              globalStyles.textarea,
              globalStyles.scCall,
              globalStyles.formControl,
              globalStyles.mt1,
              globalStyles.textBreak,
              globalStyles.w100
            )}
          >
            {[decodePart(encodedScCall), ...remainingDataFields].join('@')}
          </div>
        </div>
      )}
      <div
        className={classNames(
          globalStyles.formGroup,
          globalStyles.mb0,
          globalStyles.dataField,
          globalStyles.mw100,
          globalStyles.w100,
          className
        )}
      >
        <span
          className={classNames(
            globalStyles.formLabel,
            globalStyles.textSecondary,
            globalStyles.dBlock
          )}
        >
          Data
        </span>

        <div
          data-testid='confirmData'
          className={classNames(
            globalStyles.textarea,
            globalStyles.formControl,
            globalStyles.mt1,
            globalStyles.textBreak,
            globalStyles.w100
          )}
        >
          {data ? output : N_A}
        </div>
      </div>
    </>
  );
};
