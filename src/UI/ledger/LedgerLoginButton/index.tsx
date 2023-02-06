import React, { ReactNode, useState } from 'react';

import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import { useGetIsLoggedIn } from 'hooks/account/useGetIsLoggedIn';
import { useDappModal } from 'UI/DappModal';
import { LoginButton } from 'UI/LoginButton/LoginButton';

import type { OnProviderLoginType } from '../../../types';
import type { WithClassnameType } from '../../types';
import type { innerLedgerComponentsClassNameType } from '../LedgerLoginContainer/types';

import { LedgerLoginContainer } from '../LedgerLoginContainer';

export interface LedgerLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  onModalOpens?: (props?: any) => void;
  onModalCloses?: (props?: any) => void;
  children?: ReactNode;
  modalClassName?: string;
  buttonClassName?: string;
  loginButtonText?: string;
  wrapContentInsideModal?: boolean;
  hideButtonWhenModalOpens?: boolean;
  disabled?: boolean;
  customSpinnerComponent?: ReactNode;
  innerLedgerComponentsClassName?: innerLedgerComponentsClassNameType;
}

export const LedgerLoginButton: (
  props: LedgerLoginButtonPropsType
) => JSX.Element = ({
  token,
  callbackRoute,
  nativeAuth,
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
  disabled,
  customSpinnerComponent,
  innerLedgerComponentsClassName
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
          nativeAuth={nativeAuth}
          wrapContentInsideModal={wrapContentInsideModal}
          onClose={handleCloseModal}
          onLoginRedirect={onLoginRedirect}
          customSpinnerComponent={customSpinnerComponent}
          innerLedgerComponentsClassName={innerLedgerComponentsClassName}
        />
      )}
    </>
  );
};
