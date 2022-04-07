import moment from 'moment';

export const localStorageKeys = {
  loginExpiresAt: 'dapp-core-login-expires-at'
} as const;

type LocalValueType = keyof typeof localStorageKeys;
type LocalKeyType = typeof localStorageKeys[LocalValueType];

type ExpiresType = number | false;

export const setItem = ({
  key,
  data,
  expires
}: {
  key: LocalKeyType;
  data: any;
  expires: ExpiresType;
}) => {
  if (typeof localStorage === 'undefined') {
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
  if (typeof localStorage === 'undefined') {
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

  const expired = moment().unix() >= deserializedItem.expires;
  if (expired) {
    localStorage.removeItem(String(key));
    return null;
  }

  return deserializedItem.data;
};

export const removeItem = (key: LocalKeyType) => {
  if (typeof localStorage === 'undefined') {
    return;
  }
  localStorage.removeItem(String(key));
};
