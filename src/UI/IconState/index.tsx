import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { getGeneratedClasses } from 'UI/utils';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IconStateProps {
  icon: IconProp;
  className?: string;
  iconSize?: '2x' | '3x' | '5x';
}

export const IconState = ({
  icon,
  iconSize = '3x',
  className = 'icon-state'
}: IconStateProps) => {
  const generatedClasses = getGeneratedClasses(className, {
    wrapper: classNames(
      `${globalStyles.iconState} ${globalStyles.mxAuto}`,
      className,
      {
        half: iconSize === '2x'
      }
    ),
    icon: classNames(globalStyles.textWhite, className)
  });

  return (
    <span className={generatedClasses.wrapper}>
      <FontAwesomeIcon
        icon={icon}
        size={iconSize}
        className={generatedClasses.icon}
      />
    </span>
  );
};
