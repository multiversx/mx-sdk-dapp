import React from 'react';
import classNames from 'classnames';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import { getGeneratedClasses } from 'utils';

export interface PageStateProps {
  title?: React.ReactNode;
  icon?: any;
  iconClass?: string;
  className?: string;
  dataTestId?: string;
  iconSize?:
    | 'xs'
    | 'lg'
    | 'sm'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x';
  iconBgClass?: string;
  action?: React.ReactNode;
  shouldRenderDefaultCss?: boolean;
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
  className = 'page-state',
  shouldRenderDefaultCss = true
}: PageStateProps) => {
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: 'state m-auto p-4 text-center',
      iconContainer: classNames('icon-state mx-auto', {
        [`${iconBgClass}`]: Boolean(iconBgClass)
      }),
      iconClass: classNames(iconClass != null && iconClass),
      title: 'h4 my-4',
      description: 'mb-3'
    }
  );

  return (
    <div className={generatedClasses.wrapper} data-testid={dataTestId}>
      {icon && (
        <span className={generatedClasses.iconContainer}>
          <ReactFontawesome.FontAwesomeIcon
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
      {action && <React.Fragment>{action}</React.Fragment>}
    </div>
  );
};

export default PageState;
