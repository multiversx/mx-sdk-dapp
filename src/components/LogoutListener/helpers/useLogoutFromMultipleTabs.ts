import { useEffect } from 'react';
import { useGetAccountInfo } from 'hooks';
import { logout } from 'utils/logout';
import { localStorageKeys } from 'utils/storage/local';
import { useSelector } from 'react-redux';
import { autoLogoutCallbackUrlSelector } from 'reduxStore/selectors';

const { logoutEvent } = localStorageKeys;
const storageKey = 'storage';

export const useLogoutFromMultipleTabs = () => {
  const { address } = useGetAccountInfo();
  const autoLogoutCallbackUrl = useSelector(autoLogoutCallbackUrlSelector);

  useEffect(() => {
    const receiveMessage = (ev: StorageEvent) => {
      if (ev.key !== logoutEvent || !ev.newValue) {
        return;
      }

      try {
        const { data } = JSON.parse(ev.newValue);

        if (data === address) {
          logout(autoLogoutCallbackUrl);
        }
      } catch (err) {
        return;
      }
    };

    window.addEventListener(storageKey, receiveMessage);
    return () => {
      window.removeEventListener(storageKey, receiveMessage);
    };
  }, [address]);
};
