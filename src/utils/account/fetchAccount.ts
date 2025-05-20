import { getAccountFromApi } from 'apiCalls/account/getAccountFromApi';

export const fetchAccount = (props: { address?: string; baseURL: string }) =>
  getAccountFromApi(props);
