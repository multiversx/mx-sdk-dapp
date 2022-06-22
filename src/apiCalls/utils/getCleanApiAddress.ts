import { apiAddressSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export const getCleanApiAddress = (customApiAddress?: string) => {
  const apiAddress = customApiAddress ?? apiAddressSelector(store.getState());
  return apiAddress.endsWith('/') ? apiAddress.slice(0, -1) : apiAddress;
};
