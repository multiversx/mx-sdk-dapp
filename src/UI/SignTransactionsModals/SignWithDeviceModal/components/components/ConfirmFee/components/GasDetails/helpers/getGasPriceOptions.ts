import { IPlainTransactionObject } from '@multiversx/sdk-core';
import BigNumber from 'bignumber.js';
import { EMPTY_PPU } from 'constants/network';
import { NetworkType } from 'types/network.types';
import { getRecommendedGasPrice } from './getRecommendedGasPrice';

type GetGasPriceOptionsParamsType = {
  shard?: number;
  gasStationMetadata: NetworkType['gasStationMetadata'];
  transaction: IPlainTransactionObject;
  initialGasPrice?: number;
};

export const getGasPriceOptions = ({
  shard,
  gasStationMetadata,
  transaction,
  initialGasPrice = 0
}: GetGasPriceOptionsParamsType) => {
  const fastPpu = gasStationMetadata
    ? gasStationMetadata[Number(shard)]?.fast
    : EMPTY_PPU;

  const fasterPpu = gasStationMetadata
    ? gasStationMetadata[Number(shard)]?.faster
    : EMPTY_PPU;

  const standardGasPrice = getRecommendedGasPrice({
    transaction,
    gasPriceData: {
      initialGasPrice,
      ppu: EMPTY_PPU
    }
  });

  const fastGasPrice = getRecommendedGasPrice({
    transaction,
    gasPriceData: {
      initialGasPrice,
      ppu: fastPpu
    }
  });

  const fasterGasPrice = getRecommendedGasPrice({
    transaction,
    gasPriceData: {
      initialGasPrice,
      ppu: fasterPpu
    }
  });

  const gasPriceOptions = [
    {
      label: 'Standard',
      value: standardGasPrice
    }
  ];

  const defaultFastGasPrice = new BigNumber(standardGasPrice)
    .times(1.05)
    .toNumber();

  gasPriceOptions.push({
    label: 'Fast',
    value: BigNumber.max(fastGasPrice, defaultFastGasPrice).toNumber()
  });

  const defaultFasterGasPrice = new BigNumber(standardGasPrice)
    .times(1.1)
    .toNumber();

  gasPriceOptions.push({
    label: 'Faster',
    value: BigNumber.max(fasterGasPrice, defaultFasterGasPrice).toNumber()
  });

  return gasPriceOptions;
};
