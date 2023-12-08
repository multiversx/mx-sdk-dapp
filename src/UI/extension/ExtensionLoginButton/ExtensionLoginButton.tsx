import React from 'react';
import { withStyles } from 'hocs/withStyles';
import { isSSR } from 'utils/isSSR';
import { ExtensionLoginButtonComponent } from './ExtensionLoginButtonComponent';
import { ExtensionLoginButtonPropsType } from './types';

console.log('isSSR', isSSR());

export const ExtensionLoginButton = isSSR()
  ? withStyles(ExtensionLoginButtonComponent, {
      local: () =>
        import(
          'UI/extension/ExtensionLoginButton/extensionLoginButton.styles.scss'
        )
    })
  : (props: ExtensionLoginButtonPropsType) => {
      const globalStylesCallback = () => require('assets/sass/main.scss');
      const stylesCallback = () =>
        require('UI/extension/ExtensionLoginButton/extensionLoginButton.styles.scss');

      const globalStyles = globalStylesCallback();
      const styles = stylesCallback();

      return (
        <ExtensionLoginButtonComponent
          {...props}
          globalStyles={globalStyles}
          styles={styles}
        />
      );
    };
