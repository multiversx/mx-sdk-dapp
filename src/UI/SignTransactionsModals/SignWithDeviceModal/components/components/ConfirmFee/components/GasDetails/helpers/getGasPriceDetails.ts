import { Transaction } from '@multiversx/sdk-core';
import BigNumber from 'bignumber.js';
import { recommendGasPrice } from 'hooks/transactions/helpers/recommendGasPrice';
import { NetworkType } from 'types/network.types';

type GetGasPriceDetailsParamsType = {
  shard?: number;
  gasStationMetadata: NetworkType['gasStationMetadata'];
  transaction: Transaction;
  initialGasPrice?: number;
};

export const getGasPriceDetails = ({
  shard,
  gasStationMetadata,
  transaction,
  initialGasPrice = 0
}: GetGasPriceDetailsParamsType) => {
  const fastPpu = gasStationMetadata
    ? gasStationMetadata[Number(shard)]?.fast
    : 0;
  const fasterPpu = gasStationMetadata
    ? gasStationMetadata[Number(shard)]?.faster
    : 0;

  const fastGasPrice = fastPpu
    ? recommendGasPrice({
        transactionDataLength: transaction.data.length,
        transactionGasLimit: Number(transaction.gasLimit),
        ppu: fastPpu
      })
    : initialGasPrice;

  const fasterGasPrice = fasterPpu
    ? recommendGasPrice({
        transactionDataLength: transaction.data.length,
        transactionGasLimit: Number(transaction.gasLimit),
        ppu: fasterPpu
      })
    : initialGasPrice;

  const isFastGasPrice = new BigNumber(fastGasPrice).isGreaterThan(
    initialGasPrice || 0
  );

  const isFasterGasPrice = new BigNumber(fasterGasPrice).isGreaterThan(
    initialGasPrice || 0
  );

  const areRadiosEditable = isFastGasPrice || isFasterGasPrice;

  return {
    fastGasPrice,
    fasterGasPrice,
    areRadiosEditable,
    isFastGasPrice,
    isFasterGasPrice
  };
};
