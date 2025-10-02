import { ITransactionListItem } from 'lib/sdkDappUi';
import { addressSelector } from 'store/selectors/accountSelectors';
import {
  egldLabelSelector,
  explorerAddressSelector
} from 'store/selectors/networkSelectors';
import { getStore } from 'store/store';
import { StoreType } from 'store/store.types';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { ServerTransactionType } from 'types/serverTransactions.types';
import { explorerUrlBuilder } from 'utils/transactions/explorerUrlBuilder';
import { getExplorerLink } from 'utils/transactions/getExplorerLink';
import { getReceiverData } from 'utils/transactions/getTransactionsHistory/helpers/getReceiverData';
import { getTransactionAction } from './getTransactionAction';
import { getTransactionAmount } from './getTransactionAmount';
import { getTransactionAsset } from './getTransactionAsset';
import { getTransactionAssets } from './getTransactionAssets';

interface IMapTransactionToListItemParamsType {
  transaction: ServerTransactionType;
  isPending?: boolean;
  profileImages?: Record<string, string>;
  store?: StoreType;
}

export const mapTransactionToListItem = ({
  transaction,
  isPending = false,
  store = getStore().getState()
}: IMapTransactionToListItemParamsType): ITransactionListItem => {
  const { receiver, receiverAssets } = getReceiverData(transaction);
  const address = addressSelector(store);
  const isIncomingTransaction = address === receiver;
  const egldLabel = egldLabelSelector(store);
  const explorerAddress = explorerAddressSelector(store);

  const action = getTransactionAction({
    transaction,
    currentUserAddress: address,
    egldLabel,
    isPending
  });

  const transactionAssets = getTransactionAssets({
    userIsReceiver: receiver === address,
    transaction,
    egldLabel
  });

  const hash = transaction.originalTxHash ?? transaction.txHash;

  const transactionListItem: ITransactionListItem = {
    asset: getTransactionAsset({
      ...transaction,
      transactionAssets,
      showDefaultState: isPending,
      status: transaction.status as TransactionServerStatusesEnum
    }),
    interactor: isIncomingTransaction ? transaction.sender : receiver,
    interactorAsset: isIncomingTransaction
      ? transaction.senderAssets?.iconSvg ?? transaction.senderAssets?.iconPng
      : receiverAssets?.iconSvg ?? receiverAssets?.iconPng,
    directionLabel: isIncomingTransaction ? 'From' : 'To',
    action,
    amount: getTransactionAmount({
      transactionAssets,
      isIncomingTransaction
    }),
    hash,
    status: transaction.status as TransactionServerStatusesEnum,
    timestamp: transaction.timestamp,
    link: getExplorerLink({
      explorerAddress,
      to: explorerUrlBuilder.transactionDetails(hash)
    })
  };

  return transactionListItem;
};
