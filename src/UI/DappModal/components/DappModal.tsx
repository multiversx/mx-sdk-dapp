import React from 'react';
import ReactDOM from 'react-dom';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import styles from '../styles/dapp-modal.scss';
import { DappModalConfig } from '../types';

type AwesomeModalProps = {
  visible: boolean;
  onHide: () => void;
  parentElement?: Element;
  children?: React.ReactNode;
} & DappModalConfig;

const DappModal: React.FC<AwesomeModalProps> = ({
  visible,
  onHide,
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
  parentElement,
  children
}) => {
  if (!visible) {
    return null;
  }

  const Header = (
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

  const Footer = (
    <>
      <div className={`${styles.dappModalFooter} ${modalFooterClassName}`}>
        <div>{footerText}</div>
      </div>
    </>
  );

  return ReactDOM.createPortal(
    <div
      id='dapp-modal'
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
