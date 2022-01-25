import React from 'react';
import { Modal } from 'lib/react-bootstrap';
import PageState from 'UI/PageState';
import { getGeneratedClasses, optionalImport } from 'utils';
import { SignModalType } from '../types';
const { faHourglass, faTimes } = optionalImport(
  '@fortawesome/free-solid-svg-icons'
);
// const { Modal } = optionalImport('react-bootstrap');

const SignWithExtensionModal = ({
  handleClose,
  error,
  callbackRoute,
  transactions,
  className = 'extension-modal'
}: SignModalType) => {
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
        className={className}
        iconBgClass={error ? 'bg-danger' : 'bg-warning'}
        iconSize='3x'
        title='Confirm on Maiar DeFi Wallet'
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
