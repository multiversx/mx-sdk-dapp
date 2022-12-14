import React from 'react';
import { expect } from '@storybook/jest';
import { waitFor, fireEvent } from '@testing-library/react';
import { mockWindowLocation, renderWithProvider } from '__mocks__/utils';
import { logoutAction } from 'reduxStore/commonActions';
import { store } from 'reduxStore/store';
import { ExtensionLoginButton } from '../';
import { checkIsLoggedInStore } from './helpers';

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

    await checkIsLoggedInStore();

    await waitFor(() => {
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

    await checkIsLoggedInStore();

    await waitFor(() => {
      expect(window.location.assign).toHaveBeenCalledTimes(0);
      expect(onLoginRedirect).toHaveBeenCalledTimes(1);
    });
  });
});
