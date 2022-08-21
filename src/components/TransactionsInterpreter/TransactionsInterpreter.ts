import { mainnetEgldLabel } from 'constants/network';
import { isContract } from 'utils/smartContracts';
import { getTokenFromData } from 'utils/transactions/getTokenFromData';
import { getDenominatedValue } from './helpers/getDenominatedValue';
import { getNetworkLink } from './helpers/getNetworkLink';
import { getTransactionMethod } from './helpers/getTransactionMethod';
import { getTransactionReceiver } from './helpers/getTransactionReceiver';
import { getTransactionReceiverAssets } from './helpers/getTransactionReceiverAssets';
import { getTransactionTokens } from './helpers/getTransactionTokens';
import { getTransactionTransferType } from './helpers/getTransactionTransferType';
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
  networkAddress?: string;
};

const defaultConfig: ParseTransactionsConfiguration = {
  denominationConfig: {
    egldLabel: mainnetEgldLabel
  },
  networkAddress: ''
};

export function parseTransactions(
  transactions: UITransactionType[],
  address: string,
  { denominationConfig, networkAddress } = defaultConfig
): ExtendedTransactionType[] {
  return transactions.map((transaction) =>
    processTransaction({
      transaction,
      address,
      denominationConfig,
      networkAddress
    })
  );
}

type ProcessTransactionParams = {
  transaction: UITransactionType;
  address: string;
  denominationConfig: DenominationConfig;
  networkAddress?: string;
};

export function processTransaction({
  transaction,
  address,
  denominationConfig = {
    egldLabel: 'EGLD'
  },
  networkAddress = ''
}: ProcessTransactionParams): ExtendedTransactionType {
  const tokenIdentifier =
    transaction.tokenIdentifier ?? getTokenFromData(transaction.data).tokenId;

  const receiver = getTransactionReceiver(transaction);
  const receiverAssets = getTransactionReceiverAssets(transaction);

  const direction = getTransactionTransferType(address, transaction, receiver);
  const method = getTransactionMethod(transaction);
  const transactionTokens: TokenArgumentType[] = getTransactionTokens(
    transaction
  );
  let tokenLabel = denominationConfig.egldLabel ?? mainnetEgldLabel;
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
    urlBuilder.transactionDetails(transactionHash)
  );

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
