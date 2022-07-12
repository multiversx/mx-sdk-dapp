import { getAccountFromApi } from 'apiCalls/accounts/getAccountFromApi';

export async function getAccount(address?: string) {
  return await getAccountFromApi(address);
}
