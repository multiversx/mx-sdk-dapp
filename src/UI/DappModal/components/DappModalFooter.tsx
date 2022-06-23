import React from 'react';
import styles from '../dapp-modal.scss';

type DappModalFooterProps = {
  visible?: boolean;
  footerClassName?: string;
  footerText?: string;
  customFooter?: JSX.Element;
};

export const DappModalFooter: React.FC<DappModalFooterProps> = ({
  visible,
  customFooter,
  footerClassName,
  footerText
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={`${styles.dappModalFooter} ${footerClassName}`}>
      {customFooter ?? <div>{footerText}</div>}
    </div>
  );
};
