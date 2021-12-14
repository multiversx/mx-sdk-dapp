import React from 'react';
import { useWebWalletLogin } from 'services/login';
import { getGeneratedClasses } from 'utils';
import { UseWebWalletLoginPropType } from './types';

export const WebWalletLoginButton: (
  props: UseWebWalletLoginPropType
) => JSX.Element = ({
  token,
  className = 'web-wallet-login',
  callbackRoute,
  loginButtonText,
  shouldRenderDefaultCss = true
}) => {
  const [onTriggerLogin] = useWebWalletLogin({ callbackRoute, token });
  const classes = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: 'btn btn-primary px-sm-4 m-1 mx-sm-3',
    loginText: 'text-left'
  });

  const handleLogin = () => {
    onTriggerLogin();
  };

  return (
    <button onClick={handleLogin} className={classes.wrapper}>
      <span className={classes.loginText}>{loginButtonText}</span>
    </button>
  );
};

export default WebWalletLoginButton;
