import { loginAction } from 'reduxStore/commonActions';
import { getStore } from 'reduxStore/store';
import { LoginMethodsEnum } from 'types';

export function loginWithExternalProvider(address: string) {
  getStore().dispatch(
    loginAction({ address, loginMethod: LoginMethodsEnum.extra })
  );
}
