import { validation } from '@elrondnetwork/dapp-utils';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import BigNumber from 'bignumber.js';
import { networkConstants } from 'constants/index';

import { accountBalanceSelector } from 'redux/selectors';
import {
  setTransactionsToSign,
  setNotificationModal,
  setTransactionsDisplayInfo
} from 'redux/slices';
import { store } from 'redux/store';
import { SignTransactionsPropsType } from 'types';
import { SendTransactionReturnType } from './sendTransactions';
import { calcTotalFee } from './utils';

export function signTransactions({
  transactions,
  minGasLimit = networkConstants.DEFAULT_MIN_GAS_LIMIT,
  transactionsDisplayInfo
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
  console.log('yowtf');
  store.dispatch(setTransactionsToSign(signTransactionsPayload));
  store.dispatch(
    setTransactionsDisplayInfo({ sessionId, transactionsDisplayInfo })
  );
  console.log('transactions', transactionsDisplayInfo);
  return { sessionId };
}

export default signTransactions;
