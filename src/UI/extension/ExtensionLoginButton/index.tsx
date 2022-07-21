import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useExtensionLogin } from 'hooks/login/useExtensionLogin';
import { ExtensionLoginButtonPropsType } from 'types';
import { LoginButton } from 'UI/LoginButton/LoginButton';
import { getGeneratedClasses } from 'UI/utils';
import styles from './login-button.scss';

export const ExtensionLoginButton: (
  props: ExtensionLoginButtonPropsType
) => JSX.Element = ({
  token,
  className = 'extension-login',
  children,
  callbackRoute,
  buttonClassName,
  loginButtonText = 'Maiar DeFi Wallet',
  onLoginRedirect
}) => {
  const [onInitiateLogin] = useExtensionLogin({
    callbackRoute,
    token,
    onLoginRedirect
  });

  const isFirefox = navigator.userAgent.indexOf('Firefox') != -1;
  const classes = getGeneratedClasses(className, {
    noExtensionButtonWrapper: styles.noExtensionButtonWrapper,
    noExtensionButtonContent: styles.noExtensionButtonContent,
    noExtensionButtonTitle: styles.noExtensionButtonTitle,
    noExtensionButtonIcon: styles.noExtensionButtonIcon
  });

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
      customClassName={className}
      btnClassName={buttonClassName}
      text={loginButtonText}
    >
      {children}
    </LoginButton>
  );
};
