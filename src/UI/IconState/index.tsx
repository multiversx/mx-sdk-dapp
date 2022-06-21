import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import classnames from 'optionalPackages/classnames';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import { getGeneratedClasses } from 'utils';
import { Props } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
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
  className = globalStyles.iconState,
  shouldRenderDefaultCss = true
}: IconStateProps) => {
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
      <FontAwesomeIcon
        icon={icon}
        size={iconSize}
        className={generatedClasses.icon}
      />
    </span>
  );
};
