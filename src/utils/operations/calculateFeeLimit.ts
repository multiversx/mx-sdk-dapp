import {
  Transaction,
  TransactionPayload,
  TransactionVersion,
  Address,
  TokenTransfer
} from '@multiversx/sdk-core';
import { NetworkConfig } from '@multiversx/sdk-network-providers';
import {
  EXTRA_GAS_LIMIT_GUARDED_TX,
  GAS_LIMIT,
  GAS_PRICE,
  ZERO
} from 'constants/index';
import { stringIsFloat, stringIsInteger } from 'utils/validation';

export interface CalculateFeeLimitType {
  gasLimit: string;
  gasPrice: string;
  data: string;
  gasPerDataByte: string;
  gasPriceModifier: string;
  chainId: string;
  isGuarded?: boolean;
  minGasLimit?: string;
  defaultGasPrice?: string;
}
const placeholderData = {
  from: 'erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa',
  to: 'erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa'
};

export function calculateFeeLimit({
  minGasLimit = String(GAS_LIMIT),
  gasLimit,
  gasPrice,
  isGuarded,
  data: inputData,
  gasPerDataByte,
  gasPriceModifier,
  defaultGasPrice = String(GAS_PRICE),
  chainId
}: CalculateFeeLimitType) {
  const data = inputData || '';
  const guardedTransactionGasLimit = isGuarded
    ? minGasLimit + EXTRA_GAS_LIMIT_GUARDED_TX
    : minGasLimit;
  const validGasLimit = stringIsInteger(gasLimit)
    ? gasLimit
    : guardedTransactionGasLimit;
  const validGasPrice = stringIsFloat(gasPrice) ? gasPrice : defaultGasPrice;
  const transaction = new Transaction({
    nonce: 0,
    value: TokenTransfer.egldFromAmount('0'),
    receiver: new Address(placeholderData.to),
    sender: new Address(placeholderData.to),
    gasPrice: parseInt(validGasPrice),
    gasLimit: parseInt(validGasLimit),
    data: new TransactionPayload(data.trim()),
    chainID: chainId,
    version: new TransactionVersion(1)
  });

  const networkConfig = new NetworkConfig();
  networkConfig.MinGasLimit = parseInt(minGasLimit);
  networkConfig.GasPerDataByte = parseInt(gasPerDataByte);
  networkConfig.GasPriceModifier = parseFloat(gasPriceModifier);
  try {
    const bNfee = transaction.computeFee(networkConfig);
    const fee = bNfee.toString(10);
    return fee;
  } catch (err) {
    return ZERO;
  }
}
