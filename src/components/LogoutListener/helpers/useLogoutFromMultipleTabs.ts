import { useEffect } from 'react';
import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { logoutRouteSelector } from 'reduxStore/selectors';
import { logout } from 'utils/logout';
import { localStorageKeys } from 'utils/storage/local';

const { logoutEvent } = localStorageKeys;
const storageKey = 'storage';

export const useLogoutFromMultipleTabs = () => {
  const { address } = useGetAccountInfo();
  const logoutRoute = useSelector(logoutRouteSelector);

  useEffect(() => {
    const receiveMessage = (ev: StorageEvent) => {
      if (ev.key !== logoutEvent || !ev.newValue) {
        return;
      }

      try {
        const { data } = JSON.parse(ev.newValue);

        if (data === address) {
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
