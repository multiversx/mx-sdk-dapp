import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../dapp-modal.scss';
import { DappModalConfig } from '../types';
import { DappModalBody } from './DappModalBody';
import { DappModalFooter } from './DappModalFooter';
import { DappModalHeader } from './DappModalHeader';

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

export const DappModal: React.FC<DappModalProps> = ({
  id = 'dapp-modal',
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

  return ReactDOM.createPortal(
    <div
      id={id}
      role='dialog'
      aria-modal='true'
      className={`${styles.dappModal} ${modalDialogClassName}`}
      onClick={onHide}
    >
      <div className={`${styles.dappModalContent} ${modalContentClassName}`}>
        <DappModalHeader
          visible={showHeader}
          headerText={headerText}
          customHeader={customModalHeader}
          headerClassName={modalHeaderClassName}
          closeButtonClassName={modalCloseButtonClassName}
          onHide={onHide}
        />

        <DappModalBody bodyClassName={modalBodyClassName}>
          {children}
        </DappModalBody>

        <DappModalFooter
          visible={showFooter}
          customFooter={customModalFooter}
          footerText={footerText}
          footerClassName={modalFooterClassName}
        />
      </div>
    </div>,
    parentElement ?? document.body
  );
};
