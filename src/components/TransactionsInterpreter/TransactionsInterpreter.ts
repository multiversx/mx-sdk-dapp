import {
  ExtendedTransactionType,
  TokenArgumentType,
  TransferTypeEnum,
  UITransactionType
} from './helpers/types';
import getTransactionMethod from './helpers/getTransactionMethod';
import { getTransactionTokens } from './helpers/getTransactionTokens';
import urlBuilder from './helpers/urlBuilder';
import { getDenominatedValue } from './helpers/getDenominatedValue';
import { getNetworkLink } from './helpers/getNetworkLink';
import { getTmeAgo } from './helpers/getTimeAgo';

export type DenominationConfig = {
  erdLabel?: string;
  decimals?: number;
  denomination?: number;
  showLastNonZeroDecimal?: boolean;
  showLabel?: boolean;
  token?: string;
};

export function parseTransactions(
  transactions: UITransactionType[],
  address: string,
  denominationConfig: DenominationConfig = {
    erdLabel: 'EGLD'
  }
): ExtendedTransactionType[] {
  return transactions.map((transaction) => {
    return processTransaction(transaction, address, denominationConfig);
  });
}

function getTransactionDirection(
  address: string,
  transaction: UITransactionType,
  receiver: string
) {
  const directionOut = address === transaction.sender;
  const directionIn = address === receiver;
  const directionSelf = directionOut && directionIn;
  const isScResult = transaction?.type === TransferTypeEnum.SmartContractResult;

  let direction = 'Out';
  switch (true) {
    case isScResult:
      direction = 'Internal';
      break;
    case directionSelf:
      direction = 'Self';
      break;
    case directionOut:
      direction = 'Out';
      break;
    case directionIn:
      direction = 'In';
      break;
  }
  return direction;
}

export function processTransaction(
  transaction: UITransactionType,
  address: string,
  denominationConfig: DenominationConfig = {
    erdLabel: 'EGLD'
  }
): ExtendedTransactionType {
  let receiver = transaction.receiver;
  if (transaction.action && transaction.action.arguments?.receiver) {
    receiver = transaction.action.arguments.receiver;
  }

  const receiverAssets =
    transaction.receiver === receiver ? transaction.receiverAssets : undefined;

  const direction = getTransactionDirection(address, transaction, receiver);
  const method = getTransactionMethod(transaction);
  const transactionTokens: TokenArgumentType[] = getTransactionTokens(
    transaction
  );

  const denominatedValue = getDenominatedValue(transaction, denominationConfig);
  const fullDenominatedValue = getDenominatedValue(transaction, {
    ...denominationConfig,
    showLastNonZeroDecimal: true
  });

  const senderLink = getNetworkLink(
    urlBuilder.accountDetails(transaction.sender)
  );
  const receiverLink = getNetworkLink(urlBuilder.accountDetails(receiver));
  const senderShardLink = getNetworkLink(
    urlBuilder.senderShard(transaction.senderShard)
  );
  const receiverShardLink = getNetworkLink(
    urlBuilder.receiverShard(transaction.receiverShard)
  );
  const transactionLink = getNetworkLink(
    `/transactions/${
      transaction.originalTxHash
        ? `${transaction.originalTxHash}#${transaction.txHash}`
        : transaction.txHash
    }`
  );

  const shortTimeAgo = getTmeAgo(transaction.timestamp, true);
  const longTimeAgo = getTmeAgo(transaction.timestamp, false);

  return {
    ...transaction,
    receiver,
    receiverAssets,
    direction,
    method,
    transactionTokens,
    denominatedValue,
    fullDenominatedValue,
    senderLink,
    receiverLink,
    senderShardLink,
    receiverShardLink,
    transactionLink,
    shortTimeAgo,
    longTimeAgo
  };
}
