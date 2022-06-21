import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useExtensionLogin } from 'services';
import { getGeneratedClasses } from 'utils';
import styles from './login-button.scss';
import { ExtensionLoginButtonPropsType } from './types';
import { ExtensionLoginButtonPropsType } from 'types';
import { getGeneratedClasses } from 'UI/utils';

export const ExtensionLoginButton: (
  props: ExtensionLoginButtonPropsType
) => JSX.Element = ({
  token,
  className = 'extension-login',
  children,
  callbackRoute,
  buttonClassName,
  loginButtonText = 'Maiar DeFi Wallet',
  redirectAfterLogin = false,
  shouldRenderDefaultCss = true
}) => {
  const [onInitiateLogin] = useExtensionLogin({
    callbackRoute,
    token,
    redirectAfterLogin
  });

  const isFirefox = navigator.userAgent.indexOf('Firefox') != -1;
  const classes = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: `${globalStyles.btn} ${globalStyles.btnPrimary} ${
      globalStyles.px4
    } ${globalStyles.m1} ${globalStyles.mx3} ${
      buttonClassName != null ? buttonClassName : ''
    }`,
    loginText: styles.loginText,
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
    <button onClick={handleLogin} className={classes.wrapper}>
      {children || <span className={classes.loginText}>{loginButtonText}</span>}
    </button>
  );
};

export default ExtensionLoginButton;
