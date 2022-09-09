import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { CANCEL_ACTION_NAME } from 'constants/index';
import { getIsPathameEqualToCallbackRoute } from 'hooks/transactions/helpers/getIsSamePathnameAsCallbackRoute';
import { useCancelWalletConnectAction } from 'hooks/transactions/useCancelWalletConnectAction';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { clearAllTransactionsToSign } from 'reduxStore/slices';
import { SignModalPropsType } from 'types';
import { ModalContainer } from 'UI/ModalContainer/ModalContainer';
import { PageState } from 'UI/PageState';
import { safeRedirect } from 'utils/redirect';
import styles from './signWithWalletConnectModalStyles.scss';

export const SignWithWalletConnectModal = ({
  error,
  handleClose,
  callbackRoute,
  transactions,
  className = 'dapp-wallet-connect-modal',
  modalContentClassName
}: SignModalPropsType) => {
  const dispatch = useDispatch();

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
  const description = error
    ? error
    : `Check your phone to sign the transaction${
        hasMultipleTransactions ? 's' : ''
      }`;

  const { cancelWalletConnectAction } = useCancelWalletConnectAction(
    CANCEL_ACTION_NAME
  );

  const close = async () => {
    handleClose();

    dispatch(clearAllTransactionsToSign());

    await cancelWalletConnectAction();
    const isPathameEqualToCallbackRoute = getIsPathameEqualToCallbackRoute(
      callbackRoute
    );
    if (callbackRoute != null && !isPathameEqualToCallbackRoute) {
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
        icon={error ? faTimes : null}
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
