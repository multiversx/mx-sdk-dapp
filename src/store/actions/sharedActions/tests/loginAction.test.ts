import { signerAddressSelector } from 'store/selectors/accountSelectors';
import { getState, initStore } from 'store/store';
import { loginAction, logoutAction } from '../sharedActions';

const address =
  'erd1dm9uxpf5awkn7uhju7zjn9lde0dhahy0qaxqqlu26xcuuw27qqrsqfmej3';
const multisigAddress =
  'erd1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqyc44rx';

describe('loginAction', () => {
  beforeEach(() => {
    initStore();
  });

  it('records the logged in address as the signer by default', () => {
    loginAction({ address, providerType: 'extension' });

    expect(getState().account.address).toBe(address);
    expect(signerAddressSelector(getState())).toBe(address);
  });

  it('keeps the signer apart from the account it logged in for', () => {
    loginAction({
      address: multisigAddress,
      providerType: 'crossWindow',
      signerAddress: address
    });

    expect(getState().account.address).toBe(multisigAddress);
    expect(signerAddressSelector(getState())).toBe(address);
  });

  it('clears the signer on logout', () => {
    loginAction({ address, providerType: 'extension' });
    logoutAction();

    expect(signerAddressSelector(getState())).toBe('');
  });
});
