import { Transaction } from '@multiversx/sdk-core/out';
import { testAddress } from '__mocks__';
import { getGasPriceDetails } from '../getGasPriceDetails';

const secondTx = Transaction.fromPlainObject({
  nonce: 0,
  value: '0',
  receiver: testAddress,
  sender: testAddress,
  gasPrice: 1_000_000_000,
  gasLimit: 50_000_000,
  data: 'TXVsdGlFU0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDAxMzllZDdhZTRhYTAzNzkyZTZiY2IzMzIzOTRhNDBmZTc0NmVlZmE0N2NlYkAwMkA1NzQ1NDc0YzQ0MmQ2MTMyMzg2MzM1MzlAQDBkZTBiNmIzYTc2NDAwMDBANGQ0NTU4MmQ2MTM2MzUzOTY0MzBAQGUxNzc3MDRiYzQzZjliZWUzMTA2QDYxNjQ2NDRjNjk3MTc1Njk2NDY5NzQ3OUAwZGJkMmZjMTM3YTMwMDAwQGRmMzYzZTg4NzJlZDBkOTIzNWE3',
  chainID: 'D',
  version: 1
});

describe('getGasPriceDetails', () => {
  it('should return the correct gas price details', () => {
    const gasPriceDetails = getGasPriceDetails({
      shard: 1,
      gasStationMetadata: {
        0: {
          fast: 11_760_000,
          faster: 19_287_760
        },
        1: {
          fast: 11_760_000,
          faster: 19_287_760
        },
        2: {
          fast: 11_760_000,
          faster: 19_287_760
        }
      },
      transaction: secondTx,
      initialGasPrice: 1_000_000_000
    });

    expect(gasPriceDetails).toEqual({
      fastGasPrice: 1_000_000_000,
      fasterGasPrice: 1_069_824_559,
      isFastGasPrice: false,
      isFasterGasPrice: true,
      areRadiosEditable: true
    });
  });
});
