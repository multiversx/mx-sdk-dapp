import React from 'react';
import { faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import PageState from 'UI/PageState';
import { getGeneratedClasses } from 'utils';
import useSignWithProvider from '../useSignWithProvider';
import { SignModalType } from './types';

export const SignWithWalletConnectModal = ({
  error,
  setError,
  handleClose,
  className = 'wallet-connect-modal'
}: SignModalType) => {
  const [callbackRoute, transactions] = useSignWithProvider({
    setError,
    handleClose
  });

  const classes = getGeneratedClasses(className, true, {
    wrapper: 'modal-container wallet-connect',
    icon: 'text-white',
    closeBtn: 'btn btn-close-link mt-2'
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
      onHide={close}
      className={classes.wrapper}
      animation={false}
      centered
    >
      <PageState
        icon={error ? faTimes : faHourglass}
        iconClass={classes.icon}
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
            className={classes.closeBtn}
          >
            Close
          </a>
        }
      />
    </Modal>
  );
};

export default SignWithWalletConnectModal;
