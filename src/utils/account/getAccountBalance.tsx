import BigNumber from 'bignumber.js';
import { egldLabelSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { getAccount } from './getAccount';

export async function getAccountBalance(address: string, withLabel = false) {
  const egldLabel = egldLabelSelector(store.getState());
  const account = await getAccount(address);
  const denominatedBalance = new BigNumber(
    account.balance.toDenominated()
  ).toFormat();
  return withLabel ? `${denominatedBalance} ${egldLabel}` : denominatedBalance;
}
