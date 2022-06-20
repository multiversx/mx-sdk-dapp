import React from 'react';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import styles from '../styles/dapp-modal.scss';

type DappModalHeaderProps = {
  visible?: boolean;
  headerText?: string;
  customHeader?: JSX.Element | string;
  headerClassName?: string;
  closeButtonClassName?: string;
  onHide?: () => void;
};

const DappModalHeader: React.FC<DappModalHeaderProps> = ({
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
        <ReactFontawesome.FontAwesomeIcon size='lg' icon={icons.faTimes} />
      </button>
    </div>
  );
};

export default DappModalHeader;
