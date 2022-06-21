import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../dapp-modal.scss';

type DappModalHeaderProps = {
  visible?: boolean;
  headerText?: string;
  customHeader?: JSX.Element | string;
  headerClassName?: string;
  closeButtonClassName?: string;
  onHide?: () => void;
};

export const DappModalHeader: React.FC<DappModalHeaderProps> = ({
  visible,
  headerText,
  customHeader,
  headerClassName,
  closeButtonClassName,
  onHide
}) => {
  if (!visible) {
    return null;
  }

  return customHeader ? (
    <div className={`${styles.dappModalHeader} ${headerClassName}`}>
      {customHeader}
    </div>
  ) : (
    <div className={`${styles.dappModalHeader} ${headerClassName}`}>
      <div className={styles.dappModalHeaderText}>{headerText}</div>

      <button
        className={`${styles.dappModalCloseButton} ${closeButtonClassName}`}
        onClick={onHide}
      >
        <FontAwesomeIcon size='lg' icon={faTimes} />
      </button>
    </div>
  );
};
