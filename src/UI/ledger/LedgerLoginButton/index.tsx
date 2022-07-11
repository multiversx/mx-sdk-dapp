import React, { useState } from 'react';
import { useDappModal } from 'UI/DappModal';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { LedgerLoginContainer } from '../LedgerLoginContainer';
import { LedgerLoginButtonPropsType } from './types';

export const LedgerLoginButton: (
  props: LedgerLoginButtonPropsType
) => JSX.Element = ({
  token,
  callbackRoute,
  children,
  onModalOpens,
  onModalCloses,
  loginButtonText = 'Ledger',
  buttonClassName = 'ledger-login-button',
  className = 'ledger-login',
  wrapContentInsideModal = true,
  shouldRenderDefaultCss = true,
  shouldRenderDefaultModalCss = true,
  hideButtonWhenModalOpens = false,
  onLoginRedirect
}) => {
  const [canShowLoginModal, setCanShowLoginModal] = useState(false);
  const { handleShowModal, handleHideModal } = useDappModal();

  function handleOpenModal() {
    setCanShowLoginModal(true);
    handleShowModal();
    onModalOpens?.();
  }

  function handleCloseModal() {
    setCanShowLoginModal(false);
    handleHideModal();
    onModalCloses?.();
  }

  const shouldRenderButton = !hideButtonWhenModalOpens || !canShowLoginModal;

  return (
    <>
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
        <LedgerLoginContainer
          className={className}
          shouldRenderDefaultCss={shouldRenderDefaultModalCss}
          callbackRoute={callbackRoute}
          token={token}
          wrapContentInsideModal={wrapContentInsideModal}
          onClose={handleCloseModal}
          onLoginRedirect={onLoginRedirect}
        />
      )}
    </>
  );
};
