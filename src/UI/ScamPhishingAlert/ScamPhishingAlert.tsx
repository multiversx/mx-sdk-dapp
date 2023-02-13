import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './scamPhishingStyles.scss';

export interface ScamPhishingAlertPropsType {
  url: string;
  className?: string;
  icon?: ReactNode;
}

export const ScamPhishingAlert = (props: ScamPhishingAlertPropsType) => {
  const { className, url, icon } = props;
  const sanitizedUrl = url.replace('https://', '').replace(/\/$/, '');

  return (
    <p className={classNames(styles.scamPhishingAlert, className)}>
      {icon || (
        <FontAwesomeIcon
          className={styles.scamPhishingAlertIcon}
          icon={faLock}
        />
      )}

      <span className={styles.scamPhishingAlertText}>
        <span>Scam/Phishing verification:</span>{' '}
        <span className={styles.scamPhishingAlertPrefix}>
          <strong>https://</strong>
          {sanitizedUrl}
        </span>
      </span>
    </p>
  );
};
