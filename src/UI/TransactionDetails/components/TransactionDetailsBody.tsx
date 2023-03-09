import React from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faCheck,
  faCircleNotch,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls';
import globalStyles from 'assets/sass/main.scss';
import { TransactionServerStatusesEnum } from 'types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import styles from 'UI/TransactionDetails/transactionDetails.styles.scss';
import { Trim } from 'UI/Trim';

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

export interface TransactionDetailsBodyPropsType {
  isTimedOut?: boolean;
  iconSrc?: {
    icon: IconDefinition;
  } | null;
  className?: string;
  status?: TransactionServerStatusesEnum;
  hash: string;
}

export const TransactionDetailsBody = ({
  className,
  hash,
  status,
  iconSrc,
  isTimedOut
}: TransactionDetailsBodyPropsType) => {
  const iconStatus = status ? iconData[status] : null;
  const icon = iconSrc?.icon ?? iconStatus?.icon;

  return (
    <div className={classNames(styles.container, className)} key={hash}>
      {!isTimedOut && icon != null && (
        <FontAwesomeIcon
          icon={icon}
          className={classNames(styles.icon, {
            'fa-spin slow-spin': status === 'pending'
          })}
        />
      )}

      <span className={styles.trim}>
        <Trim text={hash} />
      </span>

      <CopyButton text={hash} />

      <ExplorerLink
        page={`/${TRANSACTIONS_ENDPOINT}/${hash}`}
        className={globalStyles.ml2}
      />
    </div>
  );
};
