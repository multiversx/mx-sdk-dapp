import { defaultGasLimit, defaultGasPrice } from '../../constants';
import newTransaction from '../../models/newTransaction';
import { addressSelector, chainIDSelector } from '../../redux/selectors';
import { store } from '../../redux/store';
import { getAccount, getLatestNonce } from '../../utils';
import { sendTransactions } from './sendTransactions';
import { SendSimpleTransactionPropsType } from './types';

export async function sendSimpleTransactions({
  transactions,
  minGasLimit
}: SendSimpleTransactionPropsType) {
  const transactionPayload = Array.isArray(transactions)
    ? transactions
    : [transactions];
  const address = addressSelector(store.getState());
  const account = await getAccount(address);
  const nonce = getLatestNonce(account);

  const transformedTransactions = transactionPayload.map((tx) => {
    const {
      value,
      receiver,
      data = '',
      gasPrice = defaultGasPrice,
      gasLimit = defaultGasLimit,
      chainID,
      version,
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
      nonce: Number(nonce.valueOf().toString()),
      sender: address,
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

export default sendSimpleTransactions;
