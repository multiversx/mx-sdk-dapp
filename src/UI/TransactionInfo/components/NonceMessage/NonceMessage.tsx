import React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { useGetAccount } from 'hooks';
import { InterpretedTransactionType } from 'types';

import globalStyles from 'assets/sass/main.scss';

interface NonceMessagePropsTypes {
  transaction: InterpretedTransactionType;
}

export const NonceMessage = (props: NonceMessagePropsTypes) => {
  const { transaction } = props;
  const { nonce } = useGetAccount();
  const { nonce: transactionNonce } = transaction;

  const hasUnsyncedNonce = transactionNonce > nonce;

  if (!hasUnsyncedNonce) {
    return null;
  }

  return (
    <div className={classNames(globalStyles.dFlex, globalStyles.ml1)}>
      <FontAwesomeIcon
        icon={faAngleDown}
        className={globalStyles.textSecondary}
        style={{ marginTop: '2px' }}
        transform={{ rotate: 45 }}
      />
      &nbsp;
      <small className={classNames(globalStyles.textWarning, globalStyles.ml1)}>
        {' '}
        Probable higher nonce in transaction
      </small>
    </div>
  );
};
