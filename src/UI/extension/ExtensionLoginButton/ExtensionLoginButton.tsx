import React from 'react';
import { withStyles } from 'hocs/withStyles';
import { isSSR } from 'utils/isSSR';
import { ExtensionLoginButtonComponent } from './ExtensionLoginButtonComponent';

export const ExtensionLoginButton = isSSR()
  ? withStyles(ExtensionLoginButtonComponent, {
      local: () =>
        import(
          'UI/extension/ExtensionLoginButton/extensionLoginButton.styles.scss'
        )
    })
  : (props: typeof ExtensionLoginButtonComponent) => {
      const globalStyles = require('assets/sass/main.scss');
      const styles = require('./extensionLoginButton.styles.scss');

      return (
        <ExtensionLoginButtonComponent
          {...props}
          globalStyles={globalStyles}
          styles={styles}
        />
      );
    };
