import React from 'react';
import { useWebWalletLogin } from 'services';
import { getGeneratedClasses } from 'utils';
import { withClassNameWrapper } from 'wrappers/withClassNameWrapper';
import { WebWalletLoginButtonPropsType } from './types';

const WebWalletLoginButton: (
  props: WebWalletLoginButtonPropsType
) => JSX.Element = ({
  children,
  token,
  className = 'web-wallet-login',
  callbackRoute,
  buttonClassName,
  loginButtonText = 'Elrond Web Wallet',
  shouldRenderDefaultCss = true
}) => {
  const [onInitiateLogin] = useWebWalletLogin({
    callbackRoute,
    token
  });
  const classes = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: `btn btn-primary px-sm-4 m-1 mx-sm-3 ${
      buttonClassName != null ? buttonClassName : ''
    }`,
    loginText: 'text-left'
  });

  const handleLogin = () => {
    onInitiateLogin();
  };

  return (
    <button onClick={handleLogin} className={classes.wrapper}>
      {children || <span className={classes.loginText}>{loginButtonText}</span>}
    </button>
  );
};

export default withClassNameWrapper(WebWalletLoginButton);
