import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { getGeneratedClasses } from 'UI/utils';

export interface IconStateProps {
  icon: any;
  className?: string;
  iconSize?: '2x' | '3x' | '5x';
  shouldRenderDefaultCss?: boolean;
}

const IconState = ({
  icon,
  iconSize = '3x',
  className = 'icon-state',
  shouldRenderDefaultCss = true
}: IconStateProps) => {
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: classnames('icon-state mx-auto', className, {
        half: iconSize === '2x'
      }),
      icon: classnames('text-white', className)
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

export default IconState;
