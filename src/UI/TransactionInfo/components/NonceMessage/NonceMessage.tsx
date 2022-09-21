import * as React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetAccount } from 'hooks';
import { InterpretedTransactionType } from 'types';

export const NonceMessage = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  const { nonce } = useGetAccount();
  const { nonce: transactionNonce } = transaction;

  const hasUnsyncedNonce = transactionNonce > nonce;

  if (!hasUnsyncedNonce) {
    return null;
  }

  return (
    <div className='d-flex ml-1 text-break-all'>
      <FontAwesomeIcon
        icon={faAngleDown}
        className='text-secondary'
        style={{ marginTop: '2px' }}
        transform={{ rotate: 45 }}
      />
      &nbsp;
      <small className='text-warning ml-1'>
        {' '}
        Probable higher nonce in transaction
      </small>
    </div>
  );
};
