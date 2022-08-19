import { NUMBER_OF_CHARACTERS_FOR_SMART_CONTRACT_ADDRESS } from 'constants/transaction-interpreter';
import { getEgldLabel, getTokenFromData } from 'utils';
import { getDenominatedValue } from './helpers/getDenominatedValue';
import { getNetworkLink } from './helpers/getNetworkLink';
import getTransactionMethod from './helpers/getTransactionMethod';
import { getTransactionReceiver } from './helpers/getTransactionReceiver';
import { getTransactionReceiverAssets } from './helpers/getTransactionReceiverAssets';
import { getTransactionTokens } from './helpers/getTransactionTokens';
import { getTransactionType } from './helpers/getTransactionType';
import { isContract } from './helpers/isContract';
import { parseTransactionTime } from './helpers/parseTransactionTime';
import {
  ExtendedTransactionType,
  TokenArgumentType,
  UITransactionType
} from './helpers/types';
import urlBuilder from './helpers/urlBuilder';

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
  networkAddress?: string;
};

const defaultConfig: ParseTransactionsConfiguration = {
  denominationConfig: {
    egldLabel: 'EGLD'
  },
  numInitCharactersForScAddress: NUMBER_OF_CHARACTERS_FOR_SMART_CONTRACT_ADDRESS,
  networkAddress: ''
};

export function parseTransactions(
  transactions: UITransactionType[],
  address: string,
  {
    denominationConfig,
    numInitCharactersForScAddress,
    networkAddress
  } = defaultConfig
): ExtendedTransactionType[] {
  return transactions.map((transaction) =>
    processTransaction({
      transaction,
      address,
      denominationConfig,
      numInitCharactersForScAddress,
      networkAddress
    })
  );
}

type ProcessTransactionParams = {
  transaction: UITransactionType;
  address: string;
  denominationConfig: DenominationConfig;
  numInitCharactersForScAddress: number;
  networkAddress?: string;
};

export function processTransaction({
  transaction,
  address,
  denominationConfig = {
    egldLabel: 'EGLD'
  },
  numInitCharactersForScAddress = NUMBER_OF_CHARACTERS_FOR_SMART_CONTRACT_ADDRESS,
  networkAddress = ''
}: ProcessTransactionParams): ExtendedTransactionType {
  const tokenIdentifier =
    transaction.tokenIdentifier ?? getTokenFromData(transaction.data).tokenId;

  const receiver = getTransactionReceiver(transaction);
  const receiverAssets = getTransactionReceiverAssets(transaction);

  const direction = getTransactionType(address, transaction, receiver);
  const method = getTransactionMethod(transaction);
  const transactionTokens: TokenArgumentType[] = getTransactionTokens(
    transaction
  );
  let tokenLabel = getEgldLabel();
  if (transactionTokens.length > 0) {
    const txToken = transactionTokens[0];
    tokenLabel = txToken.ticker ?? tokenLabel;
  }

  const denominatedValue = getDenominatedValue(transaction, denominationConfig);
  const fullDenominatedValue = getDenominatedValue(transaction, {
    ...denominationConfig,
    showLastNonZeroDecimal: true
  });

  const senderLink = getNetworkLink(
    networkAddress,
    urlBuilder.accountDetails(transaction.sender)
  );
  const receiverLink = getNetworkLink(
    networkAddress,
    urlBuilder.accountDetails(receiver)
  );
  const senderShardLink = getNetworkLink(
    networkAddress,
    urlBuilder.senderShard(transaction.senderShard)
  );
  const receiverShardLink = getNetworkLink(
    networkAddress,
    urlBuilder.receiverShard(transaction.receiverShard)
  );

  const transactionHash = transaction.originalTxHash
    ? `${transaction.originalTxHash}#${transaction.txHash}`
    : transaction.txHash;
  const transactionLink = getNetworkLink(
    networkAddress,
    `/transactions/${transactionHash}`
  );

  const { shortTimeAgo, longTimeAgo } = parseTransactionTime(transaction);

  return {
    ...transaction,
    tokenIdentifier,
    receiver,
    receiverAssets,
    tokenLabel,
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
