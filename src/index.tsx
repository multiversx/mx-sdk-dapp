import { DappProvider } from './redux/DappProvider';
import { logout } from './utils';
import { AuthenticatedRoutesWrapper } from './wrappers';

import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './styles.module.css';

export * as DappUI from './UI/index';
export * as loginServices from './services/login';
export { DappProvider, AuthenticatedRoutesWrapper, logout };
