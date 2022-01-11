import BigNumber from 'bignumber.js';
import { accountSelector, egldLabelSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { getAccount } from './getAccount';

export async function getDenominatedAccountBalance(
  address?: string,
  withLabel = false
) {
  const egldLabel = egldLabelSelector(store.getState());
  let accountAddress = address;
  if (accountAddress == null) {
    const account = accountSelector(store.getState());
    accountAddress = account.address;
  }
  const account = await getAccount(accountAddress);
  const denominatedBalance = new BigNumber(
    account.balance.toDenominated()
  ).toFormat();
  return withLabel ? `${denominatedBalance} ${egldLabel}` : denominatedBalance;
}

export default getDenominatedAccountBalance;
