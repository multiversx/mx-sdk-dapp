import { axiosInstance } from 'apiCalls/utils/axiosInstance';
import { TIMEOUT } from 'constants/network.constants';
import { tokenDataStorage } from './tokenDataStorage';

export async function getPersistedToken<T>(url: string): Promise<T> {
  const config = {
    timeout: TIMEOUT
  };

  const cachedToken: T | null = await tokenDataStorage.getItem(url);

  if (cachedToken) {
    return cachedToken;
  }

  const response = await axiosInstance.get<T>(url, config);

  await tokenDataStorage.setItem(url, response.data);

  return response.data;
}
