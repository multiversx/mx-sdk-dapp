import { loginAction } from 'redux/commonActions';
import { store } from 'redux/store';
import { LoginMethodsEnum } from 'types';

export function loginWithExternalProvider(address: string) {
  store.dispatch(loginAction({ address, loginMethod: LoginMethodsEnum.extra }));
}
