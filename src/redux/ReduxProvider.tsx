import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

export const ReduxProvider = ({
  children
}: {
  children: React.ReactChildren | React.ReactElement;
}) => <Provider store={store}>{children}</Provider>;

