import React, { ReactNode } from 'react';

import { useGetModalLoginMethods } from 'hooks';

import { OnProviderLoginType } from '../../../types';
import { LoginButton } from '../../LoginButton/LoginButton';
import { WithClassnameType } from '../../types';
import { InnerWalletConnectComponentsClassesType } from '../types';
import { WalletConnectLoginContainer } from '../WalletConnectLoginContainer';

export interface WalletConnectLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  buttonClassName?: string;
  children?: ReactNode;
  customSpinnerComponent?: ReactNode;
  disabled?: boolean;
  hideButtonWhenModalOpens?: boolean;
  innerWalletConnectComponentsClasses?: InnerWalletConnectComponentsClassesType;
  isWalletConnectV2?: boolean;
  lead?: string;
  loginButtonText?: string;
  logoutRoute?: string;
  modalClassName?: string;
  onContentHide?: (props?: any) => void;
  onContentShow?: (props?: any) => void;
  onModalCloses?: (props?: any) => void;
  onModalOpens?: (props?: any) => void;
  showScamPhishingAlert?: boolean;
  title?: string;
  wrapContentInsideModal?: boolean;
}

export const WalletConnectLoginButton = ({
  buttonClassName = 'dapp-wallet-connect-login-button',
  callbackRoute,
  children,
  className = 'dapp-wallet-connect-login',
  customSpinnerComponent,
  'data-testid': dataTestId,
  disabled,
  hideButtonWhenModalOpens = false,
  innerWalletConnectComponentsClasses,
  isWalletConnectV2 = true,
  lead = 'Scan the QR code using the xPortal App',
  loginButtonText = 'xPortal App',
  logoutRoute,
  modalClassName,
  nativeAuth,
  onLoginRedirect,
  onContentHide,
  onContentShow,
  onModalCloses,
  onModalOpens,
  showScamPhishingAlert,
  title = 'Login with the xPortal App',
  token,
  wrapContentInsideModal = true
}: WalletConnectLoginButtonPropsType) => {
  const {
    disabledConnectButton,
    handleCloseModal,
    handleOpenModal,
    shouldRenderButton,
    showContent
  } = useGetModalLoginMethods({
    hideButtonWhenModalOpens,
    onContentHide,
    onContentShow,
    onModalCloses,
    onModalOpens,
    token,
    wrapContentInsideModal
  });

  return (
    <>
      {shouldRenderButton && (
        <LoginButton
          btnClassName={buttonClassName}
          className={className}
          data-testid={dataTestId}
          disabled={disabled || disabledConnectButton}
          onLogin={handleOpenModal}
          text={loginButtonText}
        >
          {children}
        </LoginButton>
      )}

      <WalletConnectLoginContainer
        callbackRoute={callbackRoute}
        className={modalClassName}
        customSpinnerComponent={customSpinnerComponent}
        innerWalletConnectComponentsClasses={
          innerWalletConnectComponentsClasses
        }
        isWalletConnectV2={isWalletConnectV2}
        lead={lead}
        loginButtonText={loginButtonText}
        logoutRoute={logoutRoute}
        nativeAuth={nativeAuth}
        onClose={handleCloseModal}
        onLoginRedirect={onLoginRedirect}
        showLoginContent={showContent}
        showScamPhishingAlert={showScamPhishingAlert}
        title={title}
        token={token}
        wrapContentInsideModal={wrapContentInsideModal}
      />
    </>
  );
};
