import React from 'react';
import { faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import PageState from 'UI/PageState';
import { getGeneratedClasses } from 'utils';
import { HandleCloseType } from '../helpers';
import useSignWithProvider from '../useSignWithProvider';

export interface SignModalType {
  handleClose: (props?: HandleCloseType) => void;
  error: string;
  setError: (value: React.SetStateAction<string>) => void;
  className?: string;
}

const SignWithExtensionModal = ({
  handleClose,
  error,
  setError,
  className = 'extension-modal'
}: SignModalType) => {
  const [callbackRoute, transactions] = useSignWithProvider({
    handleClose,
    setError
  });

  const classes = getGeneratedClasses(className, true, {
    wrapper: 'modal-container extension',
    icon: 'text-white',
    closeBtn: 'btn btn-close-link mt-2'
  });

  const description =
    transactions && transactions.length > 1
      ? 'Check your Elrond Wallet Extension to sign the transactions'
      : 'Check your Elrond Wallet Extension to sign the transaction';

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
      className={classes.wrapper}
      animation={false}
      centered
    >
      <PageState
        icon={error ? faTimes : faHourglass}
        iconClass={classes.icon}
        iconBgClass={error ? 'bg-danger' : 'bg-warning'}
        iconSize='3x'
        title='Confirm on Elrond Wallet Extension'
        description={description}
        action={
          <a
            href='/'
            id='closeButton'
            data-testid='closeButton'
            onClick={close}
            className={classes.closeBtn}
          >
            Close
          </a>
        }
      />
    </Modal>
  );
};

export default SignWithExtensionModal;
