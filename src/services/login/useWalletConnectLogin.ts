import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { useDispatch, useSelector } from 'react-redux';
import useInitWalletConnect from '../../hooks/useInitWalletConnect';
import {
  walletConnectDeepLinkSelector,
  providerSelector,
  walletConnectBridgeSelector
} from '../../redux/selectors';
import { setTokenLogin } from '../../redux/slices';

export const useWalletConnectLogin = ({
  token,
  logoutRoute,
  callbackRoute
}: {
  token?: string;
  logoutRoute: string;
  callbackRoute: string;
}) => {
  const dispatch = useDispatch();

  const [wcUri, setWcUri] = useState<string>('');
  const [qrCodeSvg, setQrCodeSvg] = useState<string>('');

  const walletConnect: any = useSelector(providerSelector);
  const walletConnectBridge = useSelector(walletConnectBridgeSelector);

  const { error } = useInitWalletConnect({
    logoutRoute,
    callbackRoute
  });

  const walletConnectDeepLink: string = useSelector(
    walletConnectDeepLinkSelector
  );

  const hasWcUri = Boolean(wcUri);
  const loading = !hasWcUri;

  const loginWithWalletConnect = async () => {
    if (!walletConnectBridge) {
      return;
    }

    const walletConnectUri: string | undefined = await walletConnect?.login();
    const hasUri = Boolean(walletConnectUri);

    if (!hasUri) {
      return;
    }

    if (!token) {
      setWcUri(walletConnectUri as string);
      return;
    }

    const wcUriWithToken = `${walletConnectUri}&token=${token}`;

    setWcUri(wcUriWithToken);
    dispatch(setTokenLogin({ loginToken: token }));
  };

  const generateQRCode = async () => {
    if (!hasWcUri) {
      return;
    }

    const svg = await QRCode.toString(wcUri, {
      type: 'svg'
    });

    setQrCodeSvg(svg);
  };

  useEffect(() => {
    generateQRCode();
  }, [wcUri]);

  useEffect(() => {
    loginWithWalletConnect();
  }, [walletConnect, token]);

  const uriDeepLink = `${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(
    wcUri
  )}`;

  const uri: string | null = hasWcUri ? uriDeepLink : null;

  return {
    uri,
    error,
    loading,
    qrCodeSvg
  };
};

export default useWalletConnectLogin;
