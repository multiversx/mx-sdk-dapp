import React, {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  useState
} from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BigNumber from 'bignumber.js';
import classNames from 'classnames';

import { WithStylesImportType } from 'hocs/useStyles';
import { withStyles } from 'hocs/withStyles';

export interface PaginationEllipsisFormPropsType extends WithStylesImportType {
  paginationItem: string;
  maxPageToSearchFor: number;
  onSearch: (page: number) => void;
}

const PaginationEllipsisFormComponent = ({
  styles,
  onSearch,
  paginationItem,
  maxPageToSearchFor
}: PaginationEllipsisFormPropsType) => {
  const [pageValue, setPageValue] = useState('');
  const [isEllipsisTooltipVisible, setIsEllipsisTooltipVisible] =
    useState(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (['Equal', 'Minus', 'Period', 'KeyE', 'Comma'].includes(event.code)) {
      event.preventDefault();
      return;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valueBigNumber = new BigNumber(event.target.value);
    const isBelowMax = valueBigNumber.isLessThanOrEqualTo(maxPageToSearchFor);

    if (valueBigNumber.isNaN() || isBelowMax) {
      setPageValue(event.target.value);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(parseInt(pageValue));
  };

  const handleMagnifyigGlassClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    onSearch(parseInt(pageValue));
  };

  const handleEllipsisClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsEllipsisTooltipVisible(!isEllipsisTooltipVisible);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsEllipsisTooltipVisible(false);
    }
  };

  return (
    <div
      onClick={handleEllipsisClick}
      className={classNames(styles?.paginationEllipsisFormContainer, {
        [styles?.active]: isEllipsisTooltipVisible
      })}
    >
      {isEllipsisTooltipVisible && (
        <div
          className={styles?.paginationEllipsisFormWrapper}
          onBlur={handleBlur}
          tabIndex={-1}
        >
          <form
            className={styles?.paginationEllipsisForm}
            onClick={(event) => event.stopPropagation()}
            onSubmit={handleSubmit}
          >
            <label
              htmlFor='paginationSearch'
              className={styles?.paginationEllipsisFormFieldLabel}
            >
              Page
            </label>

            <div className={styles?.paginationEllipsisFormField}>
              <input
                autoFocus
                type='number'
                autoComplete='off'
                id='paginationSearch'
                name='paginationSearch'
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={pageValue}
                className={styles?.paginationEllipsisFormFieldInput}
              />

              <div
                className={styles?.paginationEllipsisFormButton}
                onClick={handleMagnifyigGlassClick}
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={styles?.paginationEllipsisFormButtonIcon}
                />
              </div>
            </div>
          </form>
        </div>
      )}

      <span className={styles?.paginationEllipsisFormTrigger}>
        {paginationItem}
      </span>
    </div>
  );
};

export const PaginationEllipsisForm = withStyles(
  PaginationEllipsisFormComponent,
  {
    ssrStyles: () =>
      import(
        'UI/Pagination/components/PaginationEllipsisForm/paginationEllipsisFormStyles.scss'
      ),
    clientStyles: () =>
      require('UI/Pagination/components/PaginationEllipsisForm/paginationEllipsisFormStyles.scss')
        .default
  }
);
