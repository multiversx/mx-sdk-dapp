import React, { Fragment, ReactNode, useState } from 'react';
import { useDappModal } from 'UI/DappModal';
import { LoginButton } from '../../LoginButton/LoginButton';
import { WalletConnectLoginContainer } from '../WalletConnectLoginContainer';

export interface WalletConnectLoginButtonPropsType {
  onModalOpens?: (props?: any) => void;
  onModalCloses?: (props?: any) => void;
  children?: ReactNode;
  lead?: string;
  title?: string;
  className?: string;
  logoutRoute?: string;
  callbackRoute?: string;
  loginButtonText?: string;
  buttonClassName?: string;
  wrapContentInsideModal?: boolean;
  hideButtonWhenModalOpens?: boolean;
  token?: string;
  isWalletConnectV2?: boolean;
  onLoginRedirect?: (callbackRoute: string) => void;
  disabled?: boolean;
}

export const WalletConnectLoginButton = ({
  children,
  callbackRoute,
  onModalOpens,
  onModalCloses,
  loginButtonText = 'Maiar App',
  title = 'Maiar Login',
  logoutRoute = '/unlock',
  wrapContentInsideModal = true,
  buttonClassName = 'wallet-connect-login-button',
  className = 'wallet-connect-login',
  lead = 'Scan the QR code using Maiar',
  token,
  hideButtonWhenModalOpens = false,
  isWalletConnectV2 = false,
  onLoginRedirect,
  disabled
}: WalletConnectLoginButtonPropsType) => {
  const [canShowLoginModal, setCanShowLoginModal] = useState(false);
  const { handleShowModal, handleHideModal } = useDappModal();

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
    <Fragment>
      {shouldRenderButton && (
        <LoginButton
          onLogin={handleOpenModal}
          customClassName={className}
          btnClassName={buttonClassName}
          text={loginButtonText}
          disabled={disabled}
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
          className={className}
          logoutRoute={logoutRoute}
          lead={lead}
          wrapContentInsideModal={wrapContentInsideModal}
          isWalletConnectV2={isWalletConnectV2}
          onClose={handleCloseModal}
          onLoginRedirect={onLoginRedirect}
        />
      )}
    </Fragment>
  );
};
