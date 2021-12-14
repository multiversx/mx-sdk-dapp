import { defaultGasLimit, defaultGasPrice } from '../../constants';
import newTransaction from '../../models/newTransaction';
import { chainIDSelector } from '../../redux/selectors';
import { store } from '../../redux/store';
import { sendTransactions } from './sendTransactions';
import { SendSimpleTransactionPropsType } from './types';

export function sendSimpleTransactions({
  transactions,
  minGasLimit
}: SendSimpleTransactionPropsType) {
  const transactionPayload = Array.isArray(transactions)
    ? transactions
    : [transactions];

  const transformedTransactions = transactionPayload.map((tx) => {
    const {
      value,
      receiver,
      data,
      gasPrice = defaultGasPrice,
      gasLimit = defaultGasLimit,
      chainID,
      version = 1,
      options
    } = tx;
    let transactionsChainId = chainID;
    if (transactionsChainId == null) {
      transactionsChainId = chainIDSelector(store.getState())
        .valueOf()
        .toString();
    }
    return newTransaction({
      value,
      receiver,
      data,
      gasPrice,
      gasLimit,
      chainID: transactionsChainId,
      version,
      options
    });
  });
  sendTransactions({
    transactionPayload: transformedTransactions,
    minGasLimit
  });
}
