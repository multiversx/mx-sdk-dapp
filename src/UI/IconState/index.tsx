import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { WithClassnameType } from '../types';

// TODO: Rename to "IconStatePropsType" when sdk-dapp@3.0.0
export interface IconStateProps extends WithClassnameType {
  icon: IconProp;
  iconSize?: '2x' | '3x' | '5x';
}

const IconStateComponent = ({
  icon,
  iconSize = '3x',
  className = 'dapp-icon-state',
  globalStyles
}: IconStateProps & WithStylesImportType) => {
  const classes = {
    wrapper: classNames(
      globalStyles?.iconState,
      globalStyles?.mxAuto,
      {
        half: iconSize === '2x'
      },
      className
    ),
    icon: globalStyles?.textWhite
  };

  return (
    <span className={classes.wrapper}>
      <FontAwesomeIcon icon={icon} size={iconSize} className={classes.icon} />
    </span>
  );
};

export const IconState = withStyles(IconStateComponent, {});
