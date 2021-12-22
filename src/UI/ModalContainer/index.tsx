import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap';

const ModalContainer = ({
  children,
  noSpacer,
  className,
  title,
  onClose
}: {
  children: React.ReactNode;
  noSpacer?: boolean;
  className?: string;
  title: React.ReactNode;
  onClose?: () => void;
}) => {
  return (
    <Modal
      show
      backdrop='static'
      onHide={onClose}
      className={`modal-container ${className ? className : ''}`}
      animation={false}
      centered
    >
      <div className='modal-card card w-100'>
        <div className='card-title h5 mb-0'>
          <div className='d-flex justify-content-between align-items-center pt-spacer px-spacer mb-0'>
            <div className={'px-3'}>{title}</div>
            <button
              type='button'
              className='btn btn-light px-3 py-2'
              onClick={onClose}
            >
              <FontAwesomeIcon size='lg' icon={faTimes} />
            </button>
          </div>
        </div>

        <div
          className={`modal-card-body text-center ${
            noSpacer ? 'p-0' : 'p-spacer'
          }`}
        >
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default ModalContainer;
