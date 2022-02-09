import { TransactionHash, TypedResult } from '@elrondnetwork/erdjs';
import { apiProviderSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { TransactionServerStatusesEnum } from 'types';
import { getPlainTransactionStatus } from 'utils';

export type GetTransactionsByHashesReturnType = {
  hash: string;
  invalidTransaction: boolean;
  status: TransactionServerStatusesEnum;
  results: TypedResult[];
  receiver: string;
  data: string;
  previousStatus: string;
  hasStatusChanged: boolean;
}[];

export type PendingTransactionsType = {
  hash: string;
  previousStatus: string;
}[];

export async function getTransactionsByHashes(
  pendingTransactions: PendingTransactionsType
): Promise<GetTransactionsByHashesReturnType> {
  const apiProvider = apiProviderSelector(store.getState());
  const responses = [];
  for (const { hash, previousStatus } of pendingTransactions) {
    const txOnNetwork = await apiProvider.getTransaction(
      new TransactionHash(hash)
    );
    const txResponse = {
      hash,
      invalidTransaction: txOnNetwork == null,
      status: getPlainTransactionStatus(txOnNetwork.status),
      results: txOnNetwork?.getSmartContractResults()?.getAllResults(),
      receiver: txOnNetwork?.receiver?.bech32(),
      previousStatus,
      data: txOnNetwork.data.valueOf().toString(),
      hasStatusChanged: status !== previousStatus
    };
    responses.push(txResponse);
  }
  return responses;
}
