import React, {
  FocusEvent,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  useState
} from 'react';
import classNames from 'classnames';

import { WithStylesImportType } from 'hocs/useStyles';
import { withStyles } from 'hocs/withStyles';
import { WithClassnameType } from 'UI/types';

export interface TooltipPropsType
  extends WithStylesImportType,
    PropsWithChildren,
    WithClassnameType {
  trigger: (isTooltipVisible: boolean) => ReactNode;
  triggerOnClick?: boolean;
  position?: 'top' | 'bottom';
}

const TooltipComponent = ({
  styles,
  trigger,
  children,
  className,
  triggerOnClick,
  position = 'top'
}: TooltipPropsType) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleEllipsisClick = (event: MouseEvent<HTMLElement>) => {
    if (!triggerOnClick) {
      return;
    }

    event.preventDefault();
    setIsTooltipVisible((isTooltipVisible) => !isTooltipVisible);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsTooltipVisible(false);
    }
  };

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    if (triggerOnClick) {
      return;
    }

    event.preventDefault();
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    if (triggerOnClick) {
      return;
    }

    event.preventDefault();
    setIsTooltipVisible(false);
  };

  return (
    <div
      onClick={handleEllipsisClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(styles?.tooltip, className)}
    >
      {isTooltipVisible && (
        <div
          className={classNames(
            styles?.tooltipContentWrapper,
            styles?.[position]
          )}
        >
          <div
            tabIndex={-1}
            onBlur={handleBlur}
            onClick={(event) => event.stopPropagation()}
            className={classNames(styles?.tooltipContent, styles?.[position])}
          >
            {children}
          </div>
        </div>
      )}

      <span className={styles?.tooltipTrigger}>
        {trigger(isTooltipVisible)}
      </span>
    </div>
  );
};

export const Tooltip = withStyles(TooltipComponent, {
  ssrStyles: () => import('UI/Tooltip/tooltipStyles.scss'),
  clientStyles: () => require('UI/Tooltip/tooltipStyles.scss').default
});
