import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import styles from 'UI/LoginButton/loginButtonStyles.scss';
import { LoginButtonComponent } from './LoginButtonComponent';

export const LoginButton: typeof LoginButtonComponent = (props) => {
  return (
    <LoginButtonComponent
      {...props}
      globalStyles={globalStyles}
      styles={styles}
    />
  );
};
