import React from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { useDataDecode, DataDecodeType } from 'utils';

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

  const showSelect = value && value !== 'N/A';

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
        <div key={i} className='d-flex align-items-center mt-1 text-break-all'>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            size='xs'
            className='text-warning mr-1'
          />
          <small className='text-warning'> {warning}</small>
        </div>
      ))}
    </div>
  );
};
