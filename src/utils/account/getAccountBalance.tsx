import { getAccount } from './getAccount';

export async function getAccountBalance(address: string) {
  const account = await getAccount(address);
  return account.balance.toString();
}
