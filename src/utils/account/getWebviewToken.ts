import { loginInfoSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { getWindowLocation } from 'utils/window/getWindowLocation';

export const getWebviewToken = () => {
  const { search } = getWindowLocation();
  const urlSearchParams = new URLSearchParams(search) as any;
  const searchParams = Object.fromEntries(urlSearchParams);

  const { tokenLogin } = loginInfoSelector(store.getState());

  return searchParams?.accessToken ?? tokenLogin?.nativeAuthToken;
};
