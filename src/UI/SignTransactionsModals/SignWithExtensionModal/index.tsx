import React, { useEffect } from 'react';
import freeSolidIcons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import { SignModalPropsType } from 'types';
import PageState from 'UI/PageState';
import { getGeneratedClasses, safeRedirect } from 'utils';
import useDappModal from '../../DappModal/hooks/useDappModal';
import ModalContainer from '../../ModalContainer';

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

  const { handleShowModal } = useDappModal();

  useEffect(() => {
    handleShowModal();
  }, []);

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
    <ModalContainer
      onClose={handleClose}
      modalConfig={{
        modalDialogClassName: classes.wrapper
      }}
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

export default SignWithExtensionModal;
