import React from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';

export interface NftBadgePropsType {
  text: string;
  className?: string;
  ['data-testid']?: string;
}

export const NftBadge = ({
  text,
  className,
  'data-testid': dataTestId = 'nftBadge'
}: NftBadgePropsType) => (
  <div
    data-testid={dataTestId}
    className={classNames(
      globalStyles.badge,
      globalStyles.badgeSecondary,
      globalStyles.badgePill,
      globalStyles.fontWeightLight,
      className
    )}
  >
    {text}
  </div>
);
