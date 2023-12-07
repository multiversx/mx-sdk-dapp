import { withStyles } from 'hocs/withStyles';
import { ExtensionLoginButtonComponent } from './ExtensionLoginButtonComponent';

export const ExtensionLoginButtonSSR = withStyles(
  ExtensionLoginButtonComponent,
  {
    local: () =>
      import(
        'UI/extension/ExtensionLoginButton/extensionLoginButton.styles.scss'
      )
  }
);
