import React from 'react';
import { decodePart } from 'utils';

const allOccurences = (sourceStr: string, searchStr: string) =>
  [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map((a) => a.index);

export const TransactionData = ({
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
            <span className='text-muted'>{rest}</span>
          </>
        );
        break;
      }
      case data.endsWith(highlight): {
        const [rest] = data.split(highlight);
        output = (
          <>
            <span className='text-muted'>{rest}</span>
            {highlight}
          </>
        );
        break;
      }

      default: {
        const [start, end] = data.split(highlight);

        output = (
          <>
            <span className='text-muted'>{start}</span>
            <span className='highlighted'>{highlight}</span>
            <span className='text-muted'>{end}</span>
          </>
        );
        break;
      }
    }
  }

  return (
    <>
      {encodedScCall && (
        <div className='form-group mb-0 data-field mw-100'>
          <span className='form-label text-secondary d-block'>SC Call</span>

          <div
            data-testid='confirmScCall'
            className='textarea sc-call form-control cursor-text mt-1 text-break-all'
          >
            {[decodePart(encodedScCall), ...remainingDataFields].join('@')}
          </div>
        </div>
      )}
      <div className='form-group mb-0 data-field mw-100'>
        <span className='form-label text-secondary d-block'>Data</span>

        <div
          data-testid='confirmData'
          className='textarea form-control cursor-text mt-1 text-break-all'
        >
          {data ? output : 'N/A'}
        </div>
      </div>
    </>
  );
};
