import { Transaction } from '@multiversx/sdk-core/out';
import BigNumber from 'bignumber.js';
import { recommendGasPrice } from 'hooks/transactions/helpers/recommendGasPrice';
import { NetworkType } from 'types/network.types';

export const getGasPriceDetails = ({
  shard,
  gasStationMetadata,
  transaction,
  initialGasPrice = 0
}: {
  shard?: number;
  gasStationMetadata: NetworkType['gasStationMetadata'];
  transaction: Transaction;
  initialGasPrice?: number;
}) => {
  const fastPpu = gasStationMetadata
    ? gasStationMetadata[Number(shard)]?.fast
    : 0;
  const fasterPpu = gasStationMetadata
    ? gasStationMetadata[Number(shard)]?.faster
    : 0;

  const fastGasPrice = fastPpu
    ? recommendGasPrice({
        transactionDataLength: transaction.getData().toString().length,
        transactionGasLimit: transaction.getGasLimit().valueOf(),
        ppu: fastPpu
      })
    : initialGasPrice;

  const fasterGasPrice = fasterPpu
    ? recommendGasPrice({
        transactionDataLength: transaction.getData().toString().length,
        transactionGasLimit: transaction.getGasLimit().valueOf(),
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
