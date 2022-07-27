import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../dapp-modal.scss';
import { DappModalConfig } from '../types';
import { DappModalBody } from './DappModalBody';
import { DappModalFooter } from './DappModalFooter';
import { DappModalHeader } from './DappModalHeader';
import classNames from 'classnames';
import { WithClassname } from 'types';

type DappModalProps = {
  id?: string;
  visible: boolean;
  onHide?: () => void;
  parentElement?: Element;
  children?: React.ReactNode;
  config?: DappModalConfig;
} & WithClassname;

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
  children,
  className = 'dapp-modal-dialog-wrapper'
}) => {
  if (!visible) {
    return null;
  }

  const {
    showHeader,
    showFooter,
    headerText,
    footerText,
    modalDialogClassName = 'dapp-modal-dialog',
    modalContentClassName = 'dapp-modal-dialog-content',
    modalHeaderClassName = 'dapp-modal-dialog-header',
    modalCloseButtonClassName = 'dapp-modal-dialog-close-button',
    modalBodyClassName = 'dapp-modal-dialog-content-body',
    modalFooterClassName = 'dapp-modal-dialog-footer',
    customModalHeader,
    customModalFooter
  } = config;

  return ReactDOM.createPortal(
    <div
      id={id}
      role='dialog'
      aria-modal='true'
      className={classNames(modalDialogClassName, styles.dappModal, className)}
    >
      <div
        className={classNames(styles.dappModalContent, modalContentClassName)}
      >
        <DappModalHeader
          visible={showHeader}
          headerText={headerText}
          customHeader={customModalHeader}
          className={modalHeaderClassName}
          closeButtonClassName={modalCloseButtonClassName}
          onHide={onHide}
        />

        <DappModalBody className={modalBodyClassName}>{children}</DappModalBody>

        <DappModalFooter
          visible={showFooter}
          customFooter={customModalFooter}
          footerText={footerText}
          className={modalFooterClassName}
        />
      </div>
    </div>,
    parentElement ?? document.body
  );
};
