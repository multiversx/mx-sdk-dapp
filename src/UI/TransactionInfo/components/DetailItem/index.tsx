import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './detailItem.module.scss';
import globalStyles from 'assets/sass/main.scss';

interface DetailItemPropsTypes {
  children: ReactNode;
  title: string | ReactNode;
  className?: string;
  colWidth?: string;
  noBorder?: boolean;
}

export const DetailItem = (props: DetailItemPropsTypes) => {
  const {
    children,
    title,
    className = '',
    colWidth = '2',
    noBorder = false
  } = props;

  return (
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
};
