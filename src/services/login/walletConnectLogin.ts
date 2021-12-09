import React from 'react';
import QRCode from 'qrcode';
import { useDispatch, useSelector } from 'react-redux';
import useInitWalletConnect from '../../hooks/useInitWalletConnect';
import { walletConnectDeepLinkSelector } from '../../redux/selectors';
import { setTokenLogin } from '../../redux/slices';

const walletConnectLogin = ({
  callbackRoute,
  logoutRoute,
  token
}: {
  callbackRoute: string;
  logoutRoute: string;
  token?: string;
}) => {
  const walletConnectDeepLink = useSelector(walletConnectDeepLinkSelector);
  const dispatch = useDispatch();

  const ref = React.useRef(null);
  const [qrSvg, setQrSvg] = React.useState<string>('');
  const [wcUri, setWcUri] = React.useState<string | null>(null);
  const { error, walletConnectInit, walletConnect } = useInitWalletConnect({
    callbackRoute,
    logoutRoute
  });

  React.useEffect(walletConnectInit, []);

  React.useEffect(() => {
    loginWithWalletConnect();
  }, [walletConnect, token]);

  React.useEffect(() => {
    buildQrCode();
  }, [wcUri]);

  async function loginWithWalletConnect() {
    if (walletConnect != null) {
      const walletConnectUri = await walletConnect.login();
      if (token != null) {
        setWcUri(`${walletConnectUri}&token=${token}`);
        dispatch(setTokenLogin({ loginToken: token }));
      } else {
        setWcUri(walletConnectUri);
      }
    }
  }

  async function buildQrCode() {
    if (wcUri && ref.current !== null) {
      const svg = await QRCode.toString(wcUri, {
        type: 'svg'
      });
      setQrSvg(svg);
    }
  }

  return {
    uri:
      wcUri != null
        ? `${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(wcUri)}`
        : null,
    qrCode: qrSvg,
    error,
    loading: wcUri == null
  };
};

export default walletConnectLogin;
