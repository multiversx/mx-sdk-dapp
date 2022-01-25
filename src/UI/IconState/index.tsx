import React from 'react';
const classNames = optionalImport('classnames');
import { getGeneratedClasses } from 'utils';
import { optionalImport } from 'utils/optionalImport';
import { Props } from './types';

const { FontAwesomeIcon } = optionalImport('@fortawesome/react-fontawesome');

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
