import { testAddress } from '__mocks__';
import { getPpuOptions } from '../getPpuOptions';
import { IPlainTransactionObject } from 'lib/sdkCore';

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

describe('getPpuOptions', () => {
  it('should return the correct gas price options', () => {
    const ppuOptions = getPpuOptions({
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

    expect(ppuOptions).toEqual([
      { label: 'Standard', value: 0 },
      { label: 'Fast', value: 11760000 },
      { label: 'Faster', value: 19287760 }
    ]);
  });
});
