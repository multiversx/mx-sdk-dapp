import { Address } from '@elrondnetwork/erdjs/out';
import newTransaction from 'models/newTransaction';
import { addressSelector, chainIDSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { getAccount, getLatestNonce } from 'utils';
import { encodeToBase64, isStringBase64 } from 'utils/decoders/base64Utils';
import { defaultGasPrice, defaultGasLimit } from '../../constants';
import { SendTransactionReturnType } from './sendTransactions';
import { signTransactions } from './signTransactions';
import { SendSimpleTransactionPropsType } from './types';

enum ErrorCodesEnum {
  'invalidReceiver' = 'Invalid Receiver address',
  'unknownError' = 'Unknown Error. Please check the transactions and try again'
}

export async function transformAndSignTransactions({
  transactions,
  minGasLimit
}: SendSimpleTransactionPropsType): Promise<SendTransactionReturnType> {
  const address = addressSelector(store.getState());
  const account = await getAccount(address);
  const nonce = getLatestNonce(account);
  try {
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
        data: isStringBase64(data) ? data : encodeToBase64(data),
        gasPrice,
        gasLimit,
        nonce: Number(nonce.valueOf().toString()),
        sender: new Address(address).hex(),
        chainID: transactionsChainId,
        version,
        options
      });
    });

    return signTransactions({
      transactions: transactionsPayload,
      minGasLimit
    });
  } catch (err) {
    console.error('error signing transaction', err.message);
    return { error: err.message };
  }
}

export default transformAndSignTransactions;
