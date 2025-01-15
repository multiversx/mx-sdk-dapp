import React from 'react';
import classNames from 'classnames';

import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from 'UI/types';

export type LoadingDotsPropsType = WithClassnameType & WithStylesImportType;

const LoadingDotsComponent = ({ className, styles }: LoadingDotsPropsType) => (
  <div className={classNames(styles?.loadingDots, className)}>
    {Array.from({ length: 3 }).map((_, dotIndex) => (
      <span
        key={`loading-dot-${dotIndex}`}
        className={classNames(
          styles?.loadingDot,
          styles?.[`loadingDot-${dotIndex}`]
        )}
      />
    ))}

    <span>Loading...</span>
  </div>
);

export const LoadingDots = withStyles(LoadingDotsComponent, {
  ssrStyles: () => import('UI/LoadingDots/loadingDotsStyle.scss'),
  clientStyles: () => require('UI/LoadingDots/loadingDotsStyle.scss').default
});
