import React, { useEffect } from 'react';
import { faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import globalStyles from 'assets/sass/main.scss';
import { SignModalPropsType } from 'types';
import { useDappModal } from 'UI/DappModal';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { PageState } from 'UI/PageState';
import { getGeneratedClasses } from 'UI/utils';
import { safeRedirect } from 'utils';
import styles from './sing-with-extension-modal.scss';

export const SignWithExtensionModal = ({
  handleClose,
  error,
  callbackRoute,
  transactions,
  className = styles.extensionModal
}: SignModalPropsType) => {
  const classes = getGeneratedClasses(className, true, {
    wrapper: `${styles.modalContainer} ${styles.extension}`,
    icon: globalStyles.textWhite,
    closeBtn: `${globalStyles.btn} ${globalStyles.btnCloseLink} ${globalStyles.mt2}`
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
    </ModalContainer>
  );
};
