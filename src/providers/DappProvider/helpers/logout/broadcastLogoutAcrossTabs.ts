import { SDK_DAPP_STORAGE_PREFIX } from 'constants/storage.constants';
import { createHandshakeSession } from 'providers/strategies/WebviewProviderStrategy/WebviewClient/helpers/createHandshakeSession';

export const LOGOUT_EVENT_KEY_PREFIX = `${SDK_DAPP_STORAGE_PREFIX}-logout-event`;

export type LogoutBroadcastPayload = {
  address: string;
  /** Unique per broadcast, so a replayed value can be ignored. */
  id: string;
  timestamp: number;
};

/**
 * Notifies sibling tabs that the session ended, through a `storage` event.
 *
 */
export const broadcastLogoutAcrossTabs = (
  address: string,
  localStorage: Storage
) => {
  const logoutEventKey = `${LOGOUT_EVENT_KEY_PREFIX}-${address}`;

  const payload: LogoutBroadcastPayload = {
    address,
    id: createHandshakeSession(),
    timestamp: Date.now()
  };

  try {
    localStorage.setItem(logoutEventKey, JSON.stringify(payload));
    localStorage.removeItem(logoutEventKey);
  } catch (error) {
    console.error('Unable to broadcast logout across tabs:', error);
  }
};
