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
import { getEgldLabel, getTokenFromData } from 'utils';
import { isContract } from './helpers/isContract';
import { getTransactionType } from './helpers/getTransactionType';
import { NUMBER_OF_CHARACTERS_FOR_SMART_CONTRACT_ADDRESS } from 'constants/transaction-interpreter';
import { parseTransactionTime } from './helpers/parseTransactionTime';
import { getTransactionReceiver } from './helpers/getTransactionReceiver';
import { getTransactionReceiverAssets } from './helpers/getTransactionReceiverAssets';

export type DenominationConfig = {
  egldLabel?: string;
  decimals?: number;
  denomination?: number;
  showLastNonZeroDecimal?: boolean;
  showLabel?: boolean;
  token?: string;
};

export type ParseTransactionsConfiguration = {
  denominationConfig: DenominationConfig;
  numInitCharactersForScAddress: number;
};

const defaultConfig: ParseTransactionsConfiguration = {
  denominationConfig: {
    egldLabel: 'EGLD'
  },
  numInitCharactersForScAddress: NUMBER_OF_CHARACTERS_FOR_SMART_CONTRACT_ADDRESS
};

export function parseTransactions(
  transactions: UITransactionType[],
  address: string,
  { denominationConfig, numInitCharactersForScAddress } = defaultConfig
): ExtendedTransactionType[] {
  return transactions.map((transaction) =>
    processTransaction(
      transaction,
      address,
      denominationConfig,
      numInitCharactersForScAddress
    )
  );
}

export function processTransaction(
  transaction: UITransactionType,
  address: string,
  denominationConfig: DenominationConfig = {
    egldLabel: 'EGLD'
  },
  numInitCharactersForScAddress: number = NUMBER_OF_CHARACTERS_FOR_SMART_CONTRACT_ADDRESS
): ExtendedTransactionType {
  const tokenIdentifier =
    transaction.tokenIdentifier ??
    (getTokenFromData(transaction.data).tokenId || getEgldLabel());

  const receiver = getTransactionReceiver(transaction);
  const receiverAssets = getTransactionReceiverAssets(transaction);

  const direction = getTransactionType(address, transaction, receiver);
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

  const transactionHash = transaction.originalTxHash
    ? `${transaction.originalTxHash}#${transaction.txHash}`
    : transaction.txHash;
  const transactionLink = getNetworkLink(`/transactions/${transactionHash}`);

  const { shortTimeAgo, longTimeAgo } = parseTransactionTime(transaction);

  return {
    ...transaction,
    tokenIdentifier,
    receiver,
    receiverAssets,
    denomination: {
      denominatedValue,
      fullDenominatedValue
    },
    transactionDetails: {
      direction,
      method,
      transactionTokens,
      isContract: isContract(transaction.sender, numInitCharactersForScAddress)
    },
    links: {
      senderLink,
      receiverLink,
      senderShardLink,
      receiverShardLink,
      transactionLink
    },
    dateTime: {
      shortTimeAgo,
      longTimeAgo
    }
  };
}
