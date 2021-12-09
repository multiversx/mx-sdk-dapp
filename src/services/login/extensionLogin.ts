import { ExtensionProvider } from '@elrondnetwork/erdjs/out';
import moment from 'moment';
import { loginAction } from 'redux/commonActions';
import { setExtensionLogin, setProvider } from '../../redux/slices';
import { store } from '../../redux/store';
import { LoginMethodsEnum } from '../../types';
import { buildUrlParams } from '../../utils';

export const extensionLogin = async ({
  callbackRoute,
  token
}: {
  callbackRoute: string;
  token?: string;
}) => {
  const provider: ExtensionProvider = ExtensionProvider.getInstance();

  try {
    const isSuccessfullyInitialized: boolean = await provider.init();

    if (!isSuccessfullyInitialized) {
      console.warn('Something went wrong trying to redirect to wallet login..');
      return;
    }

    const expires: number = moment().add(1, 'minutes').unix();
    const extensionLoginData = {
      data: {},
      expires: expires
    };

    store.dispatch(setExtensionLogin(extensionLoginData));

    const callbackUrl: string = encodeURIComponent(
      `${window.location.origin}${callbackRoute}`
    );
    const providerLoginData = {
      callbackUrl,
      ...(token && { token })
    };

    await provider.login(providerLoginData);

    store.dispatch(setProvider(provider));

    const { signature, address } = provider.account;
    const url = new URL(`${window.location.origin}${callbackRoute}`);

    const { nextUrlParams } = buildUrlParams(url.search, {
      address,
      ...(signature ? { signature } : {}),
      ...(token ? { loginToken: token } : {})
    });

    window.location.href = `${url.pathname}?${nextUrlParams}`;
    store.dispatch(
      loginAction({ address, loginMethod: LoginMethodsEnum.extension })
    );
  } catch (error) {
    console.error(error);
  }
};
