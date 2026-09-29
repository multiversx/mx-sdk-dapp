import { safeWindow } from 'constants/window.constants';
import { getAddress } from 'methods/account/getAddress';
import {
  LOGOUT_EVENT_KEY_PREFIX,
  LogoutBroadcastPayload
} from 'providers/DappProvider/helpers/logout/broadcastLogoutAcrossTabs';

const MAX_BROADCAST_AGE_MS = 60_000;

let stopActiveListener: (() => void) | null = null;

const parsePayload = (
  value: string
): Partial<LogoutBroadcastPayload> | null => {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

export const listenForLogoutAcrossTabs = (onLogout: () => void) => {
  stopActiveListener?.();

  if (!safeWindow.addEventListener) {
    return () => {};
  }

  const handledIds = new Set<string>();

  const handleStorage = (event: StorageEvent) => {
    const address = getAddress();

    if (
      !address ||
      !event.newValue ||
      event.key !== `${LOGOUT_EVENT_KEY_PREFIX}-${address}`
    ) {
      return;
    }

    const payload = parsePayload(event.newValue);

    const isValidPayload =
      payload?.address === address &&
      typeof payload.id === 'string' &&
      typeof payload.timestamp === 'number' &&
      Math.abs(Date.now() - payload.timestamp) <= MAX_BROADCAST_AGE_MS;

    if (!isValidPayload || handledIds.has(payload.id as string)) {
      return;
    }

    handledIds.add(payload.id as string);
    onLogout();
  };

  safeWindow.addEventListener('storage', handleStorage);

  stopActiveListener = () => {
    safeWindow.removeEventListener('storage', handleStorage);
    stopActiveListener = null;
  };

  return stopActiveListener;
};
