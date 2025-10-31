import { IPlainTransactionObject } from '@multiversx/sdk-core';
import { account } from '__mocks__/data/account';
import { getRecommendedGasPrice } from '../getRecommendedGasPrice';

const transaction: IPlainTransactionObject = {
  nonce: 1329,
  value: '0',
  receiver: account.address,
  sender: account.address,
  gasPrice: 1_000_000_000,
  gasLimit: 6000000,
  chainID: 'D',
  version: 1
};

const getGasPriceData = (
  ppu: number,
  initialGasPrice = transaction.gasPrice
) => {
  return {
    ppu,
    initialGasPrice
  };
};

describe('getRecommendedGasPrice test', () => {
  it('should return initialGasPrice when ppu is 0', () => {
    const gasPriceData = getGasPriceData(0);

    const result = getRecommendedGasPrice({
      transaction,
      gasPriceData
    });

    expect(result).toBe(1000000000);
  });

  it('should return recommended gas for fast ppu', () => {
    const fastPpu = 29287760;

    const gasPriceData = getGasPriceData(fastPpu);

    const result = getRecommendedGasPrice({
      transaction,
      gasPriceData
    });

    expect(result).toBe(1604808767);
  });

  it('should return recommended gas for faster ppu', () => {
    const fasterPpu = 59287760;

    const gasPriceData = getGasPriceData(fasterPpu);

    const result = getRecommendedGasPrice({
      transaction,
      gasPriceData
    });

    expect(result).toBe(3248644383);
  });

  it('should return initialGasPrice when gasLimit is small', () => {
    const gasPriceData = getGasPriceData(29287760);

    const result = getRecommendedGasPrice({
      transaction: {
        ...transaction,
        gasLimit: 50000
      },
      gasPriceData
    });

    expect(result).toBe(1000000000);
  });
});
