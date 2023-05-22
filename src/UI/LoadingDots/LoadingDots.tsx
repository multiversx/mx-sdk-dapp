import React from 'react';

import classNames from 'classnames';
import { WithClassnameType } from 'UI/types';

import styles from './loadingDotsStyle.scss';

export const LoadingDots = ({ className }: WithClassnameType) => (
  <div className={classNames(styles.loadingDots, className)}>
    {Array.from({ length: 3 }).map((_, index) => (
      <span
        key={`loading-dot-${index}`}
        className={classNames(styles.loadingDot, styles[`loadingDot-${index}`])}
      />
    ))}

    <span>Loading...</span>
  </div>
);
