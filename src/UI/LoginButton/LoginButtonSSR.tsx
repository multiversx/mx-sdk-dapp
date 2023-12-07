import { withStyles } from 'hocs/withStyles';
import { LoginButtonComponent } from './LoginButtonComponent';

export const LoginButtonSSR = withStyles(LoginButtonComponent, {
  local: () => import('UI/LoginButton/loginButtonStyles.scss')
});
