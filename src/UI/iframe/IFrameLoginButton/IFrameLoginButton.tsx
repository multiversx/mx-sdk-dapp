import React, { ReactNode } from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useIFrameLogin } from 'hooks/login/useIFrameLogin';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';

export interface IFrameLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  children?: ReactNode;
  buttonClassName?: string;
  loginButtonText?: string;
  disabled?: boolean;
}

const IFrameLoginButtonComponent: (
  props: IFrameLoginButtonPropsType & WithStylesImportType
) => JSX.Element = ({
  token,
  className = 'dapp-iframe-login',
  children,
  callbackRoute,
  buttonClassName = 'dapp-default-login-button',
  nativeAuth,
  loginButtonText = 'IFrame Wallet',
  onLoginRedirect,
  disabled
}) => {
  const [onInitiateLogin] = useIFrameLogin({
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

export const IFrameLoginButton = withStyles(IFrameLoginButtonComponent, {
  ssrStyles: () =>
    import('UI/iframe/IFrameLoginButton/iframeLoginButton.styles.scss'),
  clientStyles: () =>
    require('UI/iframe/IFrameLoginButton/iframeLoginButton.styles.scss').default
});
