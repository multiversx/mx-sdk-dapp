import React, { useRef } from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { ModalContainer } from 'UI/ModalContainer';
import { WalletConnectLoginModalPropsType } from './types';
import { WalletConnectLoginContent } from './WalletConnectLoginContent';

const WalletConnectLoginContainerComponent = (
  props: WalletConnectLoginModalPropsType & WithStylesImportType
) => {
  const {
    className,
    onClose,
    showLoginContent,
    showLoginModal,
    wrapContentInsideModal,
    styles,
    canLoginRef: parentCanLoginRef
  } = props;

  const canLoginRef = parentCanLoginRef ?? useRef<boolean>(true);

  const onCloseModal = async () => {
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
    ssrStyles: () =>
      import(
        'UI/walletConnect/WalletConnectLoginContainer/walletConnectLoginContainerStyles.scss'
      ),
    clientStyles: () =>
      require('UI/walletConnect/WalletConnectLoginContainer/walletConnectLoginContainerStyles.scss')
        .default
  }
);
