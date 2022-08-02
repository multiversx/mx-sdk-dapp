import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IconStateProps {
  icon: IconProp;
  iconSize?: '2x' | '3x' | '5x';
  className?: string;
}

export const IconState = ({
  icon,
  iconSize = '3x',
  className = 'dapp-icon-state'
}: IconStateProps) => {
  const classes = {
    wrapper: classNames(
      `${globalStyles.iconState} ${globalStyles.mxAuto}`,
      {
        half: iconSize === '2x'
      },
      className
    ),
    icon: globalStyles.textWhite
  };

  return (
    <span className={classes.wrapper}>
      <FontAwesomeIcon icon={icon} size={iconSize} className={classes.icon} />
    </span>
  );
};
