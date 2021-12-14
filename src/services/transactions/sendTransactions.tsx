import { validation } from '@elrondnetwork/dapp-utils';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import BigNumber from 'bignumber.js';

import { accountBalanceSelector } from '../../redux/selectors';
import {
  setTransactionsToSign,
  setNotificationModal
} from '../../redux/slices';
import { store } from '../../redux/store';
import { SendTransactionsPropsType } from './types';
import { calcTotalFee } from './utils';

const defaultMinGasLimit = 50000000;

export function sendTransactions ({
  transactionPayload,
  minGasLimit = defaultMinGasLimit
}: SendTransactionsPropsType) {
  const sessionId = Date.now().toString();
  const accountBalance = accountBalanceSelector(store.getState());
  const transactions = Array.isArray(transactionPayload)
    ? transactionPayload
    : [transactionPayload];
  const bNtotalFee = calcTotalFee(transactions, minGasLimit);
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
    return;
  }

  const signTransactionsPayload = {
    sessionId,
    callbackRoute: window.location.pathname,
    transactions: transactions.map((tx) => tx.toPlainObject())
  };
  store.dispatch(setTransactionsToSign(signTransactionsPayload));
}

export default sendTransactions;
