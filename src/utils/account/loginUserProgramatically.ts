import { loginAction } from 'redux/commonActions';
import { store } from 'redux/store';
import { LoginMethodsEnum } from 'types';

export function loginUserProgramatically(
  address: string,
  loginMethod = LoginMethodsEnum.extra
) {
  store.dispatch(loginAction({ address, loginMethod }));
}
