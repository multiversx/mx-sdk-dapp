import { TransactionHash, TypedResult } from '@elrondnetwork/erdjs';
import { apiProviderSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { TransactionServerStatusesEnum } from 'types';
import { getPlainTransactionStatus } from 'utils';

interface GetTransactionsByHashesReturnType {
  hash: string;
  invalidTransaction: boolean;
  status: TransactionServerStatusesEnum;
  results: TypedResult[];
  receiver: string;
  previousStatus: string;
  hasStatusChanged: boolean;
}

export async function getTransactionsByHashes(
  pendingTransactions: { hash: string; previousStatus: string }[]
): Promise<GetTransactionsByHashesReturnType[]> {
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
      hasStatusChanged: status !== previousStatus
    };
    responses.push(txResponse);
  }
  return responses;
}
