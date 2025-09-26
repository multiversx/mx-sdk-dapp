import { getUnixTimestamp } from 'utils/dateTime';

export const localStorageKeys = {
  logoutEvent: 'sdk-dapp-logout-event',
  guardianBreachToastDismissTimestamp:
    'sdk-dapp-guardian-breach-toast-dismiss-timestamp'
} as const;

type LocalValueType = keyof typeof localStorageKeys;
type LocalKeyType = typeof localStorageKeys[LocalValueType];

type ExpiresType = number | false;

const hasLocalStorage = typeof localStorage !== 'undefined';

export const setItem = ({
  key,
  data,
  expires
}: {
  key: LocalKeyType;
  data: any;
  expires: ExpiresType;
}) => {
  if (!hasLocalStorage) {
    return;
  }
  localStorage.setItem(
    String(key),
    JSON.stringify({
      expires,
      data
    })
  );
};

export const getItem = (key: LocalKeyType): any => {
  if (!hasLocalStorage) {
    return;
  }
  const item = localStorage.getItem(String(key));
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

  const expired = getUnixTimestamp() >= deserializedItem.expires;
  if (expired) {
    localStorage.removeItem(String(key));
    return null;
  }

  return deserializedItem.data;
};

export const removeItem = (key: LocalKeyType) => {
  if (!hasLocalStorage) {
    return;
  }

  localStorage.removeItem(String(key));
};

export const clear = () => {
  if (!hasLocalStorage) {
    return;
  }

  localStorage.clear();
};
