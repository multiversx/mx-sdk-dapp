import React from 'react';
import ReactDOM from 'react-dom';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import styles from '../styles/dapp-modal.scss';
import { DappModalConfig } from '../types';

type DappModalProps = {
  id?: string;
  visible: boolean;
  onHide?: () => void;
  parentElement?: Element;
  children?: React.ReactNode;
  config?: DappModalConfig;
};

const defaultConfig: DappModalConfig = {
  showHeader: true,
  showFooter: false,
  headerText: '',
  footerText: ''
};

const DappModal: React.FC<DappModalProps> = ({
  id,
  visible,
  onHide,
  parentElement,
  config = defaultConfig,
  children
}) => {
  if (!visible) {
    return null;
  }

  const {
    showHeader,
    showFooter,
    headerText,
    footerText,
    modalDialogClassName,
    modalContentClassName,
    modalHeaderClassName,
    modalCloseButtonClassName,
    modalBodyClassName,
    modalFooterClassName,
    customModalHeader,
    customModalFooter
  } = config;

  const Header = customModalHeader ?? (
    <div className={`${styles.dappModalHeader} ${modalHeaderClassName}`}>
      <div className={styles.dappModalHeaderText}>{headerText}</div>
      <button
        className={`${styles.dappModalCloseButton} ${modalCloseButtonClassName}`}
        onClick={onHide}
      >
        <ReactFontawesome.FontAwesomeIcon size='lg' icon={icons.faTimes} />
      </button>
    </div>
  );

  const Body = (
    <div className={`${styles.dappModalBody} ${modalBodyClassName}`}>
      {children}
    </div>
  );

  const Footer = customModalFooter ?? (
    <div className={`${styles.dappModalFooter} ${modalFooterClassName}`}>
      <div>{footerText}</div>
    </div>
  );

  return ReactDOM.createPortal(
    <div
      id={id ?? 'dapp-modal'}
      role='dialog'
      aria-modal='true'
      className={`${styles.dappModal} ${modalDialogClassName}`}
      onClick={onHide}
    >
      <div className={`${styles.dappModalContent} ${modalContentClassName}`}>
        {showHeader && Header}
        {Body}
        {showFooter && Footer}
      </div>
    </div>,
    parentElement ?? document.body
  );
};

export default DappModal;
