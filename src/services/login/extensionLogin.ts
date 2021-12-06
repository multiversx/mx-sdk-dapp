import { useDispatch } from 'react-redux';
import { setExtensionLogin } from '../../redux/slices/loginInfoSlice';
import moment from 'moment';
import { setProvider } from '../../redux/slices/networkConfigSlice';
import { ExtensionProvider } from '@elrondnetwork/erdjs/out';

export const extensionLogin = ({
  callbackRoute,
  token
}: {
  callbackRoute: string;
  token?: string;
}) => {
  const dispatch = useDispatch();

  const provider = ExtensionProvider.getInstance();
  provider
    .init()
    .then(async (initialised) => {
      if (initialised) {
        dispatch(
          setExtensionLogin({
            data: {},
            expires: moment().add(1, 'minutes').unix()
          })
        );
        await provider.login({
          callbackUrl: encodeURIComponent(
            `${window.location.origin}${callbackRoute}`
          ),

          ...(token ? { token } : {})
        });

        dispatch(setProvider(provider));

        const address = await provider.getAddress();
        const account = provider.account;

        const addressParam = `address=${account.address}`;
        const signatureParam = `signature=${account.signature}`;
        const loginTokenParam = `loginToken=${token}`;
        window.history.pushState(
          {},
          document.title,
          `${callbackRoute}?${addressParam}&${signatureParam}&${loginTokenParam}`
        );
        dispatch({ type: 'login', address, loginMethod: 'extension' });
      } else {
        console.warn(
          'Something went wrong trying to redirect to wallet login..'
        );
      }
    })
    .catch((err) => {
      console.warn(err);
    });
};
