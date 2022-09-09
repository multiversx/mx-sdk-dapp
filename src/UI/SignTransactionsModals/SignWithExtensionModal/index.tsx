import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { getIsPathameEqualToCallbackRoute } from 'hooks/transactions/helpers/getIsSamePathnameAsCallbackRoute';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { PageState } from 'UI/PageState';
import { safeRedirect } from 'utils';
import styles from './signWithExtensionModalStyles.scss';

export const SignWithExtensionModal = ({
  handleClose,
  error,
  callbackRoute,
  transactions,
  className = 'dapp-extension-modal',
  modalContentClassName
}: SignModalPropsType) => {
  const classes = {
    wrapper: classNames(styles.modalContainer, styles.extension, className),
    icon: globalStyles.textWhite,
    closeBtn: classNames(
      globalStyles.btn,
      globalStyles.btnCloseLink,
      globalStyles.btnDark,
      globalStyles.textWhite,
      globalStyles.mt2
    )
  };

  const description = error
    ? error
    : transactions && transactions.length > 1
    ? 'Check your Elrond Wallet Extension to sign the transactions'
    : 'Check your Elrond Wallet Extension to sign the transaction';

  const close = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClose();
    const isPathameEqualToCallbackRoute = getIsPathameEqualToCallbackRoute(
      callbackRoute
    );
    if (callbackRoute != null && !isPathameEqualToCallbackRoute) {
      safeRedirect(callbackRoute);
    }
  };

  return (
    <ModalContainer
      onClose={handleClose}
      modalConfig={{
        modalDialogClassName: classes.wrapper
      }}
      modalInteractionConfig={{
        openOnMount: true
      }}
    >
      <PageState
        icon={error ? faTimes : null}
        iconClass={classes.icon}
        className={modalContentClassName}
        iconBgClass={error ? globalStyles.bgDanger : globalStyles.bgWarning}
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
