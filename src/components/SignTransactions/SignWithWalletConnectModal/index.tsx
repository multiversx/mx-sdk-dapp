import * as React from 'react';
import { faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import PageState from 'UI/PageState';
import useSignWithProvider from '../useSignWithProvider';
import { SignModalType } from './types';

export const SignWithWalletConnectModal = ({
  error,
  setError,
  handleClose
}: SignModalType) => {
  const [callbackRoute, transactions] = useSignWithProvider({
    setError,
    handleClose
  });

  const hasMultipleTransactions = transactions && transactions?.length > 1;
  const description = `Check your phone to sign the transaction${
    hasMultipleTransactions ? 's' : ''
  }`;

  const close = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClose();
    window.location.href = callbackRoute;
  };

  return (
    <Modal
      show
      backdrop='static'
      onHide={handleClose}
      className='modal-container'
      animation={false}
      centered
    >
      <PageState
        icon={error ? faTimes : faHourglass}
        iconClass='text-white'
        iconBgClass={error ? 'bg-danger' : 'bg-warning'}
        iconSize='3x'
        title='Confirm on Maiar'
        description={description}
        action={
          <a
            href='/'
            id='closeButton'
            data-testid='closeButton'
            onClick={close}
            className='btn btn-close-link mt-2'
          >
            Close
          </a>
        }
      />
    </Modal>
  );
};

export default SignWithWalletConnectModal;
