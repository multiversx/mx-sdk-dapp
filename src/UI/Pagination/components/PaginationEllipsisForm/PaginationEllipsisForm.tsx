import React, {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  useState
} from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BigNumber from 'bignumber.js';

import { WithStylesImportType } from 'hocs/useStyles';
import { withStyles } from 'hocs/withStyles';

export interface PaginationEllipsisFormPropsType extends WithStylesImportType {
  maxPageToSearchFor: number;
  onSearch: (page: number) => void;
}

const PaginationEllipsisFormComponent = ({
  styles,
  onSearch,
  maxPageToSearchFor
}: PaginationEllipsisFormPropsType) => {
  const [pageValue, setPageValue] = useState('');

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
      setPageValue(valueBigNumber.toString());
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(parseInt(pageValue));
  };

  const handleMagnifyingGlassClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    onSearch(parseInt(pageValue));
  };

  return (
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
          onClick={handleMagnifyingGlassClick}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles?.paginationEllipsisFormButtonIcon}
          />
        </div>
      </div>
    </form>
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
