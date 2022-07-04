import React, { Fragment, ReactNode, useState } from 'react';
import { useDappModal } from 'UI/DappModal';
import { WalletConnectLoginContainer } from '../WalletConnectLoginContainer';
import { LoginButton } from '../../LoginButton/LoginButton';

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
  shouldRenderDefaultCss?: boolean;
  wrapContentInsideModal?: boolean;
  hideButtonWhenModalOpens?: boolean;
  token?: string;
}

export const WalletConnectLoginButton = ({
  children,
  callbackRoute,
  onModalOpens,
  onModalCloses,
  loginButtonText = 'Maiar App',
  title = 'Maiar Login',
  logoutRoute = '/unlock',
  shouldRenderDefaultCss = true,
  wrapContentInsideModal = true,
  buttonClassName = 'wallet-connect-login-button',
  className = 'wallet-connect-login',
  lead = 'Scan the QR code using Maiar',
  token,
  hideButtonWhenModalOpens = false
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
          shouldRenderDefaultCss={shouldRenderDefaultCss}
          customClassName={className}
          btnClassName={buttonClassName}
          text={loginButtonText}
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
          onClose={handleCloseModal}
        />
      )}
    </Fragment>
  );
};

export default WalletConnectLoginButton;
