import { getAccountFromApi } from 'apiCalls/accounts/getAccountFromApi';

export const getAccount = (address?: string) => getAccountFromApi(address);
