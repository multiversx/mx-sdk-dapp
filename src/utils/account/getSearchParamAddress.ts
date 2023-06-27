import { addressIsValid } from './addressIsValid';

export const getSearchParamAddress = () => {
  const search = window?.location.search;
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams as any);
  const address: string = params?.address;
  if (addressIsValid(address)) {
    return address;
  }
  return null;
};
