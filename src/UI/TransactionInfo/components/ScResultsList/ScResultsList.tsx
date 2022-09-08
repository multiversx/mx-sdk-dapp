import React, { useState } from 'react';
import { faExchange, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ResultType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { FormatAmount } from 'UI/FormatAmount';
import { AccountName, ScAddressIcon } from 'UI/TransactionsTable/components';
import { Trim } from 'UI/Trim';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers/index';
import { getInitialScResultsDecodeMethod } from 'utils/transactions/transactionInfoHelpers/getScResultsInitialDecodeMethod';
import {
  getScResultsDecodedData,
  getScResultsHighlight
} from 'utils/transactions/transactionInfoHelpers/index';
import { DataDecode } from '../DataDecode';

// TODO: refactor after styles
export const ScResultsList = ({ results }: { results: ResultType[] }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const initialDecodeMethod = getInitialScResultsDecodeMethod();

  const [decodeMethod, setDecodeMethod] = useState(initialDecodeMethod);

  React.useEffect(() => {
    if (ref.current && ref.current !== null) {
      window.scrollTo({
        top: ref.current.getBoundingClientRect().top - 70,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className='sc-results-list detailed-list d-flex flex-column mt-1'>
      {results.map((result: ResultType, i) => {
        const highlightTx = getScResultsHighlight(result.hash);
        return (
          <div
            key={i}
            id={result.hash}
            className={`detailed-item d-flex border-left border-bottom ml-3 py-3 ${
              highlightTx ? 'highlighted' : ''
            }`}
            {...(highlightTx ? { ref: ref } : {})}
          >
            <div className='transaction-icon'>
              <FontAwesomeIcon icon={faExchange} />
            </div>

            <div className='detailed-item-content'>
              {result.hash && (
                <div className='row mb-3 d-flex flex-column flex-sm-row'>
                  <div className='col-sm-2 col-left'>Hash</div>
                  <div className='col-sm-10 d-flex align-items-center'>
                    <Trim text={result.hash} />
                    <CopyButton
                      text={result.hash}
                      className='side-action ml-2'
                    />
                    <ExplorerLink
                      to={explorerUrlBuilder.transactionDetails(
                        `${result.originalTxHash}#${result.hash}/${decodeMethod}`
                      )}
                      className='side-action ml-2'
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </ExplorerLink>
                  </div>
                </div>
              )}

              {result.sender && (
                <div className='row mb-3 d-flex flex-column flex-sm-row'>
                  <div className='col-sm-2 col-left'>From</div>
                  <div className='col-sm-10 d-flex align-items-center'>
                    <ScAddressIcon initiator={result.sender} />
                    <AccountName
                      address={result.sender}
                      assets={result.senderAssets}
                    />
                    <CopyButton
                      text={result.sender}
                      className='side-action ml-2'
                    />
                  </div>
                </div>
              )}

              {result.receiver && (
                <div className='row mb-3 d-flex flex-column flex-sm-row'>
                  <div className='col-sm-2 col-left'>To</div>
                  <div className='col-sm-10 d-flex align-items-center'>
                    <ScAddressIcon initiator={result.receiver} />
                    <AccountName
                      address={result.receiver}
                      assets={result.receiverAssets}
                    />
                    <CopyButton
                      text={result.receiver}
                      className='side-action ml-2'
                    />
                  </div>
                </div>
              )}

              {result.value != null && (
                <div className='row mb-3 d-flex flex-column flex-sm-row'>
                  <div className='col-sm-2 col-left'>Value</div>
                  <div className='col-sm-10 text-wrap'>
                    <FormatAmount value={result.value} showLastNonZeroDecimal />
                  </div>
                </div>
              )}

              {result.data && (
                <div className='row d-flex flex-column flex-sm-row'>
                  <div className='col-sm-2 col-left'>Data</div>
                  <div className='col-sm-10'>
                    <DataDecode
                      value={
                        result.data
                          ? getScResultsDecodedData(result.data)
                          : 'N/A'
                      }
                      {...(highlightTx
                        ? { initialDecodeMethod, setDecodeMethod }
                        : {})}
                    />
                  </div>
                </div>
              )}

              {result.returnMessage && (
                <div className='row mt-3 d-flex flex-column flex-sm-row'>
                  <div className='col-sm-2 col-left'>Response</div>
                  <div className='col-sm-10 text-break-all'>
                    {result.returnMessage}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
