import React, { ReactNode } from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useMetamaskProxyLogin } from 'hooks/login/useMetamaskProxyLogin';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';

export interface MetamaskProxyLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  children?: ReactNode;
  buttonClassName?: string;
  loginButtonText?: string;
  disabled?: boolean;
}

const MetamaskProxyLoginButtonComponent: (
  props: MetamaskProxyLoginButtonPropsType & WithStylesImportType
) => JSX.Element = ({
  token,
  className = 'dapp-metamask-proxy-login',
  children,
  callbackRoute,
  buttonClassName = 'dapp-default-login-button',
  nativeAuth,
  loginButtonText = 'Metamask Proxy',
  onLoginRedirect,
  disabled
}) => {
  const [onInitiateLogin] = useMetamaskProxyLogin({
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

export const MetamaskProxyButton = withStyles(
  MetamaskProxyLoginButtonComponent,
  {
    ssrStyles: () =>
      import(
        'UI/metamaskProxy/MetamaskProxyLoginButton/metamaskProxyLoginButton.styles.scss'
      ),
    clientStyles: () =>
      require('UI/metamaskProxy/MetamaskProxyLoginButton/metamaskProxyLoginButton.styles.scss')
        .default
  }
);
