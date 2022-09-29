import React, { ChangeEvent } from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { N_A } from 'constants/index';
import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { useDataDecode, DataDecodeType } from 'utils';

import styles from './styles.scss';

interface DataDecodePropsTypes extends DataDecodeType {
  className?: string;
}

export const DataDecode = (props: DataDecodePropsTypes) => {
  const { className, value } = props;

  const {
    displayValue,
    validationWarnings,
    setActiveKey,
    decodeOptions
  } = useDataDecode(props);

  const showSelect = value && value !== N_A;
  const onChange = (event: ChangeEvent<HTMLSelectElement>) =>
    event ? setActiveKey(event.target.value) : DecodeMethodEnum.raw;

  return (
    <div className={styles.decode}>
      <div className={classNames(styles.textarea, className)}>
        {displayValue}
      </div>

      {showSelect && (
        <select className={styles.dropdown} onChange={onChange}>
          {decodeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {validationWarnings.map((warning: string, index: number) => (
        <div key={index} className={styles.warnings}>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className={styles.icon}
            size='xs'
          />

          <small className={styles.warning}>{warning}</small>
        </div>
      ))}
    </div>
  );
};
