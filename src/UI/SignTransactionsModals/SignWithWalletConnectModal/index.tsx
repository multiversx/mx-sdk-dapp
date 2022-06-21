import React, { useEffect } from 'react';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import { SignModalPropsType } from 'types';
import useDappModal from 'UI/DappModal/hooks/useDappModal';
import PageState from 'UI/PageState';
import { getGeneratedClasses, safeRedirect } from 'utils';
import ModalContainer from 'UI/ModalContainer/ModalContainer';

export const SignWithWalletConnectModal = ({
  error,
  handleClose,
  callbackRoute,
  transactions,
  className = 'wallet-connect-modal'
}: SignModalPropsType) => {
  const classes = getGeneratedClasses(className, true, {
    wrapper: 'modal-container wallet-connect',
    icon: 'text-white',
    closeBtn: 'btn btn-close-link mt-2'
  });

  const hasMultipleTransactions = transactions && transactions?.length > 1;
  const description = error
    ? error
    : `Check your phone to sign the transaction${
        hasMultipleTransactions ? 's' : ''
      }`;

  const close = () => {
    handleClose();
    if (
      callbackRoute != null &&
      !window.location.pathname.includes(callbackRoute)
    ) {
      safeRedirect(callbackRoute);
    }
  };

  const { handleShowModal } = useDappModal({
    modalDialogClassName: classes.wrapper
  });

  useEffect(() => {
    handleShowModal();
  }, []);

  return (
    <ModalContainer
      onClose={close}
      modalConfig={{
        modalDialogClassName: classes.wrapper
      }}
    >
      <PageState
        icon={error ? icons.faTimes : icons.faHourglass}
        iconClass={classes.icon}
        className={className}
        iconBgClass={error ? 'bg-danger' : 'bg-warning'}
        iconSize='3x'
        title='Confirm on Maiar'
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
    </ModalContainer>
  );
};

export default SignWithWalletConnectModal;
