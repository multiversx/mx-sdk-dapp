import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setExternalAccountProvider } from 'providers/accountProvider';
import { loginAction } from 'redux/commonActions';
import { ExternalProviderType, LoginMethodsEnum } from 'types';

export function useInitializeExternalProvider(
  externalProvider?: ExternalProviderType
) {
  if (externalProvider == null) {
    return;
  }
  const dispatch = useDispatch();

  useEffect(() => {
    initializeExternalProvider();
    setExternalAccountProvider(externalProvider);
  }, []);

  function initializeExternalProvider() {
    try {
      externalProvider?.init({
        onLogin: (address: string, loginMethod: LoginMethodsEnum) => {
          dispatch(loginAction({ address, loginMethod }));
        },
        log: (word: string) => {
          console.log('dapp log: ', word);
        }
      });
    } catch (err) {
      console.error('Unable to initialize external provider', err);
    }
  }
}
