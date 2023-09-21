import React, { ReactNode } from 'react';
import { useWebWalletLogin } from 'hooks/login/useWebWalletLogin';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { OnProviderLoginType } from '../../../types';
import { LoginButton } from '../../LoginButton/LoginButton';
import { WithClassnameType } from '../../types';

export interface WebWalletLoginButtonPropsType
  extends WithClassnameType,
    Omit<OnProviderLoginType, 'onLoginRedirect'> {
  buttonClassName?: string;
  children?: ReactNode;
  loginButtonText?: string;
  disabled?: boolean;
  /**
   * This property is used to override the default wallet address.
   * This is useful when you want to use a custom wallet provider.
   * It overrides the wallet address from the network, including the wallet address from the custom network config from the DappProvider.
   * */
  customWalletAddress?: string;
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
