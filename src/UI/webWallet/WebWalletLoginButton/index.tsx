import React, { ReactNode } from 'react';
import { useWebWalletLogin } from 'hooks/login/useWebWalletLogin';
import { LoginButton } from '../../LoginButton/LoginButton';

export interface WebWalletLoginButtonPropsType {
  token?: string;
  className?: string;
  callbackRoute: string;
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
  className = 'web-wallet-login',
  callbackRoute,
  buttonClassName,
  loginButtonText = 'Elrond Web Wallet',
  disabled
}) => {
  const [onInitiateLogin] = useWebWalletLogin({
    callbackRoute,
    token
  });

  const handleLogin = () => {
    onInitiateLogin();
  };

  return (
    <LoginButton
      onLogin={handleLogin}
      className={className}
      btnClassName={buttonClassName}
      text={loginButtonText}
      disabled={disabled}
    >
      {children}
    </LoginButton>
  );
};
