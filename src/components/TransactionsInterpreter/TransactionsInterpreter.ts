import {
  ExtendedTransactionType,
  TokenArgumentType,
  UITransactionType
} from './helpers/types';
import getTransactionMethod from './helpers/getTransactionMethod';
import { getTransactionTokens } from './helpers/getTransactionTokens';
import urlBuilder from './helpers/urlBuilder';
import { getDenominatedValue } from './helpers/getDenominatedValue';
import { getNetworkLink } from './helpers/getNetworkLink';
import { getTmeAgo } from './helpers/getTimeAgo';
import { getEgldLabel, getTokenFromData } from '../../utils';
import { isContract } from './helpers/isContract';
import { getTransactionDirection } from './helpers/getTransactionDirection';
import { NUMBER_OF_CHARACTERS_FOR_SMART_CONTRACT_ADDRESS } from 'constants/transaction-interpreter';

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
  },
  numInitCharactersForScAddress: number = NUMBER_OF_CHARACTERS_FOR_SMART_CONTRACT_ADDRESS
): ExtendedTransactionType[] {
  return transactions.map((transaction) => {
    return processTransaction(
      transaction,
      address,
      denominationConfig,
      numInitCharactersForScAddress
    );
  });
}

export function processTransaction(
  transaction: UITransactionType,
  address: string,
  denominationConfig: DenominationConfig = {
    erdLabel: 'EGLD'
  },
  numInitCharactersForScAddress: number = NUMBER_OF_CHARACTERS_FOR_SMART_CONTRACT_ADDRESS
): ExtendedTransactionType {
  const tokenIdentifier =
    transaction.tokenIdentifier ??
    (getTokenFromData(transaction.data).tokenId || getEgldLabel());

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

  // TODO create getTokenDetails utils function and compute lockedAccountName property in order to use it inside the LockedTokenAddressIcon component

  return {
    ...transaction,
    tokenIdentifier,
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
    longTimeAgo,
    isContract: isContract(transaction.sender, numInitCharactersForScAddress)
  };
}
