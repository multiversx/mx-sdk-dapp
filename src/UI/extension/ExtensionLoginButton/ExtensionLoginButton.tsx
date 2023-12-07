import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import styles from './extensionLoginButton.styles.scss';
import { ExtensionLoginButtonComponent } from './ExtensionLoginButtonComponent';

export const ExtensionLoginButton: typeof ExtensionLoginButtonComponent = (
  props
) => {
  return (
    <ExtensionLoginButtonComponent
      {...props}
      globalStyles={globalStyles}
      styles={styles}
    />
  );
};
