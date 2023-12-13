import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from 'UI/types';

const LoadingDotsComponent = ({
  className,
  styles
}: WithClassnameType & WithStylesImportType) => (
  <div className={classNames(styles?.loadingDots, className)}>
    {Array.from({ length: 3 }).map((_, index) => (
      <span
        key={`loading-dot-${index}`}
        className={classNames(
          styles?.loadingDot,
          styles?.[`loadingDot-${index}`]
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
