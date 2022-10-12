import { Transaction } from '@elrondnetwork/erdjs/out/transaction';
import axios from 'axios';
import BigNumber from 'bignumber.js';
import { NFTS_ENDPOINT } from 'apiCalls';
import { GAS_LIMIT } from 'constants/index';

import { accountBalanceSelector } from 'reduxStore/selectors/accountInfoSelectors';
import { chainIDSelector } from 'reduxStore/selectors/networkConfigSelectors';
import {
  setNotificationModal,
  setTransactionsDisplayInfo,
  setTransactionsToSign
} from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import {
  NotificationTypesEnum,
  SendTransactionReturnType,
  SignTransactionsPropsType,
  TransactionTypesEnum
} from 'types';
import {
  getNetworkConfig,
  getTokenFromData,
  parseMultiEsdtTransferData
} from 'utils';
import { stringIsFloat } from 'utils/validation/stringIsFloat';
import { calcTotalFee } from './utils';

function extractedNftIds(transactions: Transaction[]) {
  let ids: string[] = [];

  transactions.forEach((tx) => {
    const data = tx.getData().toString();
    const isNftTransfer = data.startsWith(TransactionTypesEnum.ESDTNFTTransfer);
    const isMultiNftTransfer = data.startsWith(
      TransactionTypesEnum.MultiESDTNFTTransfer
    );

    if (isMultiNftTransfer) {
      ids = [
        ...parseMultiEsdtTransferData(data)
          .filter((x) => Boolean(x.nonce))
          .map((x) => `${x.token}-${x.nonce}`)
      ];
    }

    if (isNftTransfer) {
      ids.push(getTokenFromData(data).tokenId);
    }
  });

  return ids;
}

const getHasNonTransferableTokens = async (ids: string[]) => {
  const { apiAddress } = getNetworkConfig();

  for (const id of ids) {
    try {
      const result = await axios.get(`${apiAddress}/${NFTS_ENDPOINT}/${id}`);
      if (result.data.isTransferAffected) {
        return true;
      }
    } catch (e) {
      console.error('NFT not found', e);
      return false;
    }
  }
  return false;
};

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
  const storeChainId = chainIDSelector(appState);

  const transactionsPayload = Array.isArray(transactions)
    ? transactions
    : [transactions];
  const bNtotalFee = calcTotalFee(transactionsPayload, minGasLimit);
  const bNbalance = new BigNumber(
    stringIsFloat(accountBalance) ? accountBalance : '0'
  );
  const hasSufficientFunds = bNbalance.minus(bNtotalFee).isGreaterThan(0);

  const ids = extractedNftIds(transactionsPayload);
  const hasNonTransferableToken = await getHasNonTransferableTokens(ids);

  if (hasNonTransferableToken) {
    const notificationPayload = {
      type: NotificationTypesEnum.error,
      iconClassName: 'text-danger',
      title: 'An error occurred',
      description:
        'One of the selected tokens is temporarily immovable due to a pending ESDT protocol upgrade being deployed on October 19th. Please check again later.'
    };

    store.dispatch(setNotificationModal(notificationPayload));
    return { error: 'token non transferable', sessionId: null };
  }

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
