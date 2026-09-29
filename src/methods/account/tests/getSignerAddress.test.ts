import { testAddress } from '__mocks__';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { loginAction } from 'store/actions/sharedActions/sharedActions';
import { initStore } from 'store/store';
import { getAddress } from '../getAddress';
import { getSignerAddress } from '../getSignerAddress';

const multisigAddress =
  'erd1qqqqqqqqqqqqqpgqak8zt22wl2ph4tswtyc39namqx6ysa2sd8ss4xmlj3';

describe('getSignerAddress', () => {
  beforeEach(() => {
    initStore();
  });

  it('returns the login address for a regular login', () => {
    loginAction({
      address: testAddress,
      providerType: ProviderTypeEnum.extension
    });

    expect(getSignerAddress()).toBe(testAddress);
  });

  it('returns the signing address when acting as another account', () => {
    loginAction({
      address: multisigAddress,
      providerType: ProviderTypeEnum.extension,
      signerAddress: testAddress
    });

    expect(getAddress()).toBe(multisigAddress);
    expect(getSignerAddress()).toBe(testAddress);
  });
});
