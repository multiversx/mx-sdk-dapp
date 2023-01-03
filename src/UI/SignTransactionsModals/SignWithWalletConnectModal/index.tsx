import React from 'react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { CANCEL_ACTION_NAME } from 'constants/index';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useClearTransactionsToSignWithWarning } from 'hooks/transactions/helpers/useClearTransactionsToSignWithWarning';
import { useCancelWalletConnectAction } from 'hooks/transactions/useCancelWalletConnectAction';
import { SignModalPropsType } from 'types';
import { LoginMethodsEnum } from 'types/enums.types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { PageState } from 'UI/PageState';
import { getProviderType } from 'utils';
import { WalletConnectConnectionStatus } from '../components';

import styles from './signWithWalletConnectModalStyles.scss';

export const SignWithWalletConnectModal = ({
  error,
  handleClose,
  transactions,
  sessionId,
  className = 'dapp-wallet-connect-modal',
  modalContentClassName
}: SignModalPropsType) => {
  const clearTransactionsToSignWithWarning = useClearTransactionsToSignWithWarning();
  const { provider } = useGetAccountProvider();
  const providerType = getProviderType(provider);

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
  const isSigningWithWalletConnectV2 =
    providerType === LoginMethodsEnum.walletconnectv2;

  const description = `Check your phone to sign the transaction${
    hasMultipleTransactions ? 's' : ''
  }`;

  const { cancelWalletConnectAction } = useCancelWalletConnectAction(
    CANCEL_ACTION_NAME
  );

  const close = async () => {
    clearTransactionsToSignWithWarning(sessionId);
    await cancelWalletConnectAction();
    handleClose();
  };

  const Description = () => (
    <>
      {isSigningWithWalletConnectV2 ? (
        <WalletConnectConnectionStatus description={description} />
      ) : (
        description
      )}
    </>
  );

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
        title='Confirm on Maiar'
        description={error ? error : <Description />}
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
