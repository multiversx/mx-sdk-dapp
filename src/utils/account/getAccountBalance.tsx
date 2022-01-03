import { accountSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { getAccount } from './getAccount';

export async function getAccountBalance(address?: string) {
  const { address: currentAddress } = accountSelector(store.getState());
  const account = await getAccount(address ? address : currentAddress);
  return account.balance.toString();
}
