import React from 'react';
import classNames from 'classnames';
import { WithClassnameType } from '../../types';
import styles from '../dappModal.scss';

type DappModalBodyProps = {
  children?: React.ReactNode;
} & WithClassnameType;

export const DappModalBody: React.FC<DappModalBodyProps> = ({
  className,
  children
}) => {
  return (
    <div className={classNames(styles.dappModalBody, className)}>
      {children}
    </div>
  );
};
