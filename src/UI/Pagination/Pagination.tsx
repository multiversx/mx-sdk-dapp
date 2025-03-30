import React, { MouseEvent, useEffect, useState } from 'react';
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BigNumber from 'bignumber.js';
import classNames from 'classnames';

import { DataTestIdsEnum } from 'constants/index';
import { WithStylesImportType } from 'hocs/useStyles';
import { withStyles } from 'hocs/withStyles';
import { Tooltip } from 'UI/Tooltip';
import { WithClassnameType } from 'UI/types';
import { stringIsInteger } from 'utils/validation/stringIsInteger';

import { PaginationEdgeButton, PaginationEllipsisForm } from './components';
import { getPagination } from './helpers';

export interface PaginationPropsType
  extends WithStylesImportType,
    WithClassnameType {
  onPageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
  isDisabled?: boolean;
  showLabels?: boolean;
  showEdgeButtons?: boolean;
  disabledClassName?: string;
  buttonsClassNames?: string;
}

const PaginationComponent = ({
  currentPage = 1,
  totalPages,
  className,
  disabledClassName,
  buttonsClassNames,
  onPageChange,
  isDisabled,
  showLabels,
  showEdgeButtons = true,
  styles
}: PaginationPropsType) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);

  const isLeftToggleDisabled = currentPageIndex === 1;
  const isRightToggleDisabled = currentPageIndex === totalPages;

  const optionalDisabledClassName = disabledClassName
    ? { [disabledClassName]: isDisabled }
    : {};

  const paginationItems = getPagination({
    currentPage: currentPageIndex,
    totalPages
  });

  const handlePageClick = (newPageIndex: number) => {
    if (newPageIndex === currentPageIndex) {
      return;
    }

    setCurrentPageIndex(newPageIndex);
    onPageChange(newPageIndex);
  };

  const handlePaginationItemClick = (paginationItem: string) => {
    if (stringIsInteger(paginationItem)) {
      handlePageClick(new BigNumber(paginationItem).toNumber());
    }
  };

  const handleEdgePageClick =
    (pageToNavigateTo: number) => (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      handlePageClick(pageToNavigateTo);
    };

  const isPaginationItemInTheHundreds = (paginationItem: string) =>
    stringIsInteger(paginationItem) &&
    new BigNumber(paginationItem).isGreaterThanOrEqualTo(100);

  const isCurrentPageActive = (paginationItem: string) =>
    new BigNumber(paginationItem).isEqualTo(currentPageIndex);

  useEffect(() => {
    if (currentPage !== currentPageIndex) {
      setCurrentPageIndex(currentPage);
    }
  }, [currentPage, currentPageIndex]);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={classNames(styles?.pagination, className)}>
      {showEdgeButtons && (
        <span
          onClick={handleEdgePageClick(1)}
          className={classNames(styles?.paginationAngle, buttonsClassNames, {
            [styles?.disabled]: isLeftToggleDisabled,
            ...optionalDisabledClassName
          })}
        >
          <FontAwesomeIcon
            className={styles?.paginationAngleIcon}
            icon={faAnglesLeft}
          />
        </span>
      )}

      <PaginationEdgeButton
        label='Prev'
        onClick={handleEdgePageClick(currentPageIndex - 1)}
        data-testid={DataTestIdsEnum.prevBtn}
        paginationButtonIcon={faAngleLeft}
        isInactive={isLeftToggleDisabled}
        showLabels={showLabels}
        className={classNames(
          styles?.paginationEdgeButton,
          buttonsClassNames,
          { [styles?.disabled]: isDisabled },
          optionalDisabledClassName
        )}
      />

      <div className={styles?.paginationItems}>
        {paginationItems.map((paginationItem, paginationItemIndex) => (
          <div
            key={`page-item-${paginationItemIndex}`}
            className={styles?.paginationItemWrapper}
          >
            {stringIsInteger(paginationItem) ? (
              <div
                onClick={() => handlePaginationItemClick(paginationItem)}
                className={classNames(
                  styles?.paginationItem,
                  buttonsClassNames,
                  { [styles?.active]: isCurrentPageActive(paginationItem) },
                  { [styles?.disabled]: isDisabled },
                  {
                    [styles?.hundreds]:
                      isPaginationItemInTheHundreds(paginationItem)
                  },
                  optionalDisabledClassName
                )}
              >
                <span className={styles?.paginationItemText}>
                  {paginationItem}
                </span>
              </div>
            ) : (
              <Tooltip
                triggerOnClick
                trigger={(isTooltipVisible) => (
                  <div
                    className={classNames(styles?.paginationTooltip, {
                      [styles?.active]: isTooltipVisible
                    })}
                  >
                    {paginationItem}
                  </div>
                )}
              >
                <PaginationEllipsisForm
                  maxPageToSearchFor={totalPages}
                  onSearch={handlePageClick}
                />
              </Tooltip>
            )}
          </div>
        ))}
      </div>

      <PaginationEdgeButton
        label='Next'
        onClick={handleEdgePageClick(currentPageIndex + 1)}
        data-testid={DataTestIdsEnum.nextBtn}
        paginationButtonIcon={faAngleRight}
        isInactive={isRightToggleDisabled}
        showLabels={showLabels}
        className={classNames(
          styles?.paginationEdgeButton,
          styles?.reversed,
          buttonsClassNames,
          { [styles?.disabled]: isDisabled },
          optionalDisabledClassName
        )}
      />

      {showEdgeButtons && (
        <span
          onClick={handleEdgePageClick(totalPages)}
          className={classNames(styles?.paginationAngle, buttonsClassNames, {
            [styles?.disabled]: isRightToggleDisabled,
            ...optionalDisabledClassName
          })}
        >
          <FontAwesomeIcon
            className={styles?.paginationAngleIcon}
            icon={faAnglesRight}
          />
        </span>
      )}
    </div>
  );
};

export const Pagination = withStyles(PaginationComponent, {
  ssrStyles: () => import('UI/Pagination/paginationStyles.scss'),
  clientStyles: () => require('UI/Pagination/paginationStyles.scss').default
});
