import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

export const DappProvider = ({
  children,
}: {
  children: React.ReactChildren | React.ReactElement;
}) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      {children}
    </PersistGate>
  </Provider>
);
