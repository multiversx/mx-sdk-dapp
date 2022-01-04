import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { network, walletConnectBridge, walletConnectDeepLink } from './config';
import { DappProvider, DappUI } from 'dapp-core';
import 'dapp-core/build/index.css';
import Layout from 'components/Layout';
import { routeNames } from 'routes';
import PageNotFoud from 'pages/PageNotFoud';
import routes from 'routes';

const {
  TransactionsToastList,
  DappCorePages: { UnlockPage }
} = DappUI;

const App = () => {
  return (
    <Router>
      <DappProvider
        networkConfig={{ network, walletConnectBridge, walletConnectDeepLink }}
      >
        <Layout>
          <TransactionsToastList />
          <Routes>
            <Route
              path={routeNames.unlock}
              element={<UnlockPage loginRoute={routeNames.dashboard} />}
            />
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
      </DappProvider>
    </Router>
  );
};

export default App;
