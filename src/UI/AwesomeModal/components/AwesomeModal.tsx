import React from 'react';
import ReactDOM from 'react-dom';
// import { wrapperClassName } from 'utils';
const wrapperClassName = '';

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
}) =>
  visible
    ? ReactDOM.createPortal(
        <div className={`${wrapperClassName} awesome-modal`}>
          <div
            className={`${wrapperClassName} awesome-modal-pop`}
            role='dialog'
            aria-modal='true'
          >
            {children}
            <button type='button' onClick={toggle}>
              Close
            </button>
          </div>
          <div className={`${wrapperClassName} awesome-modal-overlay`}></div>
        </div>,
        parentElement ?? document.body
      )
    : null;

export default AwesomeModal;
