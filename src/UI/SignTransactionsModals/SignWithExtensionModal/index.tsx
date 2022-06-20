import React from 'react';
import { faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import { SignModalPropsType } from 'types';
import PageState from 'UI/PageState';
import { getGeneratedClasses } from 'UI/utils';
import { safeRedirect } from 'utils';

const SignWithExtensionModal = ({
  handleClose,
  error,
  callbackRoute,
  transactions,
  className = 'extension-modal'
}: SignModalPropsType) => {
  const classes = getGeneratedClasses(className, true, {
    wrapper: 'modal-container extension',
    icon: 'text-white',
    closeBtn: 'btn btn-close-link mt-2'
  });
  const description = error
    ? error
    : transactions && transactions.length > 1
    ? 'Check your Elrond Wallet Extension to sign the transactions'
    : 'Check your Elrond Wallet Extension to sign the transaction';

  const close = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClose();
    if (
      callbackRoute != null &&
      !window.location.pathname.includes(callbackRoute)
    ) {
      safeRedirect(callbackRoute);
    }
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
          <button
            id='closeButton'
            data-testid='closeButton'
            onClick={close}
            className={classes.closeBtn}
          >
            Close
          </button>
        }
      />
    </Modal>
  );
};

export default SignWithExtensionModal;
