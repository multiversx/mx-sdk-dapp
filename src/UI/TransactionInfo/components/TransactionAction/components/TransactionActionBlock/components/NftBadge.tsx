import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';

export interface NftBadgePropsType {
  text: string;
  className?: string;
  ['data-testid']?: string;
}

const NftBadgeComponent = ({
  text,
  className,
  'data-testid': dataTestId = 'nftBadge',
  globalStyles
}: NftBadgePropsType & WithStylesImportType) => (
  <div
    data-testid={dataTestId}
    className={classNames(
      globalStyles?.badge,
      globalStyles?.badgeSecondary,
      globalStyles?.badgePill,
      globalStyles?.fontWeightLight,
      className
    )}
  >
    {text}
  </div>
);

export const NftBadge = withStyles(NftBadgeComponent, {});
