import BigNumber from 'bignumber.js';
import { DEFAULT_MIN_GAS_LIMIT } from 'constants/index';

import { accountBalanceSelector, chainIDSelector } from 'reduxStore/selectors';
import {
  setTransactionsToSign,
  setNotificationModal,
  setTransactionsDisplayInfo
} from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { NotificationTypesEnum, SignTransactionsPropsType } from 'types';
import { stringIsFloat } from 'utils';
import { SendTransactionReturnType } from './sendTransactions';
import { calcTotalFee } from './utils';

export function signTransactions({
  transactions,
  callbackRoute,
  minGasLimit = DEFAULT_MIN_GAS_LIMIT,
  customTransactionInformation,
  transactionsDisplayInfo
}: SignTransactionsPropsType): SendTransactionReturnType {
  const appState = store.getState();
  const sessionId = Date.now().toString();
  const accountBalance = accountBalanceSelector(appState);
  const storeChainId = chainIDSelector(appState);

  const transactionsPayload = Array.isArray(transactions)
    ? transactions
    : [transactions];
  const bNtotalFee = calcTotalFee(transactionsPayload, minGasLimit);
  const bNbalance = new BigNumber(
    stringIsFloat(accountBalance) ? accountBalance : '0'
  );
  const hasSufficientFunds = bNbalance.minus(bNtotalFee).isGreaterThan(0);

  if (!hasSufficientFunds) {
    const notificationPayload = {
      type: NotificationTypesEnum.warning,
      iconClassName: 'text-warning',
      title: 'Insufficient EGLD funds',
      description: 'Current EGLD balance cannot cover the transaction fees.'
    };

    store.dispatch(setNotificationModal(notificationPayload));
    return { error: 'insufficient funds', sessionId: null };
  }

  const hasValidChainId = transactionsPayload?.every(
    (tx) => tx.getChainID().valueOf() === storeChainId.valueOf()
  );
  if (!hasValidChainId) {
    const notificationPayload = {
      type: NotificationTypesEnum.warning,
      iconClassName: 'text-warning',
      title: 'Network change detected',
      description: 'The application tried to change the transaction network'
    };
    store.dispatch(setNotificationModal(notificationPayload));
    return { error: 'Invalid ChainID', sessionId: null };
  }

  const signTransactionsPayload = {
    sessionId,
    callbackRoute,
    customTransactionInformation,
    transactions: transactionsPayload.map((tx) => tx.toPlainObject())
  };

  store.dispatch(setTransactionsToSign(signTransactionsPayload));
  store.dispatch(
    setTransactionsDisplayInfo({ sessionId, transactionsDisplayInfo })
  );
  return { sessionId };
}

export default signTransactions;
