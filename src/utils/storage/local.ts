import moment from 'moment';

export const LocalKey = {
  LoginExpiresAt: 'dapp-core-login-expires-at'
} as const;

type LocalValueType = keyof typeof LocalKey;
type LocalKeyType = typeof LocalKey[LocalValueType];

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
  localStorage.setItem(
    String(key),
    JSON.stringify({
      expires,
      data
    })
  );
};

export const getItem = (key: LocalKeyType): any => {
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

export const removeItem = (key: LocalKeyType) =>
  localStorage.removeItem(String(key));
