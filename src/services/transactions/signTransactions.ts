import BigNumber from 'bignumber.js';
import { GAS_LIMIT } from 'constants/index';

import { networkStore } from 'lib/sdkDappCore';
import { accountBalanceSelector } from 'reduxStore/selectors/accountInfoSelectors';
import {
  setNotificationModal,
  setSignTransactionsCancelMessage,
  setTransactionsDisplayInfo,
  setTransactionsToSign
} from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import {
  NotificationTypesEnum,
  SendTransactionReturnType,
  SignTransactionsPropsType
} from 'types';
import { isGuardianTx } from 'utils/transactions/isGuardianTx';
import { stringIsFloat } from 'utils/validation/stringIsFloat';
import { calcTotalFee } from './utils';

export async function signTransactions({
  transactions,
  callbackRoute,
  minGasLimit = GAS_LIMIT,
  customTransactionInformation,
  transactionsDisplayInfo
}: SignTransactionsPropsType): Promise<SendTransactionReturnType> {
  const appState = store.getState();
  const sessionId = Date.now().toString();
  const accountBalance = accountBalanceSelector(appState);
  const storeChainId = networkStore.getState().chainID;

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
    customTransactionInformation: {
      ...(customTransactionInformation ?? {}),
      signWithoutSending:
        customTransactionInformation?.signWithoutSending ?? true
    },
    transactions: transactionsPayload.map((tx) => {
      const transaction = tx.toPlainObject();

      // TODO: Remove when the protocol supports usernames for guardian transactions
      if (isGuardianTx({ data: transaction.data, onlySetGuardian: true })) {
        return transaction;
      }

      return {
        ...transaction,
        senderUsername: tx.getSenderUsername().valueOf(),
        receiverUsername: tx.getReceiverUsername().valueOf()
      };
    })
  };
  store.dispatch(setSignTransactionsCancelMessage(null));
  store.dispatch(setTransactionsToSign(signTransactionsPayload));
  store.dispatch(
    setTransactionsDisplayInfo({ sessionId, transactionsDisplayInfo })
  );
  return { sessionId };
}
