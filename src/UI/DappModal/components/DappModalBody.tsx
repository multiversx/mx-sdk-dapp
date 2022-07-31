import React from 'react';
import styles from '../dapp-modal.scss';
import classNames from 'classnames';
import { WithClassname } from 'UI/types/with-classname';

type DappModalBodyProps = {
  children?: React.ReactNode;
} & WithClassname;

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
