import { loginInfoSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { getAccessTokenFromSearchParams } from './getAccessTokenFromSearchParams';

export const getWebviewToken = () => {
  const accessToken = getAccessTokenFromSearchParams();
  const loginInfo = loginInfoSelector(store.getState());

  return accessToken ?? loginInfo.webviewLogin?.data;
};
