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

export function sendTransactions({
  transactionPayload,
  minGasLimit = defaultMinGasLimit
}: SendTransactionsPropsType) {
  const accountBalance = accountBalanceSelector(store.getState());
  const transactions = Array.isArray(transactionPayload)
    ? transactionPayload
    : [transactionPayload];
  const bNtotalFee = calcTotalFee(transactions, minGasLimit);
  const bNbalance = new BigNumber(
    validation.stringIsFloat(accountBalance) ? accountBalance : '0'
  );

  if (bNbalance.minus(bNtotalFee).isGreaterThan(0)) {
    const sessionId = Date.now().toString();

    store.dispatch(
      setTransactionsToSign({
        transactions: transactions.map((tx) => tx.toPlainObject()),
        sessionId,
        callbackRoute: window.location.pathname
      })
    );
  } else {
    store.dispatch(
      setNotificationModal({
        title: 'Insufficient EGLD funds',
        description: 'Current EGLD balance cannot cover the transaction fees.',
        icon: faExclamationTriangle,
        iconClassName: 'text-warning'
      })
    );
  }
}

export default sendTransactions;
