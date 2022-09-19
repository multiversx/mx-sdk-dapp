import React from 'react';
import { faSpinner, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { TimeAgo } from 'UI/TimeAgo/TimeAgo';
import { getHumanReadableTimeFormat } from 'utils/transactions/getInterpretedTransaction/helpers/index';
import { getTransactionStatus } from 'utils/transactions/transactionInfoHelpers/getTransactionStatus';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoAge = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  const { pending } = getTransactionStatus(transaction);
  return (
    <DetailItem title='Age'>
      {transaction.timestamp != null ? (
        <div
          className='d-flex flex-wrap align-items-center'
          data-testid='transactionAge'
        >
          {pending ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className='mr-2 text-secondary fa-spin slow-spin'
            />
          ) : (
            <FontAwesomeIcon icon={faClock} className='mr-2 text-secondary' />
          )}
          <TimeAgo value={transaction.timestamp} short />{' '}
          <span className='text-secondary'>
            (
            {getHumanReadableTimeFormat({
              value: transaction.timestamp,
              utc: true
            })}
            )
          </span>
        </div>
      ) : (
        <span className='text-secondary'>N/A</span>
      )}
    </DetailItem>
  );
};
