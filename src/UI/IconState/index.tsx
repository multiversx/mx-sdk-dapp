import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Props } from './types';
import { getGeneratedClasses } from 'utils';
import classNames from 'classnames';

const IconState = ({
  icon,
  iconSize = '3x',
  className = 'icon-state',
  shouldRenderDefaultCss = true
}: Props) => {
  const isDefaultClassName = className === 'icon-state';
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: classNames('icon-state mx-auto', {
        half: iconSize === '2x'
      }),
      icon: isDefaultClassName ? 'text-white' : 'text-primary'
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
