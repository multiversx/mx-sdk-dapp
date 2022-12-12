import { expect } from '@storybook/jest';
import { waitFor } from '@testing-library/react';
import { isLoggedInSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export const checkIsLoggedInStore = async () => {
  await waitFor(() => {
    const isLoggedIn = isLoggedInSelector(store.getState());
    expect(isLoggedIn).toBe(true);
  });
};
