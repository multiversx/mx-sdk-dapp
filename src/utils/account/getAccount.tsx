import { getAccountFromApi } from 'apiCalls/accounts/getAccountFromApi';

export const getAccount: typeof getAccountFromApi = (address, options) =>
  getAccountFromApi(address, options);
