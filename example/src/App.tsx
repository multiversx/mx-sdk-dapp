import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { network, walletConnectBridge, walletConnectDeepLink } from './config';

import { DappProvider, AuthenticatedRoutesWrapper, DappUI } from 'dapp-core';
import 'dapp-core/build/index.css';
<<<<<<< HEAD
import Layout from 'components/Layout';
import { routeNames } from 'routes';
import UnlockPage from 'pages/UnlockPage';
import PageNotFoud from 'pages/PageNotFoud';
import routes from 'routes';
=======
import AuthenticatedRoute from './pages/AuthenticatedRoute';
>>>>>>> master

const { TransactionsToastList, DappCorePages } = DappUI;
const { UnlockPage } = DappCorePages;

const App = () => {
  return (
    <Router>
      <DappProvider
        networkConfig={{ network, walletConnectBridge, walletConnectDeepLink }}
      >
<<<<<<< HEAD
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
=======
        <AuthenticatedRoutesWrapper routes={routes} unlockRoute={'unlock'}>
          <TransactionsToastList />
          <Routes>
            <Route path='/' element={<UnlockPage loginRoute={'/home'} />} />

            <Route path={'/home'} element={<AuthenticatedRoute />} />

            <Route path={'/unlock'} element={<UnlockPage loginRoute={'/home'} />} />

            <Route path='*' element={<div>404</div>} />
          </Routes>
>>>>>>> master
        </AuthenticatedRoutesWrapper>
      </DappProvider>
    </Router>
  );
};

export default App;
