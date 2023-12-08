import React, { ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from '../types';

export interface LoginButtonPropsType extends WithClassnameType {
  onLogin: () => void;
  text?: string;
  btnClassName?: string;
  children?: ReactNode;
  disabled?: boolean;
}

const LoginButtonComponent = ({
  onLogin,
  text = 'Default Login Button',
  className = 'dapp-login-button',
  btnClassName = 'dapp-default-login-button',
  disabled,
  'data-testid': dataTestId,
  children,
  globalStyles,
  styles
}: LoginButtonPropsType & WithStylesImportType) => {
  const classes = useMemo(
    () => ({
      wrapper: classNames(
        globalStyles?.btn,
        globalStyles?.btnPrimary,
        globalStyles?.px4,
        globalStyles?.m1,
        globalStyles?.mx3,
        {
          [btnClassName]: btnClassName != null
        },
        className
      ),
      loginText: styles?.loginText,
      wrapperClassName: className
    }),
    [globalStyles, styles]
  );

  return (
    <button
      data-testid={dataTestId}
      disabled={disabled}
      className={classes.wrapper}
      onClick={onLogin}
    >
      {children || <span className={classes.loginText}>{text}</span>}
    </button>
  );
};

export const LoginButton = withStyles(LoginButtonComponent, {
  local: () => import('UI/LoginButton/loginButtonStyles.scss'),
  localSync: () => require('UI/LoginButton/loginButtonStyles.scss').default
});
