import React from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { useGetAccountFromApi } from 'hooks';
import { LoadingDots } from 'UI/LoadingDots';
import { isContract } from 'utils/smartContracts';

import { ReceiverSubValue } from './components/ReceiverSubValue';
import { ReceiverValue } from './components/ReceiverValue';
import styles from './confirmReceiverStyles.scss';

export interface ConfirmReceiverPropsType {
  receiver: string;
  scamReport: string | null;
  receiverUsername?: string;
}

export const ConfirmReceiver = ({
  receiver,
  scamReport,
  receiverUsername
}: ConfirmReceiverPropsType) => {
  const isSmartContract = isContract(receiver);

  const {
    account: usernameAccount,
    loading: usernameAccountLoading,
    error: usernameAccountError
  } = useGetAccountFromApi(receiver, {
    shouldSkipFetching: Boolean(isSmartContract || receiverUsername)
  });

  const possibleReceiverUsername =
    receiverUsername ?? usernameAccount?.username;

  const receiverValue = possibleReceiverUsername ?? receiver;
  const hasUsername = Boolean(
    receiver && Boolean(possibleReceiverUsername) && !usernameAccountError
  );

  return (
    <div className={styles.receiver}>
      <span className={styles.label}>Receiver</span>

      {usernameAccountLoading ? (
        <LoadingDots className={styles.loadingDots} />
      ) : (
        <span data-testid='confirmReceiver' className={styles.valueWrapper}>
          <ReceiverValue
            hasUsername={hasUsername}
            receiverAddress={receiver}
            receiverValue={receiverValue}
          />
        </span>
      )}

      {usernameAccountLoading ? (
        <LoadingDots
          className={classNames(styles.loadingDots, styles.absolute)}
        />
      ) : (
        <ReceiverSubValue hasUsername={hasUsername} receiver={receiver} />
      )}

      {scamReport && (
        <div className={styles.scam}>
          <span>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles.icon}
            />

            <small data-testid='confirmScamReport'>{scamReport}</small>
          </span>
        </div>
      )}
    </div>
  );
};
