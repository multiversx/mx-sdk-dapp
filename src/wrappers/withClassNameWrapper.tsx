import React from 'react';
import { wrapperClassName } from 'utils';

export const withClassNameWrapper =
  (Component: any) =>
  ({ ...props }) =>
    (
      <span className={wrapperClassName}>
        <Component {...props} />
      </span>
    );
