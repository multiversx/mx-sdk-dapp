import { useEffect } from 'react';
import { useGetAccountInfo } from 'hooks';
import { logout } from 'utils';
import { localStorageKeys } from 'utils/storage/local';

const { logoutEvent } = localStorageKeys;
const storageKey = 'storage';

const LogoutListener = () => {
  const { address } = useGetAccountInfo();

  useEffect(() => {
    const receiveMessage = (ev: StorageEvent) => {
      if (ev.key !== logoutEvent || !ev.newValue) {
        return;
      }

      try {
        const { data } = JSON.parse(ev.newValue);

        if (data === address) {
          logout();
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

  return null;
};

export default LogoutListener;
