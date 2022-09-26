import React from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { N_A } from 'constants/index';
import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { useDataDecode, DataDecodeType } from 'utils';

import globalStyles from 'assets/sass/main.scss';

export const DataDecode = (
  props: DataDecodeType & {
    className?: string;
  }
) => {
  const { className, value } = props;

  const {
    displayValue,
    validationWarnings,
    setActiveKey,
    decodeOptions
  } = useDataDecode(props);

  const showSelect = value && value !== N_A;

  return (
    <div className='position-relative data-decode mt-1'>
      <div className={`form-control textarea ${className ? className : ''}`}>
        {displayValue}
      </div>

      {showSelect && (
        <select
          className='position-absolute dropdown'
          onChange={(e) => {
            return e ? setActiveKey(e.target.value) : DecodeMethodEnum.raw;
          }}
        >
          {decodeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {validationWarnings.map((warning: string, i: number) => (
        <div
          key={i}
          className={classNames(
            globalStyles.dFlex,
            globalStyles.alignItemsCenter,
            globalStyles.mt1
          )}
        >
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            size='xs'
            className={classNames(globalStyles.textWarning, globalStyles.mr1)}
          />

          <small className={globalStyles.textWarning}> {warning}</small>
        </div>
      ))}
    </div>
  );
};
