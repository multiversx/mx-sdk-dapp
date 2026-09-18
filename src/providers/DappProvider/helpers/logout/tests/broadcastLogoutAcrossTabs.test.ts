import {
  LOGOUT_EVENT_KEY_PREFIX,
  broadcastLogoutAcrossTabs
} from '../broadcastLogoutAcrossTabs';

const ADDRESS = 'erd1qqq';
const KEY = `${LOGOUT_EVENT_KEY_PREFIX}-${ADDRESS}`;

describe('broadcastLogoutAcrossTabs', () => {
  beforeEach(() => localStorage.clear());

  it('writes then removes the key, so the storage event fires and nothing is left behind', () => {
    const writes: Array<string | null> = [];
    const setItem = jest
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation(function (this: Storage, key, value) {
        if (key === KEY) {
          writes.push(value);
        }
      });

    broadcastLogoutAcrossTabs(ADDRESS, localStorage);

    expect(writes).toHaveLength(1);
    expect(localStorage.getItem(KEY)).toBeNull();

    setItem.mockRestore();
  });

  it('carries the address, a unique id and a timestamp', () => {
    const payloads: any[] = [];
    const setItem = jest
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation(function (this: Storage, key, value) {
        if (key === KEY) {
          payloads.push(JSON.parse(String(value)));
        }
      });

    broadcastLogoutAcrossTabs(ADDRESS, localStorage);
    broadcastLogoutAcrossTabs(ADDRESS, localStorage);

    expect(payloads[0].address).toEqual(ADDRESS);
    expect(typeof payloads[0].timestamp).toBe('number');
    // a replayed value is distinguishable from a fresh one
    expect(payloads[0].id).not.toEqual(payloads[1].id);

    setItem.mockRestore();
  });

  it('does not throw when storage is unavailable', () => {
    const setItem = jest
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation(() => {
        throw new Error('QuotaExceededError');
      });
    jest.spyOn(console, 'error').mockImplementation(() => null);

    expect(() =>
      broadcastLogoutAcrossTabs(ADDRESS, localStorage)
    ).not.toThrow();

    setItem.mockRestore();
  });
});
