import React from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useExtensionLogin } from 'hooks/login/useExtensionLogin';
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
    wrapper: `btn btn-primary px-sm-4 m-1 mx-sm-3 ${
      buttonClassName != null ? buttonClassName : ''
    }`,
    loginText: 'text-left',
    noExtensionButtonWrapper: 'btn btn-unlock d-inline-block',
    noExtensionButtonContent:
      'd-flex justify-content-between align-items-center',
    noExtensionButtonTitle: 'title',
    noExtensionButtonIcon: ''
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
