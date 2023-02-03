import React from 'react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { CANCEL_ACTION_NAME } from 'constants/index';
import { useClearTransactionsToSignWithWarning } from 'hooks/transactions/helpers/useClearTransactionsToSignWithWarning';
import { useCancelWalletConnectAction } from 'hooks/transactions/useCancelWalletConnectAction';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { PageState } from 'UI/PageState';

import styles from './signWithWalletConnectModalStyles.scss';

export const SignWithWalletConnectModal = ({
  error,
  handleClose,
  transactions,
  sessionId,
  className = 'dapp-wallet-connect-modal',
  modalContentClassName
}: SignModalPropsType) => {
  const clearTransactionsToSignWithWarning =
    useClearTransactionsToSignWithWarning();

  const classes = {
    wrapper: classNames(styles.modalContainer, styles.walletConnect, className),
    icon: globalStyles.textWhite,
    closeBtn: classNames(
      globalStyles.btn,
      globalStyles.btnCloseLink,
      globalStyles.btnDark,
      globalStyles.textWhite,
      globalStyles.mt2
    )
  };

  const hasMultipleTransactions = transactions && transactions?.length > 1;

  const description = `Check your phone to sign the transaction${
    hasMultipleTransactions ? 's' : ''
  }`;

  const { cancelWalletConnectAction } =
    useCancelWalletConnectAction(CANCEL_ACTION_NAME);

  const close = async () => {
    clearTransactionsToSignWithWarning(sessionId);
    await cancelWalletConnectAction();
    handleClose();
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
        title='Confirm on xPortal Mobile Wallet'
        description={error ? error : description}
        action={
          <button
            id='closeButton'
            data-testid='closeButton'
            onClick={close}
            className={classes.closeBtn}
          >
            Cancel
          </button>
        }
      />
    </ModalContainer>
  );
};
