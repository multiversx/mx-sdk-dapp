import {
  TransactionOptions,
  TransactionVersion
} from '@multiversx/sdk-core/out';
import BigNumber from 'bignumber.js';
import { getGuardianData } from 'apiCalls/configuration/getGuardianData';
import { GAS_LIMIT } from 'constants/index';

import {
  accountBalanceSelector,
  addressSelector
} from 'reduxStore/selectors/accountInfoSelectors';
import { chainIDSelector } from 'reduxStore/selectors/networkConfigSelectors';
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
  const address = addressSelector(store.getState());
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

  //move to account slice
  const guardianData = await getGuardianData(address);

  const signTransactionsPayload = {
    sessionId,
    callbackRoute,
    customTransactionInformation,
    transactions:
      guardianData?.guarded && !customTransactionInformation.forceNoCosign
        ? //TODO: refactor here, including gas limit
          transactionsPayload.map((tx) => {
            const plainTx = tx.toPlainObject();
            plainTx.guardian = guardianData.activeGuardian?.address;
            // plainTx.gasLimit = 500000;  TODO: this commented allows custom gas limit from tx debug form. regular form will not work anymore
            plainTx.version = TransactionVersion.withTxOptions().valueOf();
            plainTx.options =
              TransactionOptions.withTxGuardedOptions().valueOf();

            return {
              ...plainTx
            };
          })
        : transactionsPayload.map((tx) => tx.toPlainObject())
  };
  store.dispatch(setSignTransactionsCancelMessage(null));
  store.dispatch(setTransactionsToSign(signTransactionsPayload));
  store.dispatch(
    setTransactionsDisplayInfo({ sessionId, transactionsDisplayInfo })
  );
  return { sessionId };
}
