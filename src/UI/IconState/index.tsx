import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import classnames from 'optionalPackages/classnames';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import { getGeneratedClasses } from 'utils';
import { Props } from './types';

const IconState = ({
  icon,
  iconSize = '3x',
  className = globalStyles.iconState,
  shouldRenderDefaultCss = true
}: Props) => {
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: classnames(
        `${globalStyles.iconState} ${globalStyles.mxAuto}`,
        className,
        {
          half: iconSize === '2x'
        }
      ),
      icon: classnames(globalStyles.textWhite, className)
    }
  );

  return (
    <span className={generatedClasses.wrapper}>
      <ReactFontawesome.FontAwesomeIcon
        icon={icon}
        size={iconSize}
        className={generatedClasses.icon}
      />
    </span>
  );
};

export default IconState;
