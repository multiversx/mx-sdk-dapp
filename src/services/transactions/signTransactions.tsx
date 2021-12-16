import { validation } from '@elrondnetwork/dapp-utils';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import BigNumber from 'bignumber.js';

import { networkConstants } from 'constants/index';
import { accountBalanceSelector } from 'redux/selectors';
import { setTransactionsToSign, setNotificationModal } from 'redux/slices';
import { store } from 'redux/store';
import { SendTransactionReturnType } from './sendTransactions';
import { SignTransactionsPropsType } from './types';
import { calcTotalFee } from './utils';

export function signTransactions({
  transactions,
  minGasLimit = networkConstants.DEFAULT_MIN_GAS_LIMIT
}: SignTransactionsPropsType): SendTransactionReturnType {
  const sessionId = Date.now().toString();
  const accountBalance = accountBalanceSelector(store.getState());
  const transactionsPayload = Array.isArray(transactions)
    ? transactions
    : [transactions];
  const bNtotalFee = calcTotalFee(transactionsPayload, minGasLimit);
  const bNbalance = new BigNumber(
    validation.stringIsFloat(accountBalance) ? accountBalance : '0'
  );
  const hasSufficientFunds = bNbalance.minus(bNtotalFee).isGreaterThan(0);

  if (!hasSufficientFunds) {
    const notificationPayload = {
      icon: faExclamationTriangle,
      iconClassName: 'text-warning',
      title: 'Insufficient EGLD funds',
      description: 'Current EGLD balance cannot cover the transaction fees.'
    };

    store.dispatch(setNotificationModal(notificationPayload));
    return { error: 'insufficient funds' };
  }
  const signTransactionsPayload = {
    sessionId,
    callbackRoute: window.location.pathname,
    transactions: transactionsPayload.map((tx) => tx.toPlainObject())
  };
  store.dispatch(setTransactionsToSign(signTransactionsPayload));
  return { sessionId };
}

export default signTransactions;
