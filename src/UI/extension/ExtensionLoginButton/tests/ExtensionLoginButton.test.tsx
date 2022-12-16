import React from 'react';
import { expect } from '@storybook/jest';
import { waitFor, fireEvent } from '@testing-library/react';
import { mockWindowLocation, renderWithProvider } from '__mocks__/utils';
import { logoutAction } from 'reduxStore/commonActions';
import { store } from 'reduxStore/store';
import { ExtensionLoginButton } from '../';
import { checkIsLoggedInStore } from './helpers';

const tokenLogin = {
  loginToken:
    'bG9jYWxob3N0.fff67d31476ad920d53093a3a4c2178e198179b35656eeefa419107fa718b780.86400.eyJ0aW1lc3RhbXAiOjE2NzEyMDQ3Njh9',
  signature:
    'e4c98dd01020118b13db9dd5db9e5b56ff0c4a0141306918a9d3eea964a21ada5d566f58cdf6c921ed3405bf5685d1e87545dbcc86ea3c27a43aa3abee8c2b0e',
  nativeAuthToken:
    'ZXJkMWRtOXV4cGY1YXdrbjd1aGp1N3pqbjlsZGUwZGhhaHkwcWF4cXFsdTI2eGN1dXcyN3FxcnNxZm1lajM.Ykc5allXeG9iM04wLmZmZjY3ZDMxNDc2YWQ5MjBkNTMwOTNhM2E0YzIxNzhlMTk4MTc5YjM1NjU2ZWVlZmE0MTkxMDdmYTcxOGI3ODAuODY0MDAuZXlKMGFXMWxjM1JoYlhBaU9qRTJOekV5TURRM05qaDk.e4c98dd01020118b13db9dd5db9e5b56ff0c4a0141306918a9d3eea964a21ada5d566f58cdf6c921ed3405bf5685d1e87545dbcc86ea3c27a43aa3abee8c2b0e'
};

jest.mock('@elrondnetwork/erdjs-extension-provider', () => {
  const { ExtensionProvider } = require('./helpers/mockExtensionProvider');
  return {
    __esModule: true,
    ExtensionProvider
  };
});

const CALLBACK_ROUTE = '/dashboard';

describe('ExtensionLoginButton tests', () => {
  beforeEach(() => {
    store.dispatch(logoutAction());
    mockWindowLocation();
  });

  it('should perform simple login and redirect', async () => {
    const methods = renderWithProvider({
      children: <ExtensionLoginButton callbackRoute={CALLBACK_ROUTE} />
    });

    const loginButton = await methods.findByTestId('extensionLoginButton');

    fireEvent.click(loginButton);

    await checkIsLoggedInStore({ isLoggedIn: true });

    waitFor(() => {
      expect(window.location.assign).toHaveBeenCalledWith(CALLBACK_ROUTE);
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

    await checkIsLoggedInStore({ isLoggedIn: true });

    waitFor(() => {
      expect(window.location.assign).toHaveBeenCalledTimes(0);
      expect(onLoginRedirect).toHaveBeenCalledTimes(1);
    });
  });
  it('should perform login with nativeAuth', async () => {
    const methods = renderWithProvider({
      children: (
        <ExtensionLoginButton callbackRoute={CALLBACK_ROUTE} nativeAuth />
      )
    });

    const loginButton = await methods.findByTestId('extensionLoginButton');

    fireEvent.click(loginButton);

    await checkIsLoggedInStore({ isLoggedIn: true, tokenLogin });

    waitFor(() => {
      expect(window.location.assign).toHaveBeenCalledWith(CALLBACK_ROUTE);
    });
  });
  /**
   * TODO:
   * - add test for unable to get block
   * - add test for custom token sent & nativeAuth
   * - add test for custom invalid token sent & nativeAuth
   */
});
