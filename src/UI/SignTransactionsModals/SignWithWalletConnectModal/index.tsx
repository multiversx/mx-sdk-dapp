import React from 'react';

import { optionalImport } from 'lib';
import PageState from 'UI/PageState';
import { getGeneratedClasses } from 'utils';
import { SignModalType } from '../types';

const { Modal } = optionalImport('react-bootstrap');

const { faHourglass, faTimes } = optionalImport(
  '@fortawesome/free-solid-svg-icons'
);

export const SignWithWalletConnectModal = ({
  error,
  handleClose,
  callbackRoute,
  transactions,
  className = 'wallet-connect-modal'
}: SignModalType) => {
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
        className={className}
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
