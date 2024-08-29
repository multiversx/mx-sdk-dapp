import { axiosInstance } from 'apiCalls/utils/axiosInstance';
import { networkSelector } from 'reduxStore/selectors/networkConfigSelectors';
import { store } from 'reduxStore/store';
import { tokenDataStorage } from './tokenDataStorage';

export async function getPersistedToken<T>(url: string): Promise<T> {
  const { apiAddress, apiTimeout } = networkSelector(store.getState());

  const config = {
    baseURL: apiAddress,
    timeout: Number(apiTimeout)
  };

  const cachedToken: T | null = await tokenDataStorage.getItem(url);

  if (cachedToken) {
    return cachedToken;
  }

  const response = await axiosInstance.get<T>(url, config);

  await tokenDataStorage.setItem(url, response.data);

  return response.data;
}
