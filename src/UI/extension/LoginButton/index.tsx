import React from 'react';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import { useExtensionLogin } from 'services';
import { getGeneratedClasses } from 'utils';
import { withClassNameWrapper } from 'wrappers/withClassNameWrapper';
import { ExtensionLoginButtonPropsType } from './types';

const ExtensionLoginButton: (
  props: ExtensionLoginButtonPropsType
) => JSX.Element = ({
  token,
  className = 'extension-login',
  children,
  callbackRoute,
  buttonClassName,
  loginButtonText = 'Maiar DeFi Wallet',
  onLoginRedirect,
  redirectAfterLogin = false,
  shouldRenderDefaultCss = true
}) => {
  const [onInitiateLogin] = useExtensionLogin({
    callbackRoute,
    token,
    onLoginRedirect,
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
          <ReactFontawesome.FontAwesomeIcon
            className={classes.noExtensionButtonIcon}
            icon={icons.faArrowRight}
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

export default withClassNameWrapper(ExtensionLoginButton);
