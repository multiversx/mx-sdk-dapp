import { GAS_PER_DATA_BYTE, GAS_PRICE_MODIFIER } from 'constants/index';
import { calculateFeeLimit } from '../calculateFeeLimit';

describe('calculateFeeLimit tests', () => {
  it('computes correct fee', () => {
    const feeLimit = calculateFeeLimit({
      gasLimit: '62000',
      gasPrice: '1000000000',
      data: 'testdata',
      chainId: 'T',
      gasPerDataByte: String(GAS_PER_DATA_BYTE),
      gasPriceModifier: String(GAS_PRICE_MODIFIER)
    });
    expect(feeLimit).toBe('62000000000000');
  });

  it('computes correct fee for larger data', () => {
    const feeLimit = calculateFeeLimit({
      gasLimit: '11100000',
      gasPrice: '1000000000',
      data: 'bid@0d59@43525a502d333663366162@25',
      gasPerDataByte: String(GAS_PER_DATA_BYTE),
      gasPriceModifier: String(GAS_PRICE_MODIFIER),
      defaultGasPrice: '1000000000',
      chainId: 'T'
    });

    expect(feeLimit).toBe('210990000000000');
  });

  it('computes correct fee for SetGuardian tx', () => {
    const feeLimit = calculateFeeLimit({
      gasLimit: '',
      gasPrice: (1_000_000).toString(),
      data: 'SetGuardian@qwerty@12345',
      chainId: 'T',
      gasPerDataByte: '1',
      gasPriceModifier: '1'
    });

    expect(feeLimit).toBe((100_000_000_000).toString()); // (minGasLimit + extra guardian gas) * gasPrice
  });

  it('computes correct fee for GuardAccount tx', () => {
    const feeLimit = calculateFeeLimit({
      gasLimit: '',
      gasPrice: (1_000_000).toString(),
      data: 'GuardAccount@qwerty@12345',
      chainId: 'T',
      gasPerDataByte: '1',
      gasPriceModifier: '1'
    });

    expect(feeLimit).toBe((100_000_000_000).toString()); // (minGasLimit + extra guardian gas) * gasPrice
  });

  it('computes correct fee for UnGuardAccount tx', () => {
    const feeLimit = calculateFeeLimit({
      gasLimit: '',
      gasPrice: (1_000_000).toString(),
      data: 'UnGuardAccount@qwerty@12345',
      chainId: 'T',
      gasPerDataByte: '1',
      gasPriceModifier: '1'
    });

    expect(feeLimit).toBe((100_000_000_000).toString()); // (minGasLimit + extra guardian gas) * gasPrice
  });

  it('computes correct fee for UnGuardAccount tx and gas limit specified', () => {
    const feeLimit = calculateFeeLimit({
      gasLimit: (1_000_000).toString(),
      gasPrice: (1_000_000).toString(),
      data: 'UnGuardAccount@qwerty@12345',
      chainId: 'T',
      gasPerDataByte: '1',
      gasPriceModifier: '1'
    });

    expect(feeLimit).toBe((1_050_000_000_000).toString()); // (gasLimit + extra guardian gas) * gasPrice
  });

  it('computes correct fee for UnGuardAccount tx and min gas limit specified', () => {
    const feeLimit = calculateFeeLimit({
      gasLimit: '',
      minGasLimit: (1_000_000).toString(),
      gasPrice: (1_000_000).toString(),
      data: 'UnGuardAccount@qwerty@12345',
      chainId: 'T',
      gasPerDataByte: '1',
      gasPriceModifier: '1'
    });

    expect(feeLimit).toBe((1_050_000_000_000).toString()); // (minGasLimit + extra guardian gas) * gasPrice
  });
});
