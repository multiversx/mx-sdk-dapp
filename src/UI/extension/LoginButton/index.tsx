import React from 'react';
import classNames from 'classnames';
import { extensionLogin } from '../../../services/login/extensionLogin';
import { Props } from './types';

export const ExtensionLoginButton: (props: Props) => JSX.Element = ({
  token,
  className,
  callbackRoute,
  loginButtonText,
  shouldRenderDefaultCss = true
}) => {
  const generatedClasses = {
    wrapper: classNames(className, {
      'btn btn-primary px-sm-4 m-1 mx-sm-3': shouldRenderDefaultCss
    }),

    loginText: classNames(`${className}_login-text`, {
      'text-left': shouldRenderDefaultCss
    })
  };

  const handleLogin = () => {
    extensionLogin({
      token,
      callbackRoute
    });
  };

  return (
    <button onClick={handleLogin} className={generatedClasses.wrapper}>
      <span className={generatedClasses.loginText}>{loginButtonText}</span>
    </button>
  );
};

export default ExtensionLoginButton;
