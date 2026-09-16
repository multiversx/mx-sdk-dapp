import { clearSdkDappStorage } from '../clearSdkDappStorage';

describe('clearSdkDappStorage', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('removes only sdk-dapp keys and leaves host app keys intact', () => {
    localStorage.setItem('sdk-dapp-store', '{"account":{}}');
    localStorage.setItem('sdk-dapp-logout-event-erd1qqq', 'erd1qqq');
    localStorage.setItem('host-app-cart', 'two items');
    sessionStorage.setItem('sdk-dapp-session', 'x');
    sessionStorage.setItem('host-app-draft', 'unsent message');

    clearSdkDappStorage();

    expect(localStorage.getItem('sdk-dapp-store')).toBeNull();
    expect(localStorage.getItem('sdk-dapp-logout-event-erd1qqq')).toBeNull();
    expect(localStorage.getItem('host-app-cart')).toEqual('two items');
    expect(sessionStorage.getItem('sdk-dapp-session')).toBeNull();
    expect(sessionStorage.getItem('host-app-draft')).toEqual('unsent message');
  });

  it('wipes everything when clearAllStorage is opted into', () => {
    localStorage.setItem('sdk-dapp-store', '{}');
    localStorage.setItem('host-app-cart', 'two items');
    sessionStorage.setItem('host-app-draft', 'unsent message');

    clearSdkDappStorage({ clearAllStorage: true });

    expect(localStorage.length).toBe(0);
    expect(sessionStorage.length).toBe(0);
  });
});
