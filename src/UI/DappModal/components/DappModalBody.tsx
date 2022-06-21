import React from 'react';
import styles from '../dapp-modal.scss';

type DappModalBodyProps = {
  bodyClassName?: string;
  children?: React.ReactNode;
};

const DappModalBody: React.FC<DappModalBodyProps> = ({
  bodyClassName,
  children
}) => {
  return (
    <div className={`${styles.dappModalBody} ${bodyClassName}`}>{children}</div>
  );
};

export default DappModalBody;
