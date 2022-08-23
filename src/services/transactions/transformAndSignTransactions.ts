import { Address, Transaction } from '@elrondnetwork/erdjs';
import BigNumber from 'bignumber.js';
import {
  GAS_LIMIT as configGasLimit,
  GAS_PER_DATA_BYTE,
  GAS_PRICE as configGasPrice
} from 'constants/index';
import { newTransaction } from 'models/newTransaction';
import { addressSelector, chainIDSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { SendSimpleTransactionPropsType } from 'types';
import { getAccount, getLatestNonce } from 'utils';

enum ErrorCodesEnum {
  'invalidReceiver' = 'Invalid Receiver address',
  'unknownError' = 'Unknown Error. Please check the transactions and try again'
}

// TODO: replace with new erdjs function
function calculateGasLimit(data?: string) {
  const bNconfigGasLimit = new BigNumber(configGasLimit);
  const bNgasPerDataByte = new BigNumber(GAS_PER_DATA_BYTE);
  const bNgasValue = data
    ? bNgasPerDataByte.times(Buffer.from(data).length)
    : 0;
  const bNgasLimit = bNconfigGasLimit.plus(bNgasValue);
  const gasLimit = bNgasLimit.toString(10);
  return gasLimit;
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
      version = 1,
      options,
      gasPrice = configGasPrice,
      gasLimit = calculateGasLimit(tx.data)
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
      gasLimit: Number(gasLimit),
      nonce: Number(nonce.valueOf().toString()),
      sender: new Address(address).hex(),
      chainID: transactionsChainId,
      version: version,
      options
    });
  });
}
