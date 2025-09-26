export const sessionStorageKeys = {
  guardianBreachToastDismissTimestamp:
    'guardian-breach-toast-dismiss-timestamp',
  address: 'address',
  shard: 'shard',
  toasts: 'toasts',
  toastProgress: 'toastProgress'
} as const;

export type SessionKeyType = keyof typeof sessionStorageKeys;
export type SessionValueType = typeof sessionStorageKeys[SessionKeyType];

export interface SetItemType {
  key: SessionValueType;
  data: any;
  expires?: number;
}

export const setItem = ({ key, data, expires }: SetItemType) => {
  sessionStorage.setItem(
    String(key),
    JSON.stringify({
      expires,
      data
    })
  );
};

export const getItem = (key: SessionValueType): any => {
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

  const expired = Date.now() >= deserializedItem.expires;
  if (expired) {
    sessionStorage.removeItem(String(key));
    return null;
  }

  return deserializedItem.data;
};

export const removeItem = (key: SessionValueType) =>
  sessionStorage.removeItem(String(key));

export const clear = () => sessionStorage.clear();

export const storage = {
  setItem,
  getItem,
  removeItem,
  clear
};
