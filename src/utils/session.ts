import { optionalImport } from 'lib';

const moment = optionalImport('moment');

export type SessionKeyType = 'address' | 'shard' | 'toasts' | 'toastProgress';
type ExpiresType = number | false;

export const setItem = ({
  key,
  data,
  expires
}: {
  key: SessionKeyType;
  data: any;
  expires: ExpiresType;
}) => {
  sessionStorage.setItem(
    String(key),
    JSON.stringify({
      expires,
      data
    })
  );
};

export const getItem = (key: SessionKeyType): any => {
  const item = sessionStorage.getItem(String(key));
  if (!item) {
    return null;
  }

  const deserializedItem = JSON.parse(item);
  if (!deserializedItem) {
    return null;
  }

  if (
    !deserializedItem.hasOwnProperty('expires') ||
    !deserializedItem.hasOwnProperty('data')
  ) {
    return null;
  }

  const expired = moment().unix() >= deserializedItem.expires;
  if (expired) {
    sessionStorage.removeItem(String(key));
    return null;
  }

  return deserializedItem.data;
};

export const removeItem = (key: SessionKeyType) =>
  sessionStorage.removeItem(String(key));

export const clear = () => sessionStorage.clear();

export const storage = {
  setItem,
  getItem,
  removeItem,
  clear
};

export default storage;
