import { MAINNET_EGLD_LABEL } from 'constants/network';
import {
  ExtendedTransactionType,
  InterpretServerTransactionType
} from 'types/serverTransactions.types';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { isContract } from 'utils/smartContracts';
import { getTokenFromData } from 'utils/transactions/getTokenFromData';
import {
  defaultAmountFormatConfig,
  defaultInterpreterExplorerAddress,
  getFormattedAmount,
  getNetworkLink,
  getTransactionMethod,
  getTransactionReceiver,
  getTransactionReceiverAssets,
  getTransactionTokens,
  getTransactionTransferType,
  urlBuilder
} from './helpers';

export function interpretServerTransaction({
  transaction,
  address,
  amountFormatConfig = defaultAmountFormatConfig,
  explorerAddress = defaultInterpreterExplorerAddress
}: InterpretServerTransactionType): ExtendedTransactionType {
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

  const senderLink = getNetworkLink(
    explorerAddress,
    urlBuilder.accountDetails(transaction.sender)
  );
  const receiverLink = getNetworkLink(
    explorerAddress,
    urlBuilder.accountDetails(receiver)
  );
  const senderShardLink = getNetworkLink(
    explorerAddress,
    urlBuilder.senderShard(transaction.senderShard)
  );
  const receiverShardLink = getNetworkLink(
    explorerAddress,
    urlBuilder.receiverShard(transaction.receiverShard)
  );

  const transactionHash = transaction.originalTxHash
    ? `${transaction.originalTxHash}#${transaction.txHash}`
    : transaction.txHash;
  const transactionLink = getNetworkLink(
    explorerAddress,
    urlBuilder.transactionDetails(transactionHash)
  );

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
