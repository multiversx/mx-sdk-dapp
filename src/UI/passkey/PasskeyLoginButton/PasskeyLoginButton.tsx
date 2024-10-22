import React, { ReactNode } from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';

import { usePasskeyLogin } from 'hooks/login/usePasskeyLogin';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';

export interface PasskeyLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  children?: ReactNode;
  buttonClassName?: string;
  loginButtonText?: string;
  disabled?: boolean;
}

const PasskeyLoginButtonComponent: (
  props: PasskeyLoginButtonPropsType & WithStylesImportType
) => JSX.Element = ({
  token,
  className = 'dapp-passkey-login',
  children,
  callbackRoute,
  buttonClassName = 'dapp-default-login-button',
  nativeAuth,
  loginButtonText = 'Passkey',
  onLoginRedirect,
  disabled
}) => {
  const [onInitiateLogin] = usePasskeyLogin({
    callbackRoute,
    token,
    onLoginRedirect,
    nativeAuth
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

export const PasskeyLoginButton = withStyles(PasskeyLoginButtonComponent, {
  ssrStyles: () =>
    import(
      'UI/extension/ExtensionLoginButton/extensionLoginButton.styles.scss'
    ),
  clientStyles: () =>
    require('UI/extension/ExtensionLoginButton/extensionLoginButton.styles.scss')
      .default
});
