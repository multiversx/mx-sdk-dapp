import React, { ReactNode, useState } from 'react';
import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import { useGetIsLoggedIn } from 'hooks/account/useGetIsLoggedIn';
import { useDappModal } from 'UI/DappModal';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { WithClassnameType } from '../../types';
import { LedgerLoginContainer } from '../LedgerLoginContainer';

export interface LedgerLoginButtonPropsType extends WithClassnameType {
  token?: string;
  onModalOpens?: (props?: any) => void;
  onModalCloses?: (props?: any) => void;
  children?: ReactNode;
  modalClassName?: string;
  buttonClassName?: string;
  callbackRoute?: string;
  loginButtonText?: string;
  wrapContentInsideModal?: boolean;
  hideButtonWhenModalOpens?: boolean;
  onLoginRedirect?: (callbackRoute: string) => void;
  disabled?: boolean;
}

export const LedgerLoginButton: (
  props: LedgerLoginButtonPropsType
) => JSX.Element = ({
  token,
  callbackRoute,
  children,
  onModalOpens,
  onModalCloses,
  loginButtonText = 'Ledger',
  buttonClassName = 'dapp-ledger-login-button',
  className = 'dapp-ledger-login',
  modalClassName,
  wrapContentInsideModal = true,
  hideButtonWhenModalOpens = false,
  onLoginRedirect,
  disabled
}) => {
  const isLoggedIn = useGetIsLoggedIn();
  const [canShowLoginModal, setCanShowLoginModal] = useState(false);
  const { handleShowModal, handleHideModal } = useDappModal();

  function handleOpenModal() {
    if (isLoggedIn) {
      throw new Error(SECOND_LOGIN_ATTEMPT_ERROR);
    }
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
          className={className}
          btnClassName={buttonClassName}
          text={loginButtonText}
          disabled={disabled}
        >
          {children}
        </LoginButton>
      )}
      {canShowLoginModal && (
        <LedgerLoginContainer
          className={modalClassName}
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
