/**************
 * MSW config code
 ***************/

import { server } from './__mocks__/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

/**************
 * files
 ***************/

window.scrollTo = jest.fn();

jest.mock('./utils/network/getEgldLabel', () => {
  return {
    __esModule: true, // this property makes it work
    getEgldLabel: () => {
      return 'EGLD';
    }
  };
});

jest.mock('./UI/extension/helpers/getIsExtensionAvailable', () => {
  return {
    __esModule: true,
    getIsExtensionAvailable: () => true
  };
});

jest.mock('./hooks/useGetNetworkConfig', () => {
  return {
    __esModule: true,
    useGetNetworkConfig: () => {
      const { fallbackNetworkConfigurations } = require('./constants/network');
      return {
        network: fallbackNetworkConfigurations.devnet
      };
    }
  };
});

// resolves import error
jest.mock(
  '@elrondnetwork/erdjs-wallet-connect-provider/out/walletConnectV2Provider',
  () => {
    return {
      __esModule: true
    };
  }
);

jest.mock('react-redux/es/utils/Subscription', () => {
  const { createSubscription } = require('./__mocks__');
  return {
    __esModule: true,
    createSubscription
  };
});

/**************
 * window
 ***************/

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
