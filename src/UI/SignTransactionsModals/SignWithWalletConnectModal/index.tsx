import React from 'react';
import { faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { PageState } from 'UI/PageState';
import { safeRedirect } from 'utils/redirect';
import styles from './sign-with-wallet-connect-modal.scss';
import globalStyles from 'assets/sass/main.scss';
import classNames from 'classnames';

export const SignWithWalletConnectModal = ({
  error,
  handleClose,
  callbackRoute,
  transactions,
  className = 'dapp-wallet-connect-modal',
  modalContentClassName
}: SignModalPropsType) => {
  const classes = {
    wrapper: classNames(styles.modalContainer, styles.walletConnect, className),
    icon: globalStyles.textWhite,
    closeBtn: classNames(
      globalStyles.btn,
      globalStyles.btnCloseLink,
      globalStyles.mt2
    )
  };

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

  return (
    <ModalContainer
      onClose={close}
      modalConfig={{
        modalDialogClassName: classes.wrapper
      }}
      modalInteractionConfig={{
        openOnMount: true
      }}
    >
      <PageState
        icon={error ? faTimes : faHourglass}
        iconClass={classes.icon}
        className={modalContentClassName}
        iconBgClass={error ? globalStyles.bgDanger : globalStyles.bgWarning}
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
