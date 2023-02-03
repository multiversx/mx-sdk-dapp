import { expect } from '@storybook/jest';
import { waitFor } from '@testing-library/react';
import { isLoggedInSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export const checkIsLoggedInStore = async (isLoggedIn = true) => {
  await waitFor(() => {
    const appState = store.getState();
    const isLoggedInStore = isLoggedInSelector(appState);

    expect(isLoggedInStore).toBe(isLoggedIn);
  });
};
