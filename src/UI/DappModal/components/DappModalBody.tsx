import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { WithClassnameType } from '../../types';

import styles from '../dappModalStyles.scss';

export interface DappModalBodyPropsType extends WithClassnameType {
  children?: ReactNode;
}

export const DappModalBody = ({
  className,
  children
}: DappModalBodyPropsType) => {
  return (
    <div className={classNames(styles.dappModalBody, className)}>
      {children}
    </div>
  );
};
