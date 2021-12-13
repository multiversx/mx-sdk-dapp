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
import {
  gasPriceModifier,
  gasPerDataByte,
  gasLimit as configGasLimit
} from '../constants';

interface CalculateFeeLimitType {
  gasLimit: number;
  gasPrice: number;
  data: string;
  chainId: string;
}

const placeholderData = {
  from: 'erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa',
  to: 'erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa'
};

export default function calculateFeeLimit({
  gasLimit,
  gasPrice,
  data: inputData,
  chainId
}: CalculateFeeLimitType) {
  const data = inputData || '';
  const transaction = new Transaction({
    nonce: new Nonce(0),
    value: Balance.Zero(),
    receiver: new Address(placeholderData.to),
    gasPrice: new GasPrice(gasPrice),
    gasLimit: new GasLimit(gasLimit),
    data: new TransactionPayload(data.trim()),
    chainID: new ChainID(chainId),
    version: new TransactionVersion(1)
  });

  const networkConfig = new NetworkConfig();
  networkConfig.MinGasLimit = new GasLimit(parseInt(configGasLimit));
  networkConfig.GasPerDataByte = gasPerDataByte;
  networkConfig.GasPriceModifier = new GasPriceModifier(gasPriceModifier);

  try {
    const bNfee = transaction.computeFee(networkConfig);
    const fee = bNfee.toString(10);
    return fee;
  } catch (err) {
    return '0';
  }
}
