import React from 'react';
import styles from '../dapp-modal.scss';
import classNames from 'classnames';

type DappModalBodyProps = {
  children?: React.ReactNode;
  className?: string;
};

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
