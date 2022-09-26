import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { WithClassnameType } from '../types';

import globalStyles from 'assets/sass/main.scss';
import styles from './loginButtonStyles.scss';

type LoginButtonProps = {
  onLogin: () => void;
  text?: string;
  btnClassName?: string;
  children?: ReactNode;
  disabled?: boolean;
} & WithClassnameType;

export const LoginButton = (props: LoginButtonProps) => {
  const {
    onLogin,
    text = 'Default Login Button',
    className = 'dapp-login-button',
    btnClassName = 'dapp-default-login-button',
    disabled,
    children
  } = props;

  const classes = {
    wrapper: classNames(
      globalStyles.btn,
      globalStyles.btnPrimary,
      globalStyles.px4,
      globalStyles.m1,
      globalStyles.mx3,
      {
        [btnClassName]: btnClassName != null
      },
      className
    ),
    loginText: styles.loginText,
    wrapperClassName: className
  };

  return (
    <button disabled={disabled} className={classes.wrapper} onClick={onLogin}>
      {children || <span className={classes.loginText}>{text}</span>}
    </button>
  );
};
