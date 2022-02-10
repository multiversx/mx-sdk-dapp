import axios from 'axios';
import { networkConfigSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { SmartContractResult, TransactionServerStatusesEnum } from 'types';

export type GetTransactionsByHashesReturnType = {
  hash: string;
  invalidTransaction: boolean;
  status: TransactionServerStatusesEnum;
  results: SmartContractResult[];
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
  const networkConfig = networkConfigSelector(store.getState());
  const hashes = pendingTransactions.map((tx) => tx.hash);
  const { data } = await axios.get(
    `${networkConfig.network.apiAddress}/transactions`,
    {
      params: {
        hashes: hashes.join(','),
        withScResults: true
      }
    }
  );
  return pendingTransactions.map(({ hash, previousStatus }) => {
    const txOnNetwork = data.find(
      (txResponse: any) => txResponse.txHash === hash
    );
    return {
      hash,
      invalidTransaction: txOnNetwork == null,
      status: txOnNetwork.status,
      results: txOnNetwork.results,
      receiver: txOnNetwork?.receiver,
      previousStatus,
      data: txOnNetwork.data,
      hasStatusChanged: status !== previousStatus
    };
  });
}
