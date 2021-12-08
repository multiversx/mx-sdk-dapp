import { egldLabelSelector } from '../redux/selectors';
import { store } from '../redux/store';
import { getAccount } from './getAccount';

export async function getAccountBalance(address: string, withLabel = false) {
  const egldLabel = egldLabelSelector(store.getState());
  const account = await getAccount(address);
  const parsedBalance = parseFloat(account.balance.toDenominated());
  const formatted = parsedBalance.toLocaleString('en');
  return withLabel ? `${formatted} ${egldLabel}` : formatted;
}
