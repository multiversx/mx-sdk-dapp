import * as React from 'react';
import globalStyles from 'assets/sass/main.scss';
import { decodePart } from 'utils';

const allOccurences = (sourceStr: string, searchStr: string) =>
  [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map((a) => a.index);

const TransactionData = ({
  data,
  highlight,
  isScCall
}: {
  data: string;
  highlight?: string;
  isScCall?: boolean;
}) => {
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
          <React.Fragment>
            <span className={globalStyles.textMuted}>{rest}</span>
            {highlight}
          </React.Fragment>
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
          className={`${globalStyles.formGroup} ${globalStyles.mb0} ${globalStyles.dataField} ${globalStyles.mw100}`}
        >
          <span
            className={`${globalStyles.formLabel} ${globalStyles.textSecondary} ${globalStyles.dBlock}`}
          >
            SC Call
          </span>

          <div
            data-testid='confirmScCall'
            className={`${globalStyles.textarea} ${globalStyles.scCall} ${globalStyles.formControl} ${globalStyles.mt1} ${globalStyles.textBreak}`}
          >
            {[decodePart(encodedScCall), ...remainingDataFields].join('@')}
          </div>
        </div>
      )}
      <div
        className={`${globalStyles.formGroup} ${globalStyles.mb0} ${globalStyles.dataField} ${globalStyles.mw100}`}
      >
        <span
          className={`${globalStyles.formLabel} ${globalStyles.textSecondary} ${globalStyles.dBlock}`}
        >
          Data
        </span>

        <div
          data-testid='confirmData'
          className={`${globalStyles.textarea} ${globalStyles.formControl} ${globalStyles.mt1} ${globalStyles.textBreak}`}
        >
          {data ? output : 'N/A'}
        </div>
      </div>
    </>
  );
};

export default TransactionData;
