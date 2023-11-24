import React, { useRef } from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useWalletConnectV2Login } from 'hooks/login/useWalletConnectV2Login';
import { ModalContainer } from 'UI/ModalContainer';
import { WalletConnectLoginModalPropsType } from './types';
import { WalletConnectLoginContent } from './WalletConnectLoginContent';

const WalletConnectLoginContainerComponent = (
  props: WalletConnectLoginModalPropsType & WithStylesImportType
) => {
  const {
    callbackRoute,
    className,
    logoutRoute,
    nativeAuth,
    onClose,
    onLoginRedirect,
    showLoginContent,
    showLoginModal,
    token,
    wrapContentInsideModal,
    styles
  } = props;

  const canLoginRef = useRef<boolean>(true);

  const [, , { cancelLogin }] = useWalletConnectV2Login({
    callbackRoute,
    token,
    nativeAuth,
    onLoginRedirect,
    logoutRoute,
    canLoginRef
  });

  const onCloseModal = async () => {
    await cancelLogin();
    onClose?.();
  };

  if (showLoginContent === false) {
    return null;
  }

  if (!wrapContentInsideModal) {
    return <WalletConnectLoginContent {...props} canLoginRef={canLoginRef} />;
  }

  return (
    <ModalContainer
      className={className}
      modalConfig={{
        headerText: 'Login using the xPortal App',
        showHeader: true,
        modalContentClassName: styles?.xPortalModalDialogContent,
        modalHeaderClassName: styles?.xPortalModalHeader,
        modalHeaderTextClassName: styles?.xPortalModalHeaderText,
        modalCloseButtonClassName: styles?.xPortalModalCloseButton,
        modalBodyClassName: styles?.xPortalModalBody,
        modalDialogClassName: styles?.xPortalLoginContainer
      }}
      onClose={onCloseModal}
      visible={showLoginModal}
    >
      <WalletConnectLoginContent {...props} canLoginRef={canLoginRef} />
    </ModalContainer>
  );
};

export const WalletConnectLoginContainer = withStyles(
  WalletConnectLoginContainerComponent,
  {
    local: () =>
      import(
        'UI/walletConnect/WalletConnectLoginContainer/walletConnectLoginContainerStyles.scss'
      )
  }
);
