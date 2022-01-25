enum SessionStorageKeysEnum {
  'toasts' = 'toasts'
}

export function setToastsIdsToStorage(ids: string[]) {
  return sessionStorage.setItem(
    SessionStorageKeysEnum.toasts,
    JSON.stringify(ids)
  );
}

export function getToastsIdsFromStorage() {
  const toastsIds = sessionStorage.getItem(SessionStorageKeysEnum.toasts);
  return toastsIds != null ? JSON.parse(toastsIds) : [];
}
