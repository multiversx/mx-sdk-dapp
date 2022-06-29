import React, { useMemo } from 'react';
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
import { SignedTransactionType } from 'types';

export interface TxDetailsProps {
  title?: React.ReactNode;
  isTimedOut?: boolean;
  transactions?: SignedTransactionType[];
  className?: string;
  shouldRenderDefaultCss?: boolean;
}
export const TxDetails = ({
  title,
  transactions,
  isTimedOut = false
}: TxDetailsProps) => {
  if (transactions == null) {
    return null;
  }
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

  const processedTransactionsStatus = useMemo(() => {
    const processedTransactions = transactions.filter(
      (tx) => !isServerTransactionPending(tx?.status)
    );
    const totalTransactions = transactions.length;
    return `${processedTransactions.length} / ${totalTransactions} transactions processed`;
  }, [transactions]);

  return (
    <>
      {title && <div className={styles.title}>{title}</div>}

      <div className={styles.status}>{processedTransactionsStatus}</div>

      {transactions.map(({ hash, status }) => {
        const iconSrc = iconData[status];

        return (
          <div className={styles.container} key={hash}>
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
