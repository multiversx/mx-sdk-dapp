import BigNumber from 'bignumber.js';
import {
  EXTRA_GAS_LIMIT_GUARDED_TX,
  GAS_LIMIT,
  GAS_PRICE
} from 'constants/mvx.constants';
import { Transaction, Address, TransactionComputer } from 'lib/sdkCore';
import { stringIsFloat, stringIsInteger } from 'lib/sdkDappUtils';
import { isGuardianTx } from 'utils/transactions/isGuardianTx';

export interface CalculateFeeLimitType {
  gasLimit: string;
  gasPrice: string;
  data: string | Uint8Array;
  gasPerDataByte: string;
  gasPriceModifier: string;
  chainId: string;
  minGasLimit?: string;
  defaultGasPrice?: string;
  from: string;
  to: string;
}
export function calculateFeeLimit({
  from,
  to,
  minGasLimit = String(GAS_LIMIT),
  gasLimit,
  gasPrice,
  data: inputData,
  gasPerDataByte,
  gasPriceModifier,
  defaultGasPrice = String(GAS_PRICE),
  chainId
}: CalculateFeeLimitType) {
  // bytes are used as they are, so that the data length is not re-encoded
  const dataBytes =
    typeof inputData === 'string' || inputData == null
      ? new Uint8Array(Buffer.from(inputData || ''))
      : inputData;
  const data = Buffer.from(dataBytes).toString();
  const validGasLimit = stringIsInteger(gasLimit) ? gasLimit : minGasLimit;

  // We need to add extra gas fee for guardian transactions
  const extraGasLimit = isGuardianTx({ data }) ? EXTRA_GAS_LIMIT_GUARDED_TX : 0;
  const usedGasLimit = new BigNumber(validGasLimit)
    .plus(extraGasLimit)
    .toNumber();

  const validGasPrice = stringIsFloat(gasPrice) ? gasPrice : defaultGasPrice;

  try {
    const transaction = new Transaction({
      nonce: BigInt(0),
      value: BigInt(0),
      receiver: new Address(to),
      sender: new Address(from),
      gasPrice: BigInt(validGasPrice),
      gasLimit: BigInt(usedGasLimit),
      data: dataBytes,
      chainID: chainId,
      version: 1
    });

    const transactionComputer = new TransactionComputer();
    const bNfee = transactionComputer.computeTransactionFee(transaction, {
      gasPerDataByte: BigInt(gasPerDataByte),
      minGasLimit: BigInt(minGasLimit),
      gasPriceModifier: parseFloat(gasPriceModifier),
      chainID: chainId
    });
    return bNfee.toString(10);
  } catch (err) {
    console.error(err);
    return null;
  }
}
