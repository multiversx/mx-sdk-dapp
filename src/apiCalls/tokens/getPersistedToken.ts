import { axiosInstance } from 'apiCalls/utils/axiosInstance';
import { networkSelector } from 'reduxStore/selectors/networkConfigSelectors';
import { store } from 'reduxStore/store';
import { TokenType } from 'types/tokens.types';
import { tokenDataStorage } from './tokenDataStorage';

export async function getPersistedToken(url: string): Promise<any> {
  const { apiAddress, apiTimeout } = networkSelector(store.getState());

  const config = {
    baseURL: apiAddress,
    timeout: Number(apiTimeout)
  };

  const cachedToken: TokenType = await tokenDataStorage.getItem(url);

  console.log('config cachedToken', cachedToken);

  if (cachedToken) {
    return { data: cachedToken };
  }

  const data = await axiosInstance.get<TokenType>(url, config);

  await tokenDataStorage.setItem(url, data.data);

  return data;
}
