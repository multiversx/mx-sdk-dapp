import React from 'react';

import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './confirmReceiverStyles.scss';

export interface ConfirmReceiverPropsType {
  receiver?: string;
  scamReport: string | null;
}

export const ConfirmReceiver = (props: ConfirmReceiverPropsType) => {
  const { receiver, scamReport } = props;

  return (
    <div className={styles.receiver}>
      <span className={styles.label}>Receiver</span>

      {receiver && (
        <span className={styles.value} data-testid='confirmReceiver'>
          {receiver}
        </span>
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
