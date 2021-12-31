import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { network, walletConnectBridge, walletConnectDeepLink } from './config';

import { DappProvider, AuthenticatedRoutesWrapper, DappUI } from 'dapp-core';
import 'dapp-core/build/index.css';
import Layout from 'components/Layout';
import { routeNames } from 'routes';
import UnlockPage from 'pages/UnlockPage';
import PageNotFoud from 'pages/PageNotFoud';
import routes from 'routes';

const { TransactionsToastList } = DappUI;

const App = () => {
  return (
    <Router>
      <DappProvider
        networkConfig={{ network, walletConnectBridge, walletConnectDeepLink }}
      >
        <AuthenticatedRoutesWrapper routes={routes} unlockRoute='unlock'>
          <Layout>
            <TransactionsToastList />
            <Routes>
              <Route path={routeNames.unlock} element={<UnlockPage />} />
              {routes.map((route: any, index: number) => (
                <Route
                  path={route.path}
                  key={'route-key-' + index}
                  element={<route.component />}
                />
              ))}
              <Route element={PageNotFoud} />
            </Routes>
          </Layout>
        </AuthenticatedRoutesWrapper>
      </DappProvider>
    </Router>
  );
};

export default App;
