import { Address, Transaction } from '@multiversx/sdk-core';
import BigNumber from 'bignumber.js';

import { GAS_LIMIT, GAS_PER_DATA_BYTE, GAS_PRICE } from 'constants/index';
import { newTransaction } from 'models/newTransaction';
import { addressSelector, chainIDSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { SendSimpleTransactionPropsType } from 'types';

import { getAccount } from 'utils/account/getAccount';
import { getLatestNonce } from 'utils/account/getLatestNonce';

enum ErrorCodesEnum {
  'invalidReceiver' = 'Invalid Receiver address',
  'unknownError' = 'Unknown Error. Please check the transactions and try again'
}

// TODO: add guarded account gas limit
function calculateGasLimit(data?: string) {
  const bNconfigGasLimit = new BigNumber(GAS_LIMIT);
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
      gasPrice = GAS_PRICE,
      gasLimit = calculateGasLimit(tx.data),
      guardian,
      guardianSignature,
      nonce: txNonce = 0
    } = tx;
    let validatedReceiver = receiver;

    try {
      const addr = new Address(receiver);
      validatedReceiver = addr.hex();
    } catch (err) {
      throw ErrorCodesEnum.invalidReceiver;
    }

    const computedNonce = txNonce > nonce ? txNonce : nonce;

    const storeChainId = chainIDSelector(store.getState()).valueOf().toString();
    const transactionsChainId = chainID || storeChainId;
    return newTransaction({
      value,
      receiver: validatedReceiver,
      data,
      gasPrice,
      gasLimit: Number(gasLimit),
      nonce: Number(computedNonce.valueOf().toString()),
      sender: new Address(address).hex(),
      chainID: transactionsChainId,
      version,
      options,
      guardian,
      guardianSignature
    });
  });
}
