import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/dapp-modal.scss';
import icons from '../../../optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from '../../../optionalPackages/react-fontawesome';

type AwesomeModalProps = {
  visible: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  headerText?: string;
  footerText?: string;
  modalDialogClassName?: string;
  modalContentClassName?: string;
  modalHeaderClassName?: string;
  modalCloseButtonClassName?: string;
  modalBodyClassName?: string;
  modalFooterClassName?: string;
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
  modalDialogClassName,
  modalContentClassName,
  modalHeaderClassName,
  modalCloseButtonClassName,
  modalBodyClassName,
  modalFooterClassName,
  parentElement,
  children
}) => {
  return visible
    ? ReactDOM.createPortal(
        <div
          id='dapp-modal'
          role='dialog'
          aria-modal='true'
          className={`${styles.dappModal} ${modalDialogClassName}`}
          onClick={onHide}
        >
          <div
            className={`${styles.dappModalContent} ${modalContentClassName}`}
          >
            {showHeader && (
              <div
                className={`${styles.dappModalHeader} ${modalHeaderClassName}`}
              >
                <div style={{ padding: '0 1rem' }}>{headerText}</div>
                <button
                  className={`${styles.dappModalCloseButton} ${modalCloseButtonClassName}`}
                  onClick={onHide}
                >
                  <ReactFontawesome.FontAwesomeIcon
                    size='lg'
                    icon={icons.faTimes}
                  />
                </button>
              </div>
            )}

            <div className={`${styles.dappModalBody} ${modalBodyClassName}`}>
              {children}
            </div>

            {showFooter && (
              <div
                className={`${styles.dappModalFooter} ${modalFooterClassName}`}
              >
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
