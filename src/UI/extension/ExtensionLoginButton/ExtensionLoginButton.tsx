import React, { ReactNode } from 'react';
import classNames from 'classnames';
import {
  CHROME_EXTENSION_LINK,
  DataTestIdsEnum,
  FIREFOX_ADDON_LINK
} from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useExtensionLogin } from 'hooks/login/useExtensionLogin';
import { getIsNativeAuthSingingForbidden } from 'services/nativeAuth/helpers';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { OnProviderLoginType } from '../../../types';
import { WithClassnameType } from '../../types';
import { getIsExtensionAvailable } from '../helpers';
import { isWindowAvailable } from '../../../utils';

export interface ExtensionLoginButtonPropsType
  extends WithClassnameType,
    OnProviderLoginType {
  children?: ReactNode;
  buttonClassName?: string;
  loginButtonText?: string;
  disabled?: boolean;
}

const isExtensionAvailable = getIsExtensionAvailable();

const ExtensionLoginButtonComponent: (
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
  const [onInitiateLogin] = useExtensionLogin({
    callbackRoute,
    token,
    onLoginRedirect,
    nativeAuth
  });
  const disabledConnectButton = getIsNativeAuthSingingForbidden(token);
  const isFirefox = isWindowAvailable()
    ? navigator.userAgent.indexOf('Firefox') != -1
    : false;
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

export const ExtensionLoginButton = withStyles(ExtensionLoginButtonComponent, {
  ssrStyles: () =>
    import(
      'UI/extension/ExtensionLoginButton/extensionLoginButton.styles.scss'
    ),
  clientStyles: () =>
    require('UI/extension/ExtensionLoginButton/extensionLoginButton.styles.scss')
      .default
});
