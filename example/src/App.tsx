import React from 'react';

import { ReduxProvider } from 'dapp-core';

const App = () => {
  return (
    <ReduxProvider>
      <div>Dapp power!</div>
    </ReduxProvider>
  );
};

export default App;
