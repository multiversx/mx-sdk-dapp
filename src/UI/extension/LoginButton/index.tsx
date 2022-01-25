import React from 'react';
import { useExtensionLogin } from 'services';
import { getGeneratedClasses } from 'utils';
import { ExtensionLoginButtonPropsType } from './types';

export const ExtensionLoginButton: (
  props: ExtensionLoginButtonPropsType
) => JSX.Element = ({
  token,
  className = 'extension-login',
  children,
  callbackRoute,
  buttonClassName,
  loginButtonText = 'Maiar DeFi Wallet',
  shouldRenderDefaultCss = true
}) => {
  const [onInitiateLogin] = useExtensionLogin({
    callbackRoute,
    token
  });
  const classes = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: `btn btn-primary px-sm-4 m-1 mx-sm-3 ${buttonClassName}`,
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

export default ExtensionLoginButton;
