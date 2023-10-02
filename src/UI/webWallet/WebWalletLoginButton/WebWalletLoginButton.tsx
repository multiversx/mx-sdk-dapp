import React, { ReactNode } from 'react';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import {
  UseWebWalletLoginPropsType,
  useWebWalletLogin
} from '../../../hooks/login/useWebWalletLogin';
import { LoginButton } from '../../LoginButton/LoginButton';
import { WithClassnameType } from '../../types';

export interface WebWalletLoginButtonPropsType
  extends UseWebWalletLoginPropsType,
    WithClassnameType {
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
  'data-testid': dataTestId,
  loginButtonText = 'MultiversX Web Wallet',
  disabled,
  customWalletAddress
}) => {
  const [onInitiateLogin] = useWebWalletLogin({
    callbackRoute,
    nativeAuth,
    token,
    customWalletAddress
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
      data-testid={dataTestId}
      disabled={disabled || disabledConnectButton}
    >
      {children}
    </LoginButton>
  );
};
