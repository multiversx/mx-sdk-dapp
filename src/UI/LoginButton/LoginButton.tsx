import React from 'react';
import styles from './login-button.scss';
import globalStyles from '../../assets/sass/main.scss';
import classNames from 'classnames';
import { WithClassname } from 'types';

type LoginButtonProps = {
  onLogin: () => void;
  text?: string;
  btnClassName?: string;
  children?: React.ReactNode;
  disabled?: boolean;
} & WithClassname;

export const LoginButton = ({
  onLogin,
  text = 'Default Login Button',
  className = 'dapp-login-button',
  btnClassName = 'default-login-button',
  disabled,
  children
}: LoginButtonProps) => {
  const classes = {
    wrapper: classNames(
      globalStyles.btn,
      globalStyles.btnPrimary,
      globalStyles.px4,
      globalStyles.m1,
      globalStyles.mx3,
      {
        [btnClassName]: btnClassName != null
      }
    ),
    loginText: styles.loginText,
    className
  };

  return (
    <button disabled={disabled} className={classes.wrapper} onClick={onLogin}>
      {children || <span className={classes.loginText}>{text}</span>}
    </button>
  );
};
