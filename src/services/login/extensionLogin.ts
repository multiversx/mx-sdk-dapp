import moment from 'moment';
import { store } from '../../redux/store';
import { ExtensionProvider } from '@elrondnetwork/erdjs/out';
import { setProvider } from '../../redux/slices/networkConfigSlice';
import { setExtensionLogin } from '../../redux/slices/loginInfoSlice';
import { loginAction } from 'redux/commonActions';
import { LoginMethodsEnum } from '../../types';

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
    };

    const expires: number = moment().add(1, 'minutes').unix();
    const extensionLoginData = {
      data: {},
      expires: expires,
    };

    store.dispatch(setExtensionLogin(extensionLoginData));

    const callbackUrl: string = encodeURIComponent(`${window.location.origin}${callbackRoute}`);
    const providerLoginData = {
      callbackUrl,
      ...token && { token }
    };

    await provider.login(providerLoginData);

    store.dispatch(setProvider(provider));

    const account = provider.account;
    const address = await provider.getAddress();
    const loginTokenParam = `loginToken=${token}`;
    const addressParam = `address=${account.address}`;
    const signatureParam = `signature=${account.signature}`;

    window.history.pushState(
      {},
      document.title,
      `${callbackRoute}?${addressParam}&${signatureParam}&${loginTokenParam}`
    );

    store.dispatch(loginAction({ address, loginMethod: LoginMethodsEnum.extension }));

  } catch (error) {

    console.error(error);

  }

};
