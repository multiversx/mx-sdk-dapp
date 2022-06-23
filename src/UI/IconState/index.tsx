import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { getGeneratedClasses } from 'UI/utils';

export interface IconStateProps {
  icon: any;
  className?: string;
  iconSize?: '2x' | '3x' | '5x';
  shouldRenderDefaultCss?: boolean;
}

export const IconState = ({
  icon,
  iconSize = '3x',
  className = 'icon-state',
  shouldRenderDefaultCss = true
}: IconStateProps) => {
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: classNames(
        `${globalStyles.iconState} ${globalStyles.mxAuto}`,
        className,
        {
          half: iconSize === '2x'
        }
      ),
      icon: classNames(globalStyles.textWhite, className)
    }
  );

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
