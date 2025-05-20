import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';

export const getCleanApiAddress = (customApiAddress?: string) => {
  const network = networkSelector(getState());
  const apiAddress = customApiAddress ?? network.apiAddress;
  return apiAddress.endsWith('/') ? apiAddress.slice(0, -1) : apiAddress;
};
