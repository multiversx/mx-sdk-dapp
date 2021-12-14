import * as React from 'react';
import { faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import PageState from '../../../UI/PageState';
import { HandleCloseType } from '../helpers';
import useSignWithProvider from '../useSignWithProvider';

export interface SignModalType {
  handleClose: (props?: HandleCloseType) => void;
  error: string;
  setError: (value: React.SetStateAction<string>) => void;
}

const SignWithWalletConnectModal = ({
  handleClose,
  error,
  setError
}: SignModalType) => {
  const [callbackRoute, transactions] = useSignWithProvider({
    handleClose,
    setError
  });

  const description =
    transactions && transactions?.length > 1
      ? 'Check your phone to sign the transactions'
      : 'Check your phone to sign the transaction';

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
