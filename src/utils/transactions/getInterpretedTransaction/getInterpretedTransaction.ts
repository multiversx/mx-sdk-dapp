import {
  InterpretedTransactionType,
  ServerTransactionType
} from 'types/serverTransactions.types';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { isContract } from 'utils/smartContracts';
import { getTokenFromData } from 'utils/transactions/getTokenFromData';
import {
  getExplorerLink,
  getTransactionMethod,
  getTransactionReceiver,
  getTransactionReceiverAssets,
  getTransactionTokens,
  getTransactionTransferType,
  explorerUrlBuilder
} from './helpers';

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

  const direction = getTransactionTransferType(address, transaction, receiver);
  const method = getTransactionMethod(transaction);
  const transactionTokens: TokenArgumentType[] = getTransactionTokens(
    transaction
  );

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

  const transactionHash = transaction.originalTxHash
    ? `${transaction.originalTxHash}#${transaction.txHash}`
    : transaction.txHash;

  const transactionLink = getExplorerLink({
    explorerAddress,
    to: explorerUrlBuilder.transactionDetails(transactionHash)
  });

  return {
    ...transaction,
    tokenIdentifier,
    receiver,
    receiverAssets,
    transactionDetails: {
      direction,
      method,
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
