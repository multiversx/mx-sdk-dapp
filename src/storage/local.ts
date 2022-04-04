import storage from 'utils/storage';
import { localStorageKeys } from 'utils/storage/local';

export function getNewLoginExpiresTimestamp() {
  return new Date().setSeconds(new Date().getSeconds() + 24);
}

export function setLoginExpiresAt(expiresAt: number) {
  storage.local.setItem({
    key: localStorageKeys.loginExpiresAt,
    data: expiresAt,
    expires: expiresAt
  });
}
