import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { ServerTransactionType } from 'types/serverTransactions.types';
import {
  TrackedTransactionResultType,
  SignedTransactionType
} from 'types/transactions.types';
import { getServerTransactionsByHashes } from './getServerTransactionsByHashes';

const serverMetadataFields = [
  'action',
  'operations',
  'function',
  'timestamp',
  'timestampMs',
  'fee',
  'gasUsed',
  'price',
  'miniBlockHash',
  'round',
  'senderShard',
  'receiverShard',
  'senderAssets',
  'receiverAssets',
  'receipt',
  'type',
  'tokenValue',
  'tokenIdentifier',
  'scamInfo'
] as const satisfies ReadonlyArray<keyof ServerTransactionType>;

const getServerMetadata = (serverTransaction?: ServerTransactionType) => {
  const metadata: Partial<ServerTransactionType> = {};

  if (serverTransaction == null) {
    return metadata;
  }

  serverMetadataFields.forEach((field) => {
    if (serverTransaction[field] !== undefined) {
      Object.assign(metadata, { [field]: serverTransaction[field] });
    }
  });

  return metadata;
};

export const getTransactionsByHashes = async (
  pendingTransactions: SignedTransactionType[]
): Promise<TrackedTransactionResultType[]> => {
  const hashes = pendingTransactions.map((tx) => tx.hash);

  const responseData = await getServerTransactionsByHashes(hashes);

  const pendingTxs = pendingTransactions.map((transaction) => {
    const txOnNetwork = responseData.find(
      (txResponse: ServerTransactionType) =>
        txResponse?.txHash === transaction.hash
    );

    return {
      ...transaction,
      ...getServerMetadata(txOnNetwork),
      status: txOnNetwork?.status as
        | TransactionServerStatusesEnum
        | TransactionBatchStatusesEnum,
      invalidTransaction: txOnNetwork == null,
      results: txOnNetwork?.results ?? [],
      previousStatus: transaction.status?.toString() || '',
      hasStatusChanged: Boolean(
        txOnNetwork && txOnNetwork.status !== transaction.status
      )
    };
  });

  return pendingTxs;
};
