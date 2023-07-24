import React, { PropsWithChildren } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { EnvironmentsEnum } from 'types';

import { DappProvider } from 'wrappers/DappProvider';

export interface RenderType extends RenderResult {
  history: MemoryHistory;
}

export const renderWithProvider = ({
  children,
  route = '/'
}: PropsWithChildren & {
  route?: string;
}): RenderType => {
  const history = createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <DappProvider environment={EnvironmentsEnum.devnet}>
        <>{children}</>
      </DappProvider>
    ),
    history
  };
};
