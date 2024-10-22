import React, { ReactNode } from 'react';
import { IframeLoginTypes } from '@multiversx/sdk-web-wallet-iframe-provider/out/constants';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useIframeLogin } from 'hooks/login/useIframeLogin';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';

export interface IframeLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  children?: ReactNode;
  buttonClassName?: string;
  loginButtonText?: string;
  disabled?: boolean;
  loginType?: IframeLoginTypes;
}

const IframeLoginButtonComponent: (
  props: IframeLoginButtonPropsType & WithStylesImportType
) => JSX.Element = ({
  token,
  className = 'dapp-metamask-proxy-login',
  children,
  callbackRoute,
  buttonClassName = 'dapp-default-login-button',
  nativeAuth,
  loginButtonText = 'Metamask Proxy',
  onLoginRedirect,
  disabled,
  loginType = IframeLoginTypes.metamask
}) => {
  const [onInitiateLogin] = useIframeLogin({
    callbackRoute,
    token,
    onLoginRedirect,
    nativeAuth
  });
  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);

  const handleLogin = () => {
    onInitiateLogin(loginType);
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

export const IframeButton = withStyles(IframeLoginButtonComponent, {
  ssrStyles: () =>
    import('UI/iframe/IframeLoginButton/iframeLoginButton.styles.scss'),
  clientStyles: () =>
    require('UI/iframe/IframeLoginButton/iframeLoginButton.styles.scss').default
});
