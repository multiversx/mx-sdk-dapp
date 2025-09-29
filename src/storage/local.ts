import { storage } from 'utils/storage';
import { localStorageKeys } from 'utils/storage/local';

export function getNewLoginExpiresTimestamp() {
  return new Date().setHours(new Date().getHours() + 24);
}

export function setLoginExpiresAt(expiresAt: number) {
  storage.local.setItem({
    key: localStorageKeys.loginExpiresAt,
    data: expiresAt,
    expires: expiresAt
  });
}
