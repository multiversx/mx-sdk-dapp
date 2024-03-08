import React, { ReactNode } from 'react';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';
import { useCrossWindowLogin } from 'hooks';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';

export interface CrossWindowLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  children?: ReactNode;
  buttonClassName?: string;
  loginButtonText?: string;
  disabled?: boolean;
}

export const CrossWindowLoginButton: (
  props: CrossWindowLoginButtonPropsType
) => JSX.Element = ({
  token,
  className = 'dapp-window-wallet-login',
  children,
  callbackRoute,
  buttonClassName,
  nativeAuth,
  loginButtonText = 'Window Wallet',
  onLoginRedirect,
  disabled,
  'data-testid': dataTestId = DataTestIdsEnum.accessCrossWindowWalletBtn
}) => {
  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);
  const [onInitiateLogin] = useCrossWindowLogin({
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
