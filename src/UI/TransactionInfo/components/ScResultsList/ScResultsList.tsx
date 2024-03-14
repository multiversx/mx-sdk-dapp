import React, { useEffect, useState, useRef } from 'react';
import { faExchange } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { ResultType } from 'types/serverTransactions.types';
import { FormatAmount } from 'UI/FormatAmount';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers/index';
import { getInitialScResultsDecodeMethod } from 'utils/transactions/transactionInfoHelpers/getScResultsInitialDecodeMethod';
import {
  getScResultsDecodedData,
  getScResultsHighlight
} from 'utils/transactions/transactionInfoHelpers/index';
import ResultData from './components/ResultData/ResultData';
import ResultHash from './components/ResultHash/ResultHash';
import ResultReceiver from './components/ResultReceiver/ResultReceiver';
import ResultSender from './components/ResultSender/ResultSender';
import ResultWrapper from './components/ResultWrapper/ResultWrapper';

export interface ScResultsListPropsType {
  results: ResultType[];
}

const ScResultsListComponent = ({
  results,
  styles
}: ScResultsListPropsType & WithStylesImportType) => {
  const ref = useRef<HTMLDivElement>(null);
  const initialDecodeMethod = getInitialScResultsDecodeMethod();

  const [decodeMethod, setDecodeMethod] = useState(initialDecodeMethod);

  useEffect(() => {
    if (ref.current && ref.current !== null) {
      window?.scrollTo({
        top: ref.current.getBoundingClientRect().top - 70,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className={styles?.results}>
      {results.map((result: ResultType) => {
        const highlightTx = getScResultsHighlight(result.hash);

        return (
          <div
            key={result.hash}
            id={result.hash}
            className={styles?.result}
            {...(highlightTx ? { ref } : {})}
          >
            <div className={styles?.icon}>
              <FontAwesomeIcon icon={faExchange} />
            </div>

            <div className={styles?.content}>
              {result.hash && (
                <ResultHash
                  hash={result.hash}
                  page={explorerUrlBuilder.transactionDetails(
                    `${result.originalTxHash}#${result.hash}/${decodeMethod}`
                  )}
                />
              )}

              {result.sender && (
                <ResultSender
                  sender={result.sender}
                  assets={result.senderAssets}
                />
              )}

              {result.receiver && (
                <ResultReceiver
                  receiver={result.receiver}
                  assets={result.receiverAssets}
                />
              )}

              {result.value != null && (
                <ResultWrapper label='Value'>
                  <FormatAmount value={result.value} showLastNonZeroDecimal />
                </ResultWrapper>
              )}

              {result.data && (
                <ResultData
                  value={
                    result.data ? getScResultsDecodedData(result.data) : N_A
                  }
                  {...(highlightTx
                    ? { initialDecodeMethod, setDecodeMethod }
                    : {})}
                />
              )}

              {result.returnMessage && (
                <ResultWrapper label='Response'>
                  {result.returnMessage}
                </ResultWrapper>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const ScResultsList = withStyles(ScResultsListComponent, {
  ssrStyles: () =>
    import('UI/TransactionInfo/components/ScResultsList/styles.scss'),
  clientStyles: () =>
    require('UI/TransactionInfo/components/ScResultsList/styles.scss').default
});
