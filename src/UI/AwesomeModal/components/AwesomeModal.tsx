import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/awesome-modal.module.css';

console.log(styles);

type AwesomeModalProps = {
  visible: boolean;
  toggle: () => void;
  parentElement?: Element;
  children?: React.ReactNode;
};

const AwesomeModal: React.FC<AwesomeModalProps> = ({
  visible,
  toggle,
  parentElement,
  children
}) => {
  console.log(styles);
  return visible
    ? ReactDOM.createPortal(
        <div className={styles.awesomeModal}>
          <div
            className={styles.awesomeModalPop}
            role='dialog'
            aria-modal='true'
          >
            {children}
            <button type='button' onClick={toggle}>
              Close
            </button>
          </div>
          <div className={styles.awesomeModalOverlay}></div>
        </div>,
        parentElement ?? document.body
      )
    : null;
};

export default AwesomeModal;
