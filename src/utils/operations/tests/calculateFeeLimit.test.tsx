import { gasPerDataByte, gasPriceModifier } from 'constants/index';
import { calculateFeeLimit } from '../calculateFeeLimit';

describe('calculateFeeLimit tests', () => {
  it('computes correct fee', () => {
    const feeLimit = calculateFeeLimit({
      gasLimit: '62000',
      gasPrice: '1000000000',
      data: 'testdata',
      chainId: 'T',
      gasPerDataByte,
      gasPriceModifier
    });
    expect(feeLimit).toBe('62000000000000');
  });
  it('computes correct fee', () => {
    const feeLimit = calculateFeeLimit({
      gasLimit: '11100000',
      gasPrice: '1000000000',
      data: 'bid@0d59@43525a502d333663366162@25',
      gasPerDataByte: '1500',
      defaultGasPrice: '1000000000',
      gasPriceModifier: '0.01',
      chainId: 'T'
    });
    expect(feeLimit).toBe('210990000000000');
  });
});
