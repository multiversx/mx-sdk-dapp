import { testAddress } from '__mocks__';
import { IPlainTransactionObject } from 'lib/sdkCore';
import { getGasPriceOptions } from '../getGasPriceOptions';

const secondTx: IPlainTransactionObject = {
  nonce: 0,
  value: '0',
  receiver: testAddress,
  sender: testAddress,
  gasPrice: 1_000_000_000,
  gasLimit: 500_000_000,
  data: 'TXVsdGlFU0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDAxMzllZDdhZTRhYTAzNzkyZTZiY2IzMzIzOTRhNDBmZTc0NmVlZmE0N2NlYkAwMkA1NzQ1NDc0YzQ0MmQ2MTMyMzg2MzM1MzlAQDBkZTBiNmIzYTc2NDAwMDBANGQ0NTU4MmQ2MTM2MzUzOTY0MzBAQGUxNzc3MDRiYzQzZjliZWUzMTA2QDYxNjQ2NDRjNjk3MTc1Njk2NDY5NzQ3OUAwZGJkMmZjMTM3YTMwMDAwQGRmMzYzZTg4NzJlZDBkOTIzNWE3',
  chainID: 'D',
  version: 1
};

describe('getGasPriceOptions test', () => {
  it('should return the correct gas price options', () => {
    const gasPriceOptions = getGasPriceOptions({
      shard: 1,
      gasStationMetadata: [
        {
          fast: 11_760_000,
          faster: 19_287_760
        },
        {
          fast: 11_760_000,
          faster: 19_287_760
        },
        {
          fast: 11_760_000,
          faster: 19_287_760
        }
      ],
      transaction: secondTx,
      initialGasPrice: 1_000_000_000
    });

    expect(gasPriceOptions).toEqual([
      { label: 'Standard', value: 1000000000 },
      { label: 'Fast', value: 1065456733 },
      { label: 'Faster', value: 1747472258 }
    ]);
  });
});
