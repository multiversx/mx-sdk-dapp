import {
  InterpretedTransactionType,
  ServerTransactionType,
  TransactionAgeType,
  TransactionMethodType
} from 'types/serverTransactions.types';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { timeAgo } from 'utils/operations/timeRemaining';
import { isContract } from 'utils/validation';
import { explorerUrlBuilder } from '../explorerUrlBuilder';
import { getExplorerLink } from '../getExplorerLink';
import { getHumanReadableTimeFormat } from '../getHumanReadableTimeFormat';
import { getTokenFromData } from './helpers/getTokenFromData';
import { getTransactionIconInfo } from './helpers/getTransactionIconInfo';
import { getTransactionMethod } from './helpers/getTransactionMethod';
import { getTransactionReceiver } from './helpers/getTransactionReceiver';
import { getTransactionReceiverAssets } from './helpers/getTransactionReceiverAssets';
import { getTransactionTokens } from './helpers/getTransactionTokens';
import { getTransactionTransferType } from './helpers/getTransactionTransferType';

export interface GetInterpretedTransactionType {
  address: string;
  explorerAddress: string;
  transaction: ServerTransactionType;
}

export function getInterpretedTransaction({
  transaction,
  address,
  explorerAddress
}: GetInterpretedTransactionType): InterpretedTransactionType {
  const tokenIdentifier =
    transaction.tokenIdentifier ?? getTokenFromData(transaction.data).tokenId;

  const receiver = getTransactionReceiver(transaction);
  const receiverAssets = getTransactionReceiverAssets(transaction);
  const age: TransactionAgeType = {
    timeAgo: timeAgo(transaction.timestamp * 1000, true),
    tooltip: getHumanReadableTimeFormat({
      value: transaction.timestamp,
      noSeconds: false,
      utc: true
    })
  };

  const direction = getTransactionTransferType({
    address,
    transaction,
    receiver
  });

  const method: TransactionMethodType = {
    actionDescription: transaction.action?.description,
    name: getTransactionMethod(transaction)
  };

  const transactionTokens: TokenArgumentType[] =
    getTransactionTokens(transaction);

  const senderLink = getExplorerLink({
    explorerAddress,
    to: explorerUrlBuilder.accountDetails(transaction.sender)
  });

  const receiverLink = getExplorerLink({
    explorerAddress,
    to: explorerUrlBuilder.accountDetails(receiver)
  });

  const senderShardLink = getExplorerLink({
    explorerAddress,
    to: explorerUrlBuilder.senderShard(transaction.senderShard)
  });

  const receiverShardLink = getExplorerLink({
    explorerAddress,
    to: explorerUrlBuilder.receiverShard(transaction.receiverShard)
  });

  const transactionHash = transaction.originalTxHash || transaction.txHash;

  const transactionLink = getExplorerLink({
    explorerAddress,
    to: explorerUrlBuilder.transactionDetails(transactionHash)
  });

  return {
    ...transaction,
    txHash: transactionHash,
    tokenIdentifier,
    receiver,
    receiverAssets,
    transactionDetails: {
      age,
      direction,
      method,
      iconInfo: getTransactionIconInfo(transaction),
      transactionTokens,
      isContract: isContract(transaction.sender)
    },
    links: {
      senderLink,
      receiverLink,
      senderShardLink,
      receiverShardLink,
      transactionLink
    }
  };
}
