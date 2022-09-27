import React from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';

interface NftBadgePropsTypes {
  text: string;
  className?: string;
  ['data-testid']?: string;
}

export const NftBadge = (props: NftBadgePropsTypes) => {
  const { text, className, 'data-testid': dataTestId = 'nftBadge' } = props;

  return (
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
};
