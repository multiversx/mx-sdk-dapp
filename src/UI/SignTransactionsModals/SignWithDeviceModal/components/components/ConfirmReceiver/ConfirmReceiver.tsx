import React from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { ACCOUNTS_ENDPOINT } from 'apiCalls';
import MultiversXIconSimple from 'assets/icons/mvx-icon-simple.svg';
import { useGetAccountFromApi } from 'hooks';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { LoadingDots } from 'UI/LoadingDots';
import { Trim } from 'UI/Trim';
import { isContract } from 'utils/smartContracts';

import styles from './confirmReceiverStyles.scss';
import { trimReceiverDomain } from './helpers';

export interface ConfirmReceiverPropsType {
  receiver?: string;
  scamReport: string | null;
}

export const ConfirmReceiver = ({
  receiver,
  scamReport
}: ConfirmReceiverPropsType) => {
  const isSmartContract = isContract(receiver ?? '');

  const {
    account: usernameAccount,
    loading: usernameAccountLoading,
    error: usernameAccountError
  } = useGetAccountFromApi(receiver);

  const receiverValue = usernameAccount?.username ?? receiver;
  const hasUsername =
    receiver && Boolean(usernameAccount?.username) && !usernameAccountError;

  return (
    <div className={styles.receiver}>
      <span className={styles.label}>Receiver</span>

      {receiver && !usernameAccountLoading ? (
        <span data-testid='confirmReceiver' className={styles.valueWrapper}>
          {hasUsername ? (
            <span className={classNames(styles.value, styles.shrunk)}>
              <MultiversXIconSimple className={styles.icon} />
              {trimReceiverDomain(receiverValue)}

              <ExplorerLink
                page={`/${ACCOUNTS_ENDPOINT}/${receiver}`}
                className={styles.explorer}
              />
            </span>
          ) : (
            <span className={styles.value}>
              <Trim text={receiver} />
              <CopyButton text={receiver} className={styles.valueCopy} />
            </span>
          )}
        </span>
      ) : (
        <LoadingDots className={styles.loadingDots} />
      )}

      {hasUsername && !isSmartContract && (
        <span className={styles.subValue}>
          <Trim text={receiver} className={styles.subValueTrim} />
          <CopyButton text={receiver} className={styles.valueCopy} />
        </span>
      )}

      {isSmartContract && !usernameAccountLoading && (
        <span className={styles.subValue}>
          <Trim text='Smart Contract Call' className={styles.subValueTrim} />

          <ExplorerLink
            page={`/${ACCOUNTS_ENDPOINT}/${receiver}`}
            className={styles.explorer}
          />
        </span>
      )}

      {usernameAccountLoading && (
        <LoadingDots
          className={classNames(styles.loadingDots, styles.absolute)}
        />
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
