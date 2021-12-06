import React from 'react';
import moment from 'moment';
import { ExtensionProvider } from '@elrondnetwork/erdjs';
import { useDispatch } from 'react-redux';
import { setExtensionLogin } from '../../../redux/slices/loginInfoSlice';
import { setProvider } from '../../../redux/slices/networkConfigSlice';

export const useExtensionLogin = ({
  callbackRoute,
  token
}: {
  callbackRoute: string;
  token?: string;
}) => {
  const dispatch = useDispatch();

  return () => {
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
};

const ExtensionLogin = ({
  callbackRoute,
  token,
  extensionButtonLabel
}: {
  callbackRoute: string;
  token?: string;
  extensionButtonLabel: string;
}) => {
  const extensionLogin = useExtensionLogin({ callbackRoute, token });

  return (
    <button
      onClick={extensionLogin}
      className='btn btn-primary px-sm-4 m-1 mx-sm-3'
      data-testid='walletLink'
    >
      {extensionButtonLabel}
    </button>
  );
};

export default ExtensionLogin;
