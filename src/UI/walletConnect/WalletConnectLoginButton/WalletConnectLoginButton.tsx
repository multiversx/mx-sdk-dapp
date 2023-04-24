import React, { ReactNode, useState } from 'react';

import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { useDappModal } from 'UI/DappModal';

import { OnProviderLoginType } from '../../../types';
import { LoginButton } from '../../LoginButton/LoginButton';
import { WithClassnameType } from '../../types';
import { InnerWalletConnectComponentsClassesType } from '../types';

import { WalletConnectLoginContainer } from '../WalletConnectLoginContainer';

export interface WalletConnectLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  onModalOpens?: (props?: any) => void;
  onModalCloses?: (props?: any) => void;
  children?: ReactNode;
  lead?: string;
  title?: string;
  modalClassName?: string;
  logoutRoute?: string;
  loginButtonText?: string;
  buttonClassName?: string;
  wrapContentInsideModal?: boolean;
  hideButtonWhenModalOpens?: boolean;
  isWalletConnectV2?: boolean;
  disabled?: boolean;
  innerWalletConnectComponentsClasses?: InnerWalletConnectComponentsClassesType;
  customSpinnerComponent?: ReactNode;
  showScamPhishingAlert?: boolean;
}

export const WalletConnectLoginButton = ({
  children,
  callbackRoute,
  onModalOpens,
  onModalCloses,
  loginButtonText = 'xPortal App',
  title = 'Login with the xPortal App',
  logoutRoute = '/unlock',
  wrapContentInsideModal = true,
  buttonClassName = 'dapp-wallet-connect-login-button',
  className = 'dapp-wallet-connect-login',
  modalClassName,
  lead = 'Scan the QR code using the xPortal App',
  token,
  nativeAuth,
  hideButtonWhenModalOpens = false,
  isWalletConnectV2 = true,
  onLoginRedirect,
  disabled,
  innerWalletConnectComponentsClasses,
  showScamPhishingAlert,
  customSpinnerComponent
}: WalletConnectLoginButtonPropsType) => {
  const [canShowLoginModal, setCanShowLoginModal] = useState(false);
  const { handleShowModal, handleHideModal } = useDappModal();
  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);

  const handleOpenModal = () => {
    setCanShowLoginModal(true);
    handleShowModal();
    onModalOpens?.();
  };

  const handleCloseModal = () => {
    setCanShowLoginModal(false);
    handleHideModal();
    onModalCloses?.();
  };

  const shouldRenderButton = !hideButtonWhenModalOpens || !canShowLoginModal;

  return (
    <>
      {shouldRenderButton && (
        <LoginButton
          onLogin={handleOpenModal}
          className={className}
          btnClassName={buttonClassName}
          text={loginButtonText}
          disabled={disabled || disabledConnectButton}
        >
          {children}
        </LoginButton>
      )}

      {canShowLoginModal && (
        <WalletConnectLoginContainer
          callbackRoute={callbackRoute}
          loginButtonText={loginButtonText}
          title={title}
          token={token}
          className={modalClassName}
          logoutRoute={logoutRoute}
          lead={lead}
          nativeAuth={nativeAuth}
          wrapContentInsideModal={wrapContentInsideModal}
          isWalletConnectV2={isWalletConnectV2}
          onClose={handleCloseModal}
          onLoginRedirect={onLoginRedirect}
          showScamPhishingAlert={showScamPhishingAlert}
          customSpinnerComponent={customSpinnerComponent}
          innerWalletConnectComponentsClasses={
            innerWalletConnectComponentsClasses
          }
        />
      )}
    </>
  );
};
