import { fallbackNetworkConfigurations } from 'constants/index';
import { getInterpretedTransaction } from 'utils/transactions/getInterpretedTransaction/getInterpretedTransaction';
import transactions from './mockTransactions';

export const getMockTransactionByIndex = (index = 0) => {
  const transaction = getInterpretedTransaction({
    transaction: transactions[index] as any,
    address: transactions[index].sender,
    explorerAddress: fallbackNetworkConfigurations.devnet.explorerAddress
  });
  return transaction;
};
