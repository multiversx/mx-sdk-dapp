import React from 'react';
import classNames from 'classnames';

import {
  InterpretedTransactionType,
  ResultType
} from 'types/serverTransactions.types';
import { AddressDetailItem } from '../AddressDetailItem/AddressDetailitem';
import { DetailItem } from '../DetailItem';
import { EventsList } from '../EventsList/EventsList';
import { ScrDetailItem } from '../ScrDetailItem/ScrDetailItem';

import globalStyles from 'assets/sass/main.scss';

interface ResultsPropsTypes {
  transaction: InterpretedTransactionType;
}

interface TransactionLogsPropsTypes {
  transaction: InterpretedTransactionType;
}

const showResultsEvents = (result: ResultType) =>
  result?.logs?.events && result.logs.events?.length > 0;

const Results = (props: ResultsPropsTypes) => {
  const { transaction } = props;
  const showResults = transaction.results && transaction.results.length > 0;

  if (!showResults) {
    return null;
  }
  return (
    <div className={globalStyles.row}>
      {transaction.results?.map((result, resultIndex) => {
        if (!result.logs) {
          return null;
        }

        return (
          <div
            key={`tx-result-log-${resultIndex}`}
            className={classNames(
              globalStyles.col12,
              globalStyles.borderBottom
            )}
          >
            <ScrDetailItem result={result} />

            {result.logs.address !== undefined && (
              <AddressDetailItem address={result.logs.address} />
            )}

            {showResultsEvents(result) && (
              <DetailItem title='Events'>
                <EventsList events={result.logs.events} id={result.logs?.id} />
              </DetailItem>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const TransactionLogs = (props: TransactionLogsPropsTypes) => {
  const { transaction } = props;
  const showEvents =
    transaction.logs?.events && transaction.logs?.events?.length > 0;

  return (
    <>
      {transaction.logs && (
        <>
          {' '}
          {transaction.logs.address != null && (
            <AddressDetailItem address={transaction.logs.address} />
          )}
          {showEvents && (
            <DetailItem title='Events'>
              <EventsList
                events={transaction.logs.events}
                id={transaction.logs?.id}
              />
            </DetailItem>
          )}
        </>
      )}

      <Results transaction={transaction} />
    </>
  );
};
