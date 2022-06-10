import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/dapp-modal.scss';

type AwesomeModalProps = {
  visible: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  headerText?: string;
  footerText?: string;
  onHide: () => void;
  parentElement?: Element;
  children?: React.ReactNode;
};

const DappModal: React.FC<AwesomeModalProps> = ({
  visible,
  onHide,
  showHeader,
  showFooter,
  headerText,
  footerText,
  parentElement,
  children
}) => {
  return visible
    ? ReactDOM.createPortal(
        <div className={styles.dappModal}>
          <div
            className={styles.dappModalContent}
            role='dialog'
            aria-modal='true'
          >
            {showHeader && (
              <div className={styles.dappModalHeader}>
                <span className={styles.dappModalClose} onClick={onHide}>
                  &times;
                </span>
                <h2>{headerText}</h2>
              </div>
            )}

            <div className={styles.dappModalBody}>{children}</div>

            {showFooter && (
              <div className={styles.dappModalFooter}>
                <h3>{footerText}</h3>
              </div>
            )}
          </div>
        </div>,
        parentElement ?? document.body
      )
    : null;
};

export default DappModal;
