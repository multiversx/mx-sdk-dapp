import React, { ReactNode } from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useMetamaskLogin } from 'hooks';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';

export interface MetamaskLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  children?: ReactNode;
  buttonClassName?: string;
  loginButtonText?: string;
  disabled?: boolean;
}

const MetamaskLoginButtonComponent: (
  props: MetamaskLoginButtonPropsType & WithStylesImportType
) => JSX.Element = ({
  token,
  className = 'dapp-metamask-login',
  children,
  callbackRoute,
  buttonClassName = 'dapp-default-login-button',
  nativeAuth,
  loginButtonText = 'Metamask',
  onLoginRedirect,
  disabled
}) => {
  const [onInitiateLogin] = useMetamaskLogin({
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

export const MetamaskLoginButton = withStyles(MetamaskLoginButtonComponent, {
  ssrStyles: () =>
    import(
      'UI/extension/ExtensionLoginButton/extensionLoginButton.styles.scss'
    ),
  clientStyles: () =>
    require('UI/extension/ExtensionLoginButton/extensionLoginButton.styles.scss')
      .default
});
