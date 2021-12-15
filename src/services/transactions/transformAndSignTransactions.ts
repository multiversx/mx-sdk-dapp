import newTransaction from 'models/newTransaction';
import { addressSelector, chainIDSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { getAccount, getLatestNonce } from 'utils';
import { defaultGasPrice, defaultGasLimit } from '../../constants';
import { signTransactions } from './signTransactions';
import { SendSimpleTransactionPropsType } from './types';

export async function transformAndSignTransactions({
  transactions,
  minGasLimit
}: SendSimpleTransactionPropsType) {
  const address = addressSelector(store.getState());
  const account = await getAccount(address);
  const nonce = getLatestNonce(account);
  const transactionsPayload = transactions.map((tx) => {
    const {
      value,
      receiver,
      data = '',
      chainID,
      version,
      options,
      gasPrice = defaultGasPrice,
      gasLimit = defaultGasLimit
    } = tx;

    const storeChainId = chainIDSelector(store.getState()).valueOf().toString();
    const transactionsChainId = chainID || storeChainId;

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
  signTransactions({
    transactions: transactionsPayload,
    minGasLimit
  });
}

export default transformAndSignTransactions;
