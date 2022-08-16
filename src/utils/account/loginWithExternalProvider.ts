import { loginAction } from 'reduxStore/commonActions';
import { store } from 'reduxStore/store';
import { LoginMethodsEnum } from 'types';

export function loginWithExternalProvider(address: string) {
  store.dispatch(loginAction({ address, loginMethod: LoginMethodsEnum.extra }));
}
