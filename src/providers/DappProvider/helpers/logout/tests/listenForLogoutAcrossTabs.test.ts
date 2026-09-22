import { getAddress } from 'methods/account/getAddress';
import { LOGOUT_EVENT_KEY_PREFIX } from '../broadcastLogoutAcrossTabs';
import { listenForLogoutAcrossTabs } from '../listenForLogoutAcrossTabs';

jest.mock('methods/account/getAddress', () => ({
  getAddress: jest.fn()
}));

const address = 'erd1current';

const dispatchLogout = (
  payload: Record<string, unknown>,
  key = `${LOGOUT_EVENT_KEY_PREFIX}-${address}`
) =>
  window.dispatchEvent(
    new StorageEvent('storage', { key, newValue: JSON.stringify(payload) })
  );

describe('listenForLogoutAcrossTabs', () => {
  let stop: () => void;
  const onLogout = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (getAddress as jest.Mock).mockReturnValue(address);
    stop = listenForLogoutAcrossTabs(onLogout);
  });

  afterEach(() => stop());

  it('logs out when another tab logs the same account out', () => {
    dispatchLogout({ address, id: 'a', timestamp: Date.now() });

    expect(onLogout).toHaveBeenCalledTimes(1);
  });

  it('handles the same broadcast once', () => {
    const payload = { address, id: 'b', timestamp: Date.now() };

    dispatchLogout(payload);
    dispatchLogout(payload);

    expect(onLogout).toHaveBeenCalledTimes(1);
  });

  it('ignores broadcasts for another account', () => {
    dispatchLogout(
      { address: 'erd1other', id: 'c', timestamp: Date.now() },
      `${LOGOUT_EVENT_KEY_PREFIX}-erd1other`
    );

    expect(onLogout).not.toHaveBeenCalled();
  });

  it('ignores stale or malformed broadcasts', () => {
    dispatchLogout({ address, id: 'd', timestamp: Date.now() - 120_000 });
    dispatchLogout({ address, timestamp: Date.now() });
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: `${LOGOUT_EVENT_KEY_PREFIX}-${address}`,
        newValue: 'not json'
      })
    );

    expect(onLogout).not.toHaveBeenCalled();
  });

  it('ignores the removal that follows each broadcast', () => {
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: `${LOGOUT_EVENT_KEY_PREFIX}-${address}`,
        newValue: null
      })
    );

    expect(onLogout).not.toHaveBeenCalled();
  });

  it('keeps a single listener when registered again', () => {
    listenForLogoutAcrossTabs(onLogout);

    dispatchLogout({ address, id: 'e', timestamp: Date.now() });

    expect(onLogout).toHaveBeenCalledTimes(1);
  });

  it('does nothing when logged out', () => {
    (getAddress as jest.Mock).mockReturnValue('');

    dispatchLogout({ address, id: 'f', timestamp: Date.now() });

    expect(onLogout).not.toHaveBeenCalled();
  });
});
