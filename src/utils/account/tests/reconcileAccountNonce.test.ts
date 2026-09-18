import { account as mockAccount } from '__mocks__/data/storeData/account';
import {
  setAccount,
  setAccountNonce
} from 'store/actions/account/accountActions';
import {
  loginAction,
  logoutAction
} from 'store/actions/sharedActions/sharedActions';
import { createTransactionsSession } from 'store/actions/transactions/transactionsActions';
import { accountNonceSelector } from 'store/selectors/accountSelectors';
import { getState, initStore } from 'store/store';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import { fetchAccount } from '../fetchAccount';
import { reconcileAccountNonce } from '../reconcileAccountNonce';

jest.mock('../fetchAccount', () => ({ fetchAccount: jest.fn() }));

const address = mockAccount.address;
const accountData = mockAccount.accounts[address];

const login = () => {
  loginAction({ address, providerType: 'extension' });
  setAccount({ ...accountData, address, nonce: 12 });
};

const chainAccount = (nonce: number) => ({ ...accountData, address, nonce });

describe('reconcileAccountNonce', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    initStore();
  });

  it('drops a nonce advanced for transactions that never landed', async () => {
    login();
    setAccountNonce(20);
    (fetchAccount as jest.Mock).mockResolvedValue(chainAccount(12));

    await reconcileAccountNonce();

    expect(accountNonceSelector(getState())).toBe(12);
  });

  it('keeps the nonces of transactions still being tracked', async () => {
    login();
    setAccountNonce(20);
    createTransactionsSession({
      status: TransactionBatchStatusesEnum.sent,
      transactions: [{ nonce: 14, status: 'pending', hash: 'a' } as any]
    });
    (fetchAccount as jest.Mock).mockResolvedValue(chainAccount(12));

    await reconcileAccountNonce();

    expect(accountNonceSelector(getState())).toBe(15);
  });

  it('keeps the current nonce when the account cannot be fetched', async () => {
    login();
    setAccountNonce(20);
    (fetchAccount as jest.Mock).mockResolvedValue(null);

    await reconcileAccountNonce();

    expect(accountNonceSelector(getState())).toBe(20);
  });

  it('ignores a response for another account', async () => {
    login();
    setAccountNonce(20);
    (fetchAccount as jest.Mock).mockResolvedValue({
      ...chainAccount(3),
      address: 'erd1qqqqqqqqqqqqqpgqp699jngundfqw07d8jzkepucvpzush6k3wvqyc44rx'
    });

    await reconcileAccountNonce();

    expect(accountNonceSelector(getState())).toBe(20);
  });

  it('does nothing when logged out', async () => {
    login();
    logoutAction();

    await reconcileAccountNonce();

    expect(fetchAccount).not.toHaveBeenCalled();
  });
});
