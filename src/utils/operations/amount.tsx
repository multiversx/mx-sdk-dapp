import { validation } from '@elrondnetwork/dapp-utils';
import { Balance } from '@elrondnetwork/erdjs';
import BigNumber from 'bignumber.js';
import { egldLabelSelector } from 'redux/selectors';
import { store } from 'redux/store';

export function denominate({
  amount,
  showEgldLabel = true
}: {
  amount: string | Balance;
  showEgldLabel?: boolean;
}) {
  const egldLabel = egldLabelSelector(store.getState());

  let denominatedBalance = '...';
  if (typeof amount === 'string' && validation.stringIsInteger(amount)) {
    denominatedBalance = new BigNumber(
      Balance.egld(amount).toDenominated()
    ).toFormat();
  } else if (amount.constructor === Balance) {
    denominatedBalance = new BigNumber(amount.toDenominated()).toFormat();
  }
  return showEgldLabel
    ? `${denominatedBalance} ${egldLabel}`
    : denominatedBalance;
}
