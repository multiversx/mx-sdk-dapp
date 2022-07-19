import React from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { getGeneratedClasses } from 'UI/utils';
import styles from './page-state.scss';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface PageStateProps {
  title?: React.ReactNode;
  icon?: IconProp | IconDefinition | null;
  iconClass?: string;
  className?: string;
  dataTestId?: string;
  iconSize?: SizeProp;
  iconBgClass?: string;
  action?: React.ReactNode;
  description?: string | React.ReactNode;
}

export const PageState = ({
  icon,
  title,
  action,
  iconClass,
  dataTestId,
  description,
  iconBgClass,
  iconSize = '5x',
  className = 'page-state'
}: PageStateProps) => {
  const generatedClasses = getGeneratedClasses(className, {
    wrapper: classNames(
      styles.state,
      globalStyles.mAuto,
      globalStyles.p4,
      globalStyles.textCenter
    ),
    iconContainer: classNames(
      `${globalStyles.iconState} ${globalStyles.mxAuto}`,
      {
        [`${iconBgClass}`]: Boolean(iconBgClass)
      }
    ),
    iconClass: classNames(iconClass != null && iconClass),
    title: classNames(globalStyles.h4, globalStyles.my4),
    description: globalStyles.mb3
  });

  return (
    <div className={generatedClasses.wrapper} data-testid={dataTestId}>
      {icon && (
        <span className={generatedClasses.iconContainer}>
          <FontAwesomeIcon
            icon={icon}
            className={generatedClasses.iconClass}
            size={iconSize}
          />
        </span>
      )}
      {title && <p className={generatedClasses.title}>{title}</p>}
      {description && (
        <div className={generatedClasses.description}>{description}</div>
      )}
      {action && <>{action}</>}
    </div>
  );
};
