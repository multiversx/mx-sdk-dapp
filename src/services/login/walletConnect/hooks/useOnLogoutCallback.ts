import { useCallback } from 'react';
import { logoutAction } from '../../../../redux/commonActions';
import { useSelector } from '../../../../redux/DappProviderContext';
import { providerSelector } from '../../../../redux/selectors';
import { store } from '../../../../redux/store';

export const useOnLogoutCallback = (callbackUrl: string) => {
  const provider = useSelector(providerSelector);

  const callback = useCallback(() => {
    store.dispatch(logoutAction());

    const awaitable = async () => {
      try {
        await provider.logout({ callbackUrl });
      } catch (err) {
        console.error('error logging out', err);
      }
    };
    awaitable();
  }, [provider]);

  return callback;
};
