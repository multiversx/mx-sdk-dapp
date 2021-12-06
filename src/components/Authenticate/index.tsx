import * as React from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { matchPath, Redirect, useLocation } from 'react-router-dom';
import Loader from 'UI/Loader';
import { useGetNetworkConfig } from './helpers';
import { useGetAddress } from 'hooks';
import useSetProvider from './useSetProvider';
import { newWalletProvider } from 'utils/provider';
import { getLatestNonce } from 'utils';
import { getAccount } from '../../utils/getAccount';
import { RouteType } from '../../types';

const Authenticate = ({
  children,
  routes,
  unlockRoute
}: {
  children: React.ReactNode;
  routes: RouteType[];
  unlockRoute: string;
}) => {
  const { loggedIn, dapp, address, ledgerAccount, chainId, network } =
    useContext();
  const [autehnitcatedRoutes] = React.useState(
    routes.filter((route) => Boolean(route.authenticatedRoute))
  );
  const { pathname } = useLocation();
  const [loading, setLoading] = React.useState(false);
  const getAddress = useGetAddress();
  const getNetworkConfig = useGetNetworkConfig();
  useSetProvider();

  const { getItem, removeItem } = storage.session;

  React.useMemo(() => {
    if (getItem('walletLogin')) {
      setLoading(true);
      const provider = newWalletProvider(network);
      getAddress()
        .then((address) => {
          removeItem('walletLogin');
          dispatch({ type: 'setProvider', provider });
          dispatch({ type: 'login', address, loginMethod: 'wallet' });
          getAccount(address)
            .then((account) => {
              dispatch({
                type: 'setAccount',
                account: {
                  balance: account.balance.toString(),
                  address,
                  nonce: getLatestNonce(account)
                }
              });
              setLoading(false);
            })
            .catch((e) => {
              console.error('Failed getting account ', e);
              setLoading(false);
            });
        })
        .catch((e) => {
          console.error('Failed getting address ', e);
          setLoading(false);
        });
    }
  }, [dapp.provider, dapp.proxy]);

  const privateRoute = autehnitcatedRoutes.some(
    ({ path }) =>
      matchPath(pathname, {
        path,
        exact: true,
        strict: false
      }) !== null
  );

  const redirect = privateRoute && !loggedIn && !getItem('walletLogin');

  React.useEffect(() => {
    if (chainId.valueOf() === '-1') {
      getNetworkConfig()
        .then((networkConfig) => {
          dispatch({
            type: 'setChainId',
            chainId: networkConfig.ChainID
          });
        })
        .catch((e) => {
          console.error('To do ', e);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId.valueOf()]);

  const fetchAccount = () => {
    if (address && loggedIn) {
      dapp.proxy
        .getAccount(new Address(address))
        .then((account) => {
          dispatch({
            type: 'setAccount',
            account: {
              balance: account.balance.toString(),
              address,
              nonce: getLatestNonce(account)
            }
          });
        })
        .catch((e) => {
          console.error('Failed getting account ', e);
          setLoading(false);
        });

      if (getItem('ledgerLogin') && !ledgerAccount) {
        const ledgerLogin = getItem('ledgerLogin');
        dispatch({
          type: 'setLedgerAccount',
          ledgerAccount: {
            index: ledgerLogin.index,
            address
          }
        });
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(fetchAccount, [address]);

  if (redirect) {
    return <Redirect to={unlockRoute} />;
  }

  if (loading && getItem('walletLogin')) {
    return <Loader />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authenticate;
