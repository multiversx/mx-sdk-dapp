import React from 'react';
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
  redirectAfterLogin = false,
  shouldRenderDefaultCss = true
}) => {
  const [onInitiateLogin] = useExtensionLogin({
    callbackRoute,
    token,
    redirectAfterLogin
  });
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
      href='https://chrome.google.com/webstore/detail/dngmlblcodfobpdpecaadgfbcggfjfnm?authuser=0&hl=en'
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
            icon={ReactFontawesome.faArrowRight}
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
