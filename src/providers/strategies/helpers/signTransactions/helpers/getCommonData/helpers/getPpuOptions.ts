import BigNumber from 'bignumber.js';
import { EMPTY_PPU } from 'constants/placeholders.constants';
import { IPlainTransactionObject } from 'lib/sdkCore';
import { NetworkType } from 'types/network.types';
import { getRecommendedGasPrice } from './getRecommendedGasPrice';

type GetGasPriceDetailsParamsType = {
  shard?: number;
  gasStationMetadata: NetworkType['gasStationMetadata'];
  transaction: IPlainTransactionObject;
  initialGasPrice?: number;
};

export const getPpuOptions = ({
  shard,
  gasStationMetadata,
  transaction,
  initialGasPrice = 0
}: GetGasPriceDetailsParamsType) => {
  const fastPpu = gasStationMetadata
    ? gasStationMetadata[Number(shard)]?.fast
    : EMPTY_PPU;

  const fasterPpu = gasStationMetadata
    ? gasStationMetadata[Number(shard)]?.faster
    : EMPTY_PPU;

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

  const isFastGasPrice = new BigNumber(fastGasPrice).isGreaterThan(
    initialGasPrice || 0
  );

  const isFasterGasPrice = new BigNumber(fasterGasPrice).isGreaterThan(
    initialGasPrice || 0
  );
  const isEditingGasPriceEnabled = isFastGasPrice || isFasterGasPrice;

  if (!isEditingGasPriceEnabled) {
    return [];
  }

  const ppuOptions = [
    {
      label: 'Standard',
      value: EMPTY_PPU
    }
  ];

  if (isFastGasPrice) {
    ppuOptions.push({
      label: 'Fast',
      value: fastPpu
    });
  }

  if (isFasterGasPrice) {
    ppuOptions.push({
      label: 'Faster',
      value: fasterPpu
    });
  }

  return ppuOptions;
};
