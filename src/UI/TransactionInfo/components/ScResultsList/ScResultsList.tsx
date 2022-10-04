import React, { useEffect, useState, useRef, Fragment } from 'react';
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

import styles from './styles.scss';
import globalStyles from 'assets/sass/main.scss';

interface ScResultsListPropsTypes {
  results: ResultType[];
}

interface ResultDataPropsTypes {
  children: JSX.Element | JSX.Element[] | string;
  label: string;
}

const ResultData = (props: ResultDataPropsTypes) => {
  const { label, children } = props;

  return (
    <div className={classNames(globalStyles.row, styles.row)}>
      <div className={classNames(globalStyles.colSm2, styles.label)}>
        {label}
      </div>

      <div className={classNames(globalStyles.colSm10, styles.data)}>
        <Fragment>{children}</Fragment>
      </div>
    </div>
  );
};

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
    <div className={styles.results}>
      {results.map((result: ResultType) => {
        const highlightTx = getScResultsHighlight(result.hash);

        return (
          <div
            key={result.hash}
            id={result.hash}
            className={styles.result}
            {...(highlightTx ? { ref } : {})}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faExchange} />
            </div>

            <div className={styles.content}>
              {result.hash && (
                <ResultData label='Hash'>
                  <Trim text={result.hash} className={styles.hash} />

                  <CopyButton text={result.hash} className={styles.copy} />

                  <ExplorerLink
                    className={styles.explorer}
                    page={explorerUrlBuilder.transactionDetails(
                      `${result.originalTxHash}#${result.hash}/${decodeMethod}`
                    )}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </ExplorerLink>
                </ResultData>
              )}

              {result.sender && (
                <ResultData label='From'>
                  <ScAddressIcon initiator={result.sender} />

                  <div className={styles.address}>
                    <AccountName
                      address={result.sender}
                      assets={result.senderAssets}
                    />
                  </div>

                  <CopyButton text={result.sender} className={styles.copy} />
                </ResultData>
              )}

              {result.receiver && (
                <ResultData label='To'>
                  <ScAddressIcon initiator={result.receiver} />

                  <div className={styles.address}>
                    <AccountName
                      address={result.receiver}
                      assets={result.receiverAssets}
                    />
                  </div>

                  <CopyButton text={result.receiver} className={styles.copy} />
                </ResultData>
              )}

              {result.value != null && (
                <ResultData label='Value'>
                  <FormatAmount
                    value={result.value}
                    showLastNonZeroDecimal={true}
                  />
                </ResultData>
              )}

              {result.data && (
                <ResultData label='Data'>
                  <DataDecode
                    value={
                      result.data ? getScResultsDecodedData(result.data) : N_A
                    }
                    {...(highlightTx
                      ? { initialDecodeMethod, setDecodeMethod }
                      : {})}
                  />
                </ResultData>
              )}

              {result.returnMessage && (
                <ResultData label='Response'>{result.returnMessage}</ResultData>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
