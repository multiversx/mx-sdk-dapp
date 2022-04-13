import { Address, Transaction } from '@elrondnetwork/erdjs';
import {
  gasPrice as configGasPrice,
  gasLimit as configGasLimit
} from 'constants/index';
import newTransaction from 'models/newTransaction';
import { addressSelector, chainIDSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { SendSimpleTransactionPropsType } from 'types';
import { getAccount, getLatestNonce } from 'utils';

enum ErrorCodesEnum {
  'invalidReceiver' = 'Invalid Receiver address',
  'unknownError' = 'Unknown Error. Please check the transactions and try again'
}

export async function transformAndSignTransactions({
  transactions
}: SendSimpleTransactionPropsType): Promise<Transaction[]> {
  const address = addressSelector(store.getState());
  const account = await getAccount(address);
  const nonce = getLatestNonce(account);
  return transactions.map((tx) => {
    const {
      value,
      receiver,
      data = '',
      chainID,
      version,
      options,
      gasPrice = configGasPrice,
      gasLimit = Number(configGasLimit)
    } = tx;
    let validatedReceiver = receiver;

    try {
      const addr = new Address(receiver);
      validatedReceiver = addr.hex();
    } catch (err) {
      throw ErrorCodesEnum.invalidReceiver;
    }

    const storeChainId = chainIDSelector(store.getState())
      .valueOf()
      .toString();
    const transactionsChainId = chainID || storeChainId;
    return newTransaction({
      value,
      receiver: validatedReceiver,
      data,
      gasPrice,
      gasLimit,
      nonce: Number(nonce.valueOf().toString()),
      sender: new Address(address).hex(),
      chainID: transactionsChainId,
      version,
      options
    });
  });
}

export default transformAndSignTransactions;
