import React from 'react';
import { useExtensionLogin } from '../../../services/login';
import { getGeneratedClasses } from '../../../utils';
import { Props } from './types';

export const ExtensionLoginButton: (props: Props) => JSX.Element = ({
  token,
  className = 'extension-login',
  callbackRoute,
  loginButtonText,
  shouldRenderDefaultCss = true
}) => {
  const [onTriggerLogin] = useExtensionLogin({ callbackRoute, token });
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

export default ExtensionLoginButton;
