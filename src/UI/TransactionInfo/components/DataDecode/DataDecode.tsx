import React, { ChangeEvent } from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { DecodeMethodEnum } from 'types/serverTransactions.types';
import {
  useDataDecode,
  DataDecodeType
} from 'utils/transactions/transactionInfoHelpers/useDataDecode';
import { WithClassnameType } from '../../../../UI/types';

export type DataDecodePropsType = WithClassnameType & DataDecodeType;

const DataDecodeComponent = (
  props: DataDecodePropsType & WithStylesImportType
) => {
  const { className, value, styles } = props;

  const { displayValue, validationWarnings, setActiveKey, decodeOptions } =
    useDataDecode(props);

  const showSelect = value && value !== N_A;
  const onChange = (event: ChangeEvent<HTMLSelectElement>) =>
    event ? setActiveKey(event.target.value) : DecodeMethodEnum.raw;

  return (
    <div className={styles?.decode}>
      <div className={classNames(styles?.textarea, className)}>
        {displayValue}
      </div>

      {showSelect && (
        <div className={styles?.select}>
          <select className={styles?.dropdown} onChange={onChange}>
            {decodeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {validationWarnings.map((warning: string, index: number) => (
        <div key={index} className={styles?.warnings}>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className={styles?.icon}
            size='xs'
          />

          <small className={styles?.warning}>{warning}</small>
        </div>
      ))}
    </div>
  );
};

export const DataDecode = withStyles(DataDecodeComponent, {
  ssrStyles: () =>
    import('UI/TransactionInfo/components/DataDecode/styles.scss'),
  clientStyles: () =>
    require('UI/TransactionInfo/components/DataDecode/styles.scss').default
});
