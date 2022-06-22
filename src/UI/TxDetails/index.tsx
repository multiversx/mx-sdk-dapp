import React from 'react';
import classNames from 'classnames';
import {
  faCheck,
  faCircleNotch,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyButton } from 'UI/CopyButton';
import ExplorerLink from 'UI/ExplorerLink';
import { Trim } from 'UI/Trim';

import { isServerTransactionPending } from 'utils';

import styles from './styles.scss';
import { Props } from './types';

export const TxDetails = ({
  title,
  transactions,
  isTimedOut = false
}: Props) => {
  const iconSuccessData = {
    icon: faCheck
  };

  const iconFailedData = {
    icon: faTimes
  };

  const iconPendingData = {
    icon: faCircleNotch
  };

  const iconData: Record<string, typeof iconPendingData> = {
    pending: iconPendingData,
    success: iconSuccessData,
    fail: iconFailedData,
    invalid: iconFailedData,
    timedOut: iconFailedData
  };
  return (
    <>
      {title && <div className={styles.title}>{title}</div>}

      <div className={styles.status}>
        {
          transactions.filter((tx) => !isServerTransactionPending(tx.status))
            .length
        }{' '}
        / {transactions.length} transactions processed
      </div>

      {transactions.map(({ hash, status }) => {
        const iconSrc = iconData[status];

        return (
          <div className={styles.item} key={hash}>
            {!isTimedOut && iconSrc != null && (
              <FontAwesomeIcon
                icon={iconSrc.icon}
                className={classNames(styles.icon, {
                  'fa-spin slow-spin': status === 'pending'
                })}
              />
            )}

            <span className={styles.trim}>
              <Trim text={hash} />
            </span>

            <CopyButton text={hash} />

            {!isServerTransactionPending(status) && (
              <ExplorerLink page={`/transactions/${hash}`} className='ml-2' />
            )}
          </div>
        );
      })}
    </>
  );
};
