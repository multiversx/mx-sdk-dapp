import React from 'react';
import { network, walletConnectBridge, walletConnectDeepLink } from './config';

import { DappProvider } from 'dapp-core';

const App = () => {
  return (
    <DappProvider>
      <div>Dapp!</div>
    </DappProvider>
  );
};

export default App;
