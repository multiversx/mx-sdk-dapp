import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { getGeneratedClasses } from 'utils';
import { Props } from './types';

const IconState = ({
  icon,
  iconSize = '3x',
  className = 'icon-state',
  shouldRenderDefaultCss = true
}: Props) => {
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: classNames('icon-state mx-auto', className, {
        half: iconSize === '2x'
      }),
      icon: classNames('text-white', className)
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
