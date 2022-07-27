import React, { ReactNode } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useExtensionLogin } from 'hooks/login/useExtensionLogin';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import styles from './login-button.scss';
import { WithClassname } from 'UI/types/with-classname';
import classNames from 'classnames';

export interface ExtensionLoginButtonPropsType extends WithClassname {
  token?: string;
  children?: ReactNode;
  buttonClassName?: string;
  callbackRoute?: string;
  loginButtonText?: string;
  onLoginRedirect?: (callbackRoute: string) => void;
  disabled?: boolean;
}

export const ExtensionLoginButton: (
  props: ExtensionLoginButtonPropsType
) => JSX.Element = ({
  token,
  className = 'dapp-extension-login',
  children,
  callbackRoute,
  buttonClassName,
  loginButtonText = 'Maiar DeFi Wallet',
  onLoginRedirect,
  disabled
}) => {
  const [onInitiateLogin] = useExtensionLogin({
    callbackRoute,
    token,
    onLoginRedirect
  });

  const isFirefox = navigator.userAgent.indexOf('Firefox') != -1;
  const classes = {
    noExtensionButtonWrapper: classNames(
      styles.noExtensionButtonWrapper,
      className
    ),
    noExtensionButtonContent: styles.noExtensionButtonContent,
    noExtensionButtonTitle: styles.noExtensionButtonTitle,
    noExtensionButtonIcon: styles.noExtensionButtonIcon
  };

  const handleLogin = () => {
    onInitiateLogin();
  };

  return !window.elrondWallet ? (
    <a
      rel='noreferrer'
      href={
        isFirefox
          ? 'https://addons.mozilla.org/en-US/firefox/addon/maiar-defi-wallet/'
          : 'https://chrome.google.com/webstore/detail/dngmlblcodfobpdpecaadgfbcggfjfnm?authuser=0&hl=en'
      }
      target='_blank'
      className={classes.noExtensionButtonWrapper}
    >
      {children || (
        <div className={classes.noExtensionButtonContent}>
          <div className={classes.noExtensionButtonTitle}>
            Maiar DeFi Wallet
          </div>
          <FontAwesomeIcon
            className={classes.noExtensionButtonIcon}
            icon={faArrowRight}
          />
        </div>
      )}
    </a>
  ) : (
    <LoginButton
      onLogin={handleLogin}
      className={className}
      btnClassName={buttonClassName}
      text={loginButtonText}
      disabled={disabled}
    >
      {children}
    </LoginButton>
  );
};
