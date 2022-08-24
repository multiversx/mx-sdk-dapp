import React from 'react';
import styles from '../dapp-modal.scss';
import classNames from 'classnames';
import { WithClassnameType } from '../../types';

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
