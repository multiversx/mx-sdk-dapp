import {
  Transaction,
  Nonce,
  Balance,
  GasPrice,
  GasLimit,
  TransactionPayload,
  ChainID,
  TransactionVersion,
  Address,
  NetworkConfig,
  GasPriceModifier
} from '@elrondnetwork/erdjs';
import { stringIsFloat, stringIsInteger } from 'utils/validation';

interface CalculateFeeLimitType {
  gasLimit: string;
  gasPrice: string;
  data: string;
  gasPerDataByte: string;
  gasPriceModifier: string;
  chainId: string;
  minGasLimit?: string;
  defaultGasPrice?: string;
}
const placeholderData = {
  from: 'erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa',
  to: 'erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa'
};
export function calculateFeeLimit({
  minGasLimit = '50000',
  gasLimit,
  gasPrice,
  data: inputData,
  gasPerDataByte,
  gasPriceModifier,
  defaultGasPrice = '1000000000',
  chainId
}: CalculateFeeLimitType) {
  const data = inputData || '';
  const validGasLimit = stringIsInteger(gasLimit) ? gasLimit : minGasLimit;
  const validGasPrice = stringIsFloat(gasPrice) ? gasPrice : defaultGasPrice;
  const transaction = new Transaction({
    nonce: new Nonce(0),
    value: Balance.Zero(),
    receiver: new Address(placeholderData.to),
    gasPrice: new GasPrice(parseInt(validGasPrice)),
    gasLimit: new GasLimit(parseInt(validGasLimit)),
    data: new TransactionPayload(data.trim()),
    chainID: new ChainID(chainId),
    version: new TransactionVersion(1)
  });

  const networkConfig = new NetworkConfig();
  networkConfig.MinGasLimit = new GasLimit(parseInt(minGasLimit));
  networkConfig.GasPerDataByte = parseInt(gasPerDataByte);
  networkConfig.GasPriceModifier = new GasPriceModifier(
    parseFloat(gasPriceModifier)
  );
  try {
    const bNfee = transaction.computeFee(networkConfig);
    const fee = bNfee.toString(10);
    return fee;
  } catch (err) {
    console.error('Unable to calculate fee limit', err);
    return '0';
  }
}
