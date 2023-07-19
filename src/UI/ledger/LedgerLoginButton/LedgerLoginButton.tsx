import React, { ReactNode, useState } from 'react';

import { SECOND_LOGIN_ATTEMPT_ERROR } from 'constants/errorsMessages';
import { useGetIsLoggedIn } from 'hooks/account/useGetIsLoggedIn';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { useDappModal } from 'UI/DappModal';
import { LoginButton } from 'UI/LoginButton/LoginButton';

import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
import { LedgerLoginContainer } from '../LedgerLoginContainer';
import { InnerLedgerComponentsClassesType } from '../LedgerLoginContainer/types';

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
  innerLedgerComponentsClasses?: InnerLedgerComponentsClassesType;
  showProgressBar?: boolean;
  showScamPhishingAlert?: boolean;
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
  'data-testid': dataTestId,
  loginButtonText = 'Ledger',
  buttonClassName = 'dapp-ledger-login-button',
  className = 'dapp-ledger-login',
  modalClassName,
  wrapContentInsideModal = true,
  hideButtonWhenModalOpens = false,
  onLoginRedirect,
  disabled,
  customSpinnerComponent,
  innerLedgerComponentsClasses,
  showProgressBar = true,
  showScamPhishingAlert = true
}) => {
  const isLoggedIn = useGetIsLoggedIn();
  const [canShowLoginModal, setCanShowLoginModal] = useState(false);
  const { handleShowModal, handleHideModal } = useDappModal();
  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);

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
          data-testid={dataTestId}
          disabled={disabled || disabledConnectButton}
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
          innerLedgerComponentsClasses={innerLedgerComponentsClasses}
          showProgressBar={showProgressBar}
          showScamPhishingAlert={showScamPhishingAlert}
        />
      )}
    </>
  );
};
