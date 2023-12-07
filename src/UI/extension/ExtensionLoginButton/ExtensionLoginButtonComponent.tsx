import React from 'react';
import classNames from 'classnames';
import {
  CHROME_EXTENSION_LINK,
  DataTestIdsEnum,
  FIREFOX_ADDON_LINK
} from 'constants/index';
import { WithStylesImportType } from 'hocs/withStyles';
import { useExtensionLogin } from 'hooks/login/useExtensionLogin';
import { useSelector } from 'reduxStore/DappProviderContext';
import { dappConfigSelector } from 'reduxStore/selectors';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { LoginButtonSSR } from 'UI/LoginButton/LoginButtonSSR';
import { getIsExtensionAvailable } from '../helpers';
import { ExtensionLoginButtonPropsType } from './types';

const isExtensionAvailable = getIsExtensionAvailable();

export const ExtensionLoginButtonComponent: (
  props: ExtensionLoginButtonPropsType & WithStylesImportType
) => JSX.Element = ({
  token,
  className = 'dapp-extension-login',
  children,
  callbackRoute,
  buttonClassName = 'dapp-default-login-button',
  nativeAuth,
  loginButtonText = 'MultiversX DeFi Wallet',
  onLoginRedirect,
  disabled,
  'data-testid': dataTestId = DataTestIdsEnum.extensionLoginButton,
  globalStyles,
  styles
}) => {
  const dappConfig = useSelector(dappConfigSelector);
  const [onInitiateLogin] = useExtensionLogin({
    callbackRoute,
    token,
    onLoginRedirect,
    nativeAuth
  });
  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);
  const isFirefox = navigator.userAgent.indexOf('Firefox') != -1;
  const classes = {
    wrapper: classNames(
      globalStyles?.btn,
      globalStyles?.btnPrimary,
      globalStyles?.px4,
      globalStyles?.m1,
      globalStyles?.mx3,
      styles?.noExtensionButtonWrapper,
      {
        [buttonClassName]: buttonClassName != null
      },
      className
    ),
    loginText: classNames(styles?.loginText, styles?.noExtensionButtonContent),
    wrapperClassName: className
  };

  const handleLogin = () => {
    onInitiateLogin();
  };

  const LoginButtonComponent = dappConfig?.isSSR ? LoginButtonSSR : LoginButton;

  return !isExtensionAvailable ? (
    <a
      rel='noreferrer'
      href={isFirefox ? FIREFOX_ADDON_LINK : CHROME_EXTENSION_LINK}
      target='_blank'
      className={classes.wrapper}
    >
      {children || <span className={classes.loginText}>{loginButtonText}</span>}
    </a>
  ) : (
    <LoginButtonComponent
      onLogin={handleLogin}
      className={className}
      btnClassName={buttonClassName}
      text={loginButtonText}
      disabled={disabled || disabledConnectButton}
      data-testid={dataTestId}
    >
      {children}
    </LoginButtonComponent>
  );
};
