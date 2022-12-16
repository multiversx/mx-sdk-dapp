import { expect } from '@storybook/jest';
import { waitFor } from '@testing-library/react';
import { isLoggedInSelector, loginInfoSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { TokenLoginType } from 'types';

export const checkIsLoggedInStore = async ({
  isLoggedIn,
  tokenLogin
}: {
  isLoggedIn: boolean;
  tokenLogin?: TokenLoginType;
}) => {
  await waitFor(() => {
    const appState = store.getState();
    const isLoggedInStore = isLoggedInSelector(appState);
    const loginInfo = loginInfoSelector(appState);

    if (tokenLogin) {
      expect(loginInfo.tokenLogin).toStrictEqual(tokenLogin);
    }

    expect(isLoggedInStore).toBe(isLoggedIn);
  });
};
