import React, { ReactNode } from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { useWebWalletLogin } from 'services';
import { useWebWalletLogin } from 'hooks/login/useWebWalletLogin';
import { getGeneratedClasses } from 'UI/utils';

export interface WebWalletLoginButtonPropsType {
  token?: string;
  className?: string;
  callbackRoute: string;
  buttonClassName?: string;
  children?: ReactNode;
  loginButtonText?: string;
  shouldRenderDefaultCss?: boolean;
}

export const WebWalletLoginButton: (
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
    wrapper: `${classNames(
      globalStyles.btn,
      globalStyles.btnPrimary,
      globalStyles.px4,
      globalStyles.m1,
      globalStyles.mx3,
      buttonClassName != null && buttonClassName
    )} `,
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
