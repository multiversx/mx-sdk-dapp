import React, { ReactNode } from 'react';
import { useWebWalletLogin } from 'hooks/login/useWebWalletLogin';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { OnProviderLoginType } from '../../../types';
import { LoginButton } from '../../LoginButton/LoginButton';

export interface WebWalletLoginButtonPropsType
  extends Omit<OnProviderLoginType, 'onLoginRedirect'> {
  className?: string;
  buttonClassName?: string;
  children?: ReactNode;
  loginButtonText?: string;
  disabled?: boolean;
}

export const WebWalletLoginButton: (
  props: WebWalletLoginButtonPropsType
) => JSX.Element = ({
  children,
  token,
  className = 'dapp-web-wallet-login',
  callbackRoute,
  buttonClassName,
  nativeAuth,
  loginButtonText = 'MultiversX Web Wallet',
  disabled
}) => {
  const [onInitiateLogin] = useWebWalletLogin({
    callbackRoute,
    nativeAuth,
    token
  });
  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);

  const handleLogin = () => {
    onInitiateLogin();
  };

  return (
    <LoginButton
      onLogin={handleLogin}
      className={className}
      btnClassName={buttonClassName}
      text={loginButtonText}
      disabled={disabled || disabledConnectButton}
    >
      {children}
    </LoginButton>
  );
};
