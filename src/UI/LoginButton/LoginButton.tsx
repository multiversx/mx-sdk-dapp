import React from 'react';
import styles from './login-button.scss';
import { getGeneratedClasses } from '../utils';
import globalStyles from '../../assets/sass/main.scss';
import classNames from 'classnames';

type LoginButtonProps = {
  onLogin: () => void;
  text?: string;
  customClassName?: string;
  btnClassName?: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

export const LoginButton = ({
  onLogin,
  text = 'Default Login Button',
  customClassName = '',
  btnClassName = 'default-login-button',
  disabled,
  children
}: LoginButtonProps) => {
  const classes = getGeneratedClasses(customClassName, {
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
    loginText: styles.loginText
  });

  return (
    <button disabled={disabled} className={classes.wrapper} onClick={onLogin}>
      {children || <span className={classes.loginText}>{text}</span>}
    </button>
  );
};
