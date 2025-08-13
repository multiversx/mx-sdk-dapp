/**************
 * MSW config code
 ***************/
import 'isomorphic-fetch';
import '@testing-library/jest-dom';
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

jest.retryTimes(0);

jest.mock('./utils/network/getEgldLabel', () => {
  return {
    __esModule: true, // this property makes it work
    getEgldLabel: () => {
      return 'EGLD';
    }
  };
});

jest.mock('./utils/platform/getIsExtensionAvailable', () => {
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
  '@multiversx/sdk-wallet-connect-provider/out/walletConnectV2Provider',
  () => {
    return {
      __esModule: true
    };
  }
);

jest.mock('react-redux/lib/utils/Subscription', () => {
  const {
    createSubscription
  } = require('./__mocks__/packages/createSubscription');
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
