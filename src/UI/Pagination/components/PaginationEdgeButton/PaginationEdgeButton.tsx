import React, { MouseEvent } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { WithStylesImportType } from 'hocs/useStyles';
import { withStyles } from 'hocs/withStyles';
import { WithClassnameType } from 'UI/types';

interface PaginationEdgeButtonPropsType
  extends WithClassnameType,
    WithStylesImportType {
  label: string;
  isInactive: boolean;
  showLabels?: boolean;
  paginationButtonIcon: IconDefinition;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const PaginationEdgeButtonComponent = ({
  label,
  onClick,
  showLabels,
  isInactive,
  paginationButtonIcon,
  className,
  'data-testid': dataTestId,
  styles
}: PaginationEdgeButtonPropsType) => (
  <div
    onClick={onClick}
    data-testid={dataTestId}
    className={classNames(styles?.paginationEdgeButton, className, {
      [styles?.inactive]: isInactive
    })}
  >
    <FontAwesomeIcon
      icon={paginationButtonIcon}
      className={styles?.paginationEdgeButtonIcon}
    />

    <span
      className={classNames(styles?.paginationEdgeButtonText, {
        [styles?.show]: showLabels
      })}
    >
      {label}
    </span>
  </div>
);

export const PaginationEdgeButton = withStyles(PaginationEdgeButtonComponent, {
  ssrStyles: () =>
    import(
      'UI/Pagination/components/PaginationEdgeButton/paginationEdgeButtonStyles.scss'
    ),
  clientStyles: () =>
    require('UI/Pagination/components/PaginationEdgeButton/paginationEdgeButtonStyles.scss')
      .default
});
