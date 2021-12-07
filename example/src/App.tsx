import React from 'react';
import { network, walletConnectBridge, walletConnectDeepLink } from './config';

import { DappProvider, AuthenticatedRoutesWrapper } from 'dapp-core';

import AuthenticatedRoute from './pages/AuthenticatedRoute';
import Unlock from './pages/UnlockRoute';

const unlockRoute = {
  path: '/unlock',
  title: 'Unlock',
  component: Unlock
};

const routes = [
  {
    path: '/home',
    title: 'Home',
    authenticatedRoute: true,
    component: AuthenticatedRoute
  },
  unlockRoute
];

const App = () => {
  return (
    <DappProvider
      networkConfig={{ network, walletConnectBridge, walletConnectDeepLink }}
    >
      <AuthenticatedRoutesWrapper routes={routes} unlockRoute={'unlock'}>
        <div>Dapp!</div>
      </AuthenticatedRoutesWrapper>
    </DappProvider>
  );
};

export default App;
