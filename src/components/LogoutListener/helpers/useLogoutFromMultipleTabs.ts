import { useEffect } from 'react';
import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { logoutRouteSelector } from 'reduxStore/selectors';
import { logout } from 'utils/logout';
import { localStorageKeys } from 'utils/storage/local';
import { isStaleLogoutEvent } from 'utils/logout/isStaleLogoutEvent';

const { logoutEvent } = localStorageKeys;
const storageKey = 'storage';

interface LogoutEventData {
  address: string;
  ts: number;
  id: string;
}

export const useLogoutFromMultipleTabs = () => {
  const { address } = useGetAccountInfo();
  const logoutRoute: string | undefined = useSelector(logoutRouteSelector);

  useEffect(() => {
    const receiveMessage = (ev: StorageEvent) => {
      if (ev.key !== logoutEvent || !ev.newValue) {
        return;
      }

      try {
        const parsedData: LogoutEventData = JSON.parse(ev.newValue);
        const currentTime = Date.now();

        // Only act on logout events for the current address and ignore stale events
        if (!isStaleLogoutEvent({ parsedData, currentAddress: address, currentTime })) {
          logout(logoutRoute);
        }
      } catch (err) {
        return;
      }
    };

    window?.addEventListener(storageKey, receiveMessage);
    return () => {
      window?.removeEventListener(storageKey, receiveMessage);
    };
  }, [address, logoutRoute]);
};
