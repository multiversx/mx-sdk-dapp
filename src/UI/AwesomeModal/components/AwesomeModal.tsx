import React from 'react';
import ReactDOM from 'react-dom';
// import { wrapperClassName } from 'utils';
const wrapperClassName = '';

type AwesomeModalProps = {
  visible: boolean;
  toggle: () => void;
  parentElement?: Element;
};

const AwesomeModal: React.FC<AwesomeModalProps> = ({
  visible,
  toggle,
  parentElement
}) =>
  visible
    ? ReactDOM.createPortal(
        <div className={`${wrapperClassName} awesome-modal`}>
          <div
            className={`${wrapperClassName} awesome-modal-pop`}
            role='dialog'
            aria-modal='true'
          >
            <h3>Hello World</h3>
            <p>
              Et sit saepe velit tenetur et consequatur in. Nihil doloribus
              nulla nulla rem. Soluta illo et asperiores numquam earum nesciunt.
              Vero odio voluptatem sunt sunt laboriosam.
            </p>
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
