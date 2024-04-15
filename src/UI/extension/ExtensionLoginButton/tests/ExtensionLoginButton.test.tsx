import React from 'react';
import { expect } from '@storybook/jest';
import { fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import {
  mockWindowLocation,
  renderWithProvider,
  server,
  testAddress,
  testNetwork
} from '__mocks__';
import { logoutAction } from 'reduxStore/commonActions';
import * as actions from 'reduxStore/slices/loginInfoSlice';
import { store } from 'reduxStore/store';
import { sleep } from 'utils/asyncActions';
import { ExtensionLoginButton } from '../';
import { checkIsLoggedInStore } from './helpers';

jest.mock('reduxStore/slices/loginInfoSlice', () => {
  return {
    __esModule: true, //    <----- this __esModule: true is important
    ...jest.requireActual('reduxStore/slices/loginInfoSlice')
  };
});

jest.mock('@multiversx/sdk-extension-provider', () => {
  const { ExtensionProvider } = require('./mocks/mockExtensionProvider');
  return {
    __esModule: true,
    ExtensionProvider
  };
});

const CALLBACK_ROUTE = '/dashboard';

const tokenLoginWithoutSignature = {
  loginToken:
    'aHR0cDovL2xvY2FsaG9zdA.fff67d31476ad920d53093a3a4c2178e198179b35656eeefa419107fa718b780.86400.eyJ0aW1lc3RhbXAiOjE2OTAxODQzMTN9',
  nativeAuthConfig: {
    apiAddress: 'https://devnet-api.multiversx.com',
    blockHashShard: undefined,
    expirySeconds: 86400,
    extraInfo: {},
    extraRequestHeaders: {},
    gatewayUrl: undefined,
    origin: 'http://localhost',
    tokenExpirationToastWarningSeconds: 300
  }
};

const tokenLoginWithSignature = {
  ...tokenLoginWithoutSignature,
  signature:
    'e4c98dd01020118b13db9dd5db9e5b56ff0c4a0141306918a9d3eea964a21ada5d566f58cdf6c921ed3405bf5685d1e87545dbcc86ea3c27a43aa3abee8c2b0e',
  nativeAuthToken:
    'ZXJkMWRtOXV4cGY1YXdrbjd1aGp1N3pqbjlsZGUwZGhhaHkwcWF4cXFsdTI2eGN1dXcyN3FxcnNxZm1lajM.YUhSMGNEb3ZMMnh2WTJGc2FHOXpkQS5mZmY2N2QzMTQ3NmFkOTIwZDUzMDkzYTNhNGMyMTc4ZTE5ODE3OWIzNTY1NmVlZWZhNDE5MTA3ZmE3MThiNzgwLjg2NDAwLmV5SjBhVzFsYzNSaGJYQWlPakUyT1RBeE9EUXpNVE45.e4c98dd01020118b13db9dd5db9e5b56ff0c4a0141306918a9d3eea964a21ada5d566f58cdf6c921ed3405bf5685d1e87545dbcc86ea3c27a43aa3abee8c2b0e'
};

describe('ExtensionLoginButton tests', () => {
  beforeEach(() => {
    store.dispatch(logoutAction());
    mockWindowLocation();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should perform simple login and redirect', async () => {
    const methods = renderWithProvider({
      children: <ExtensionLoginButton callbackRoute={CALLBACK_ROUTE} />
    });

    const loginButton = await methods.findByTestId('extensionLoginButton');

    fireEvent.click(loginButton);

    await checkIsLoggedInStore();

    await waitFor(() => {
      expect(window?.location.assign).toHaveBeenCalledWith(CALLBACK_ROUTE);
    });
  });

  it('should perform login and redirect to URL', async () => {
    const methods = renderWithProvider({
      children: <ExtensionLoginButton callbackRoute='https://multivers.com' />
    });

    const loginButton = await methods.findByTestId('extensionLoginButton');

    fireEvent.click(loginButton);

    await checkIsLoggedInStore();

    await waitFor(() => {
      expect(window?.location.assign).toHaveBeenCalledWith(
        'https://multivers.com'
      );
    });
  });

  it('should perform simple login and call onLoginRedirect', async () => {
    const onLoginRedirect = jest.fn();

    const methods = renderWithProvider({
      children: (
        <ExtensionLoginButton
          callbackRoute={CALLBACK_ROUTE}
          onLoginRedirect={onLoginRedirect}
        />
      )
    });

    const loginButton = await methods.findByTestId('extensionLoginButton');

    fireEvent.click(loginButton);

    await checkIsLoggedInStore();

    await waitFor(() => {
      expect(window?.location.assign).toHaveBeenCalledTimes(0);
      expect(onLoginRedirect).toHaveBeenCalledTimes(1);
      expect(onLoginRedirect).toHaveBeenCalledWith(CALLBACK_ROUTE, {
        address: testAddress,
        signature: undefined
      });
    });
  });

  it('extension should perform login with nativeAuth', async () => {
    const methods = renderWithProvider({
      children: (
        <ExtensionLoginButton callbackRoute={CALLBACK_ROUTE} nativeAuth />
      )
    });

    const loginButton = await methods.findByTestId('extensionLoginButton');
    const setTokenLoginSpy = jest.spyOn(actions, 'setTokenLogin');
    jest.spyOn(Date, 'now').mockReturnValue(1690184313013); // 2023-07-24T11:00
    fireEvent.click(loginButton);
    await sleep(1000);

    await waitFor(() => {
      expect(setTokenLoginSpy).toHaveBeenNthCalledWith(
        1,
        tokenLoginWithoutSignature
      );

      expect(setTokenLoginSpy).toHaveBeenNthCalledWith(
        2,
        tokenLoginWithSignature
      );

      expect(window?.location.assign).toHaveBeenCalledWith(CALLBACK_ROUTE);
    });
  });

  it('should not perform nativeAuth login when block call fails', async () => {
    const blocksError = [
      rest.get(`${testNetwork.apiAddress}/blocks`, (_req, res, ctx) =>
        res(ctx.status(500), ctx.json(null))
      )
    ];
    server.use(...blocksError);

    const methods = renderWithProvider({
      children: (
        <ExtensionLoginButton callbackRoute={CALLBACK_ROUTE} nativeAuth />
      )
    });

    const loginButton = await methods.findByTestId('extensionLoginButton');

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(window?.location.assign).toHaveBeenCalledTimes(0);
    });
  });
});
