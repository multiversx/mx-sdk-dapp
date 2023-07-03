import React from 'react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import XPortalIcon from 'assets/icons/xportal-preview.svg';
import { CANCEL_ACTION_NAME } from 'constants/index';
import { useClearTransactionsToSignWithWarning } from 'hooks/transactions/helpers/useClearTransactionsToSignWithWarning';
import { useCancelWalletConnectAction } from 'hooks/transactions/useCancelWalletConnectAction';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';

import styles from './signWithWalletConnectModalStyles.scss';

export const SignWithWalletConnectModal = ({
  handleClose,
  transactions,
  sessionId,
  className = 'dapp-wallet-connect-modal',
  modalContentClassName
}: SignModalPropsType) => {
  const clearTransactionsToSignWithWarning =
    useClearTransactionsToSignWithWarning();

  const hasMultipleTransactions = transactions && transactions?.length > 1;

  const { cancelWalletConnectAction } =
    useCancelWalletConnectAction(CANCEL_ACTION_NAME);

  const onClose = async () => {
    clearTransactionsToSignWithWarning(sessionId);
    await cancelWalletConnectAction();
    handleClose();
  };

  const transactionLabel = hasMultipleTransactions
    ? 'transactions'
    : 'transaction';

  return (
    <ModalContainer
      onClose={handleClose}
      modalInteractionConfig={{ openOnMount: true }}
      modalConfig={{
        modalDialogClassName: classNames(
          styles.signWaitingScreenDialog,
          className
        )
      }}
    >
      <div
        className={classNames(styles.signWaitingScreen, modalContentClassName)}
      >
        <div onClick={onClose} className={styles.signWaitingScreenClose}>
          <FontAwesomeIcon icon={faTimes} />
        </div>

        <div className={styles.signWaitingScreenImageWrapper}>
          <XPortalIcon />
        </div>

        <div className={styles.signWaitingScreenText}>
          You can now confirm the {transactionLabel} on your{' '}
          <span>DeFi Wallet</span>.
        </div>
      </div>
    </ModalContainer>
  );
};
