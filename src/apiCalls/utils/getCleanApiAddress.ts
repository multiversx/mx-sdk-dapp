import { apiAddressSelector } from 'reduxStore/selectors';
import { getStore } from 'reduxStore/store';

export const getCleanApiAddress = (customApiAddress?: string) => {
  const apiAddress =
    customApiAddress ?? apiAddressSelector(getStore().getState());
  return apiAddress.endsWith('/') ? apiAddress.slice(0, -1) : apiAddress;
};
