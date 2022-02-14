import React from 'react';
import classNames from 'optionalPackages/classnames';
import freeSolidIcons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactBootstrap from 'optionalPackages/react-bootstrap';
import PageState from 'UI/PageState';
import { getGeneratedClasses, getWrapperClassname } from 'utils';
import { SignModalType } from '../types';

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

    if (!window.location.pathname.includes(callbackRoute)) {
      window.location.href = callbackRoute;
    }
  };

  return (
    <ReactBootstrap.Modal
      show
      backdrop='static'
      onHide={handleClose}
      className={classNames(classes.wrapper, getWrapperClassname())}
      animation={false}
      centered
    >
      <PageState
        icon={error ? freeSolidIcons.faTimes : freeSolidIcons.faHourglass}
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
    </ReactBootstrap.Modal>
  );
};

export default SignWithExtensionModal;
