import { MAINNET_EGLD_LABEL } from 'constants/network';
import {
  InterpretedTransactionType,
  ServerTransactionType
} from 'types/serverTransactions.types';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { isContract } from 'utils/smartContracts';
import { getTokenFromData } from 'utils/transactions/getTokenFromData';
import {
  defaultAmountFormatConfig,
  defaultInterpreterExplorerAddress,
  getFormattedAmount,
  getExplorerLink,
  getTransactionMethod,
  getTransactionReceiver,
  getTransactionReceiverAssets,
  getTransactionTokens,
  getTransactionTransferType,
  TransactionAmountFormatConfigType,
  explorerUrlBuilder
} from './helpers';

export interface GetInterpretedTransactionType {
  address: string;
  amountFormatConfig: TransactionAmountFormatConfigType;
  explorerAddress: string;
  transaction: ServerTransactionType;
}

export function getInterpretedTransaction({
  transaction,
  address,
  amountFormatConfig = defaultAmountFormatConfig,
  explorerAddress = defaultInterpreterExplorerAddress
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
  let tokenLabel = amountFormatConfig.egldLabel ?? MAINNET_EGLD_LABEL;
  if (transactionTokens.length > 0) {
    const txToken = transactionTokens[0];
    tokenLabel = txToken.ticker ?? tokenLabel;
  }

  const formattedValue = getFormattedAmount(transaction, amountFormatConfig);
  const fullFormattedValue = getFormattedAmount(transaction, {
    ...amountFormatConfig,
    showLastNonZeroDecimal: true
  });

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
    tokenLabel,
    amountInfo: {
      formattedValue,
      fullFormattedValue
    },
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
