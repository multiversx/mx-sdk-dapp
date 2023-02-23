import React, { ReactNode } from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import styles from './detailItem.module.scss';

export interface DetailItemPropsType {
  children: ReactNode;
  title: string | ReactNode;
  className?: string;
  colWidth?: string;
  noBorder?: boolean;
}

export const DetailItem = ({
  children,
  title,
  className = '',
  colWidth = '2',
  noBorder = false
}: DetailItemPropsType) => (
  <div
    className={classNames(globalStyles.row, styles.detailItem, className, {
      [globalStyles.pt3]: noBorder,
      [globalStyles.pb1]: noBorder,
      [globalStyles.borderBottom]: !noBorder,
      [globalStyles.py3]: !noBorder
    })}
  >
    <div
      className={classNames(
        globalStyles.textSecondary,
        globalStyles.textLgRight,
        globalStyles.fontWeightMedium,
        globalStyles[`colLg${colWidth}`]
      )}
    >
      {title}
    </div>

    <div
      className={classNames(
        globalStyles.fontWeightMedium,
        globalStyles[`colLg${12 - Number(colWidth)}`]
      )}
    >
      {children}
    </div>
  </div>
);
