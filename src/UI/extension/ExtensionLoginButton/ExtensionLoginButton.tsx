import React, { ReactNode } from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import {
  CHROME_EXTENSION_LINK,
  DataTestIdsEnum,
  FIREFOX_ADDON_LINK
} from 'constants/index';
import { useExtensionLogin } from 'hooks/login/useExtensionLogin';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
import { getIsExtensionAvailable } from '../helpers';
import styles from './extensionLoginButton.styles.scss';

export interface ExtensionLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  children?: ReactNode;
  buttonClassName?: string;
  loginButtonText?: string;
  disabled?: boolean;
}

const isExtensionAvailable = getIsExtensionAvailable();

export const ExtensionLoginButton: (
  props: ExtensionLoginButtonPropsType
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
  'data-testid': dataTestId = DataTestIdsEnum.extensionLoginButton
}) => {
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
      globalStyles.btn,
      globalStyles.btnPrimary,
      globalStyles.px4,
      globalStyles.m1,
      globalStyles.mx3,
      styles.noExtensionButtonWrapper,
      {
        [buttonClassName]: buttonClassName != null
      },
      className
    ),
    loginText: classNames(styles.loginText, styles.noExtensionButtonContent),
    wrapperClassName: className
  };

  const handleLogin = () => {
    onInitiateLogin();
  };

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
