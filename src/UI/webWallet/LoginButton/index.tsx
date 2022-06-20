import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import { useWebWalletLogin } from 'services';
import { getGeneratedClasses } from 'utils';
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
    wrapper: `${globalStyles.btn} ${globalStyles.btnPrimary} ${
      globalStyles.px4
    } ${globalStyles.m1} ${globalStyles.mx3} ${
      buttonClassName != null ? buttonClassName : ''
    }`,
    loginText: globalStyles.textLeft
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

export default WebWalletLoginButton;
