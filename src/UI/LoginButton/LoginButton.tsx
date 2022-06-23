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
  shouldRenderDefaultCss?: boolean;
  children?: React.ReactNode;
};

export const LoginButton = ({
  onLogin,
  text = 'Default Login Button',
  customClassName = '',
  btnClassName = 'default-login-button',
  shouldRenderDefaultCss = true,
  children
}: LoginButtonProps) => {
  const classes = getGeneratedClasses(customClassName, shouldRenderDefaultCss, {
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
    noExtensionButtonWrapper: styles.buttonWrapper,
    noExtensionButtonContent: styles.buttonContent,
    noExtensionButtonTitle: styles.buttonTitle,
    noExtensionButtonIcon: styles.buttonIcon
  });

  return (
    <button onClick={onLogin} className={classes.wrapper}>
      {children || <span className={styles.loginText}>{text}</span>}
    </button>
  );
};
