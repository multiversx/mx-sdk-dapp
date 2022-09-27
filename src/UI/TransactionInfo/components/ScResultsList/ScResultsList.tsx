import React, { useEffect, useState, useRef } from 'react';
import { faExchange, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { N_A } from 'constants/index';
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

import globalStyles from 'assets/sass/main.scss';

interface ScResultsListPropsTypes {
  results: ResultType[];
}

export const ScResultsList = (props: ScResultsListPropsTypes) => {
  const { results } = props;
  const ref = useRef<HTMLDivElement>(null);
  const initialDecodeMethod = getInitialScResultsDecodeMethod();

  const [decodeMethod, setDecodeMethod] = useState(initialDecodeMethod);

  useEffect(() => {
    if (ref.current && ref.current !== null) {
      window.scrollTo({
        top: ref.current.getBoundingClientRect().top - 70,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div
      className={classNames(
        globalStyles.dFlex,
        globalStyles.flexColumn,
        globalStyles.mt1
      )}
    >
      {results.map((result: ResultType, i) => {
        const highlightTx = getScResultsHighlight(result.hash);

        return (
          <div
            key={i}
            id={result.hash}
            className={classNames(
              globalStyles.dFlex,
              globalStyles.borderLeft,
              globalStyles.borderBottom,
              globalStyles.ml3,
              globalStyles.py3
            )}
            {...(highlightTx ? { ref: ref } : {})}
          >
            <div className={globalStyles.transactionIcon}>
              <FontAwesomeIcon icon={faExchange} />
            </div>

            <div>
              {result.hash && (
                <div
                  className={classNames(
                    globalStyles.row,
                    globalStyles.dFlex,
                    globalStyles.flexColumn,
                    globalStyles.flexSmRow,
                    globalStyles.mb3
                  )}
                >
                  <div className={globalStyles.colSm2}>Hash</div>

                  <div
                    className={classNames(
                      globalStyles.colSm10,
                      globalStyles.dFlex,
                      globalStyles.alignItemsCenter
                    )}
                  >
                    <Trim text={result.hash} />

                    <CopyButton
                      text={result.hash}
                      className={globalStyles.ml2}
                    />

                    <ExplorerLink
                      className={globalStyles.ml2}
                      page={explorerUrlBuilder.transactionDetails(
                        `${result.originalTxHash}#${result.hash}/${decodeMethod}`
                      )}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </ExplorerLink>
                  </div>
                </div>
              )}

              {result.sender && (
                <div
                  className={classNames(
                    globalStyles.row,
                    globalStyles.dFlex,
                    globalStyles.flexColumn,
                    globalStyles.flexSmRow,
                    globalStyles.mb3
                  )}
                >
                  <div className={globalStyles.colSm2}>From</div>

                  <div
                    className={classNames(
                      globalStyles.colSm10,
                      globalStyles.dFlex,
                      globalStyles.alignItemsCenter
                    )}
                  >
                    <ScAddressIcon initiator={result.sender} />

                    <AccountName
                      address={result.sender}
                      assets={result.senderAssets}
                    />

                    <CopyButton
                      text={result.sender}
                      className={globalStyles.ml2}
                    />
                  </div>
                </div>
              )}

              {result.receiver && (
                <div
                  className={classNames(
                    globalStyles.row,
                    globalStyles.dFlex,
                    globalStyles.flexColumn,
                    globalStyles.flexSmRow
                  )}
                >
                  <div className={globalStyles.colSm2}>To</div>

                  <div
                    className={classNames(
                      globalStyles.colSm10,
                      globalStyles.dFlex,
                      globalStyles.alignItemsCenter
                    )}
                  >
                    <ScAddressIcon initiator={result.receiver} />

                    <AccountName
                      address={result.receiver}
                      assets={result.receiverAssets}
                    />

                    <CopyButton
                      text={result.receiver}
                      className={globalStyles.ml2}
                    />
                  </div>
                </div>
              )}

              {result.value != null && (
                <div
                  className={classNames(
                    globalStyles.row,
                    globalStyles.dFlex,
                    globalStyles.flexColumn,
                    globalStyles.flexSmRow,
                    globalStyles.mb3
                  )}
                >
                  <div className={globalStyles.colSm2}>Value</div>

                  <div
                    className={classNames(
                      globalStyles.colSm10,
                      globalStyles.textWrap
                    )}
                  >
                    <FormatAmount value={result.value} showLastNonZeroDecimal />
                  </div>
                </div>
              )}

              {result.data && (
                <div
                  className={classNames(
                    globalStyles.row,
                    globalStyles.dFlex,
                    globalStyles.flexColumn,
                    globalStyles.flexSmRow
                  )}
                >
                  <div className={globalStyles.colSm2}>Data</div>

                  <div className={globalStyles.colSm10}>
                    <DataDecode
                      value={
                        result.data ? getScResultsDecodedData(result.data) : N_A
                      }
                      {...(highlightTx
                        ? { initialDecodeMethod, setDecodeMethod }
                        : {})}
                    />
                  </div>
                </div>
              )}

              {result.returnMessage && (
                <div
                  className={classNames(
                    globalStyles.row,
                    globalStyles.mt3,
                    globalStyles.dFlex,
                    globalStyles.flexColumn,
                    globalStyles.flexSmRow
                  )}
                >
                  <div className={globalStyles.colSm2}>Response</div>

                  <div className={globalStyles.colSm10}>
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
