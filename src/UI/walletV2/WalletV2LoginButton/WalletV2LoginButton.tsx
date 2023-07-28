import React, { ReactNode } from 'react';
import { useWalletV2Login } from 'hooks';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';

export interface WalletV2LoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  children?: ReactNode;
  buttonClassName?: string;
  loginButtonText?: string;
  disabled?: boolean;
}

export const WalletV2LoginButton: (
  props: WalletV2LoginButtonPropsType
) => JSX.Element = ({
  token,
  className = 'dapp-walletV2-login',
  children,
  callbackRoute,
  buttonClassName,
  nativeAuth,
  loginButtonText = 'Web WalletV2',
  onLoginRedirect,
  disabled,
  'data-testid': dataTestId = 'walletV2LoginButton'
}) => {
  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);
  const [onInitiateLogin] = useWalletV2Login({
    callbackRoute,
    token,
    onLoginRedirect,
    nativeAuth
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
      disabled={disabled || disabledConnectButton}
      data-testid={dataTestId}
    >
      {children}
    </LoginButton>
  );
};
