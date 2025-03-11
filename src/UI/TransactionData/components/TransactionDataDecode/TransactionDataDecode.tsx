import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import capitalize from 'lodash/capitalize';

import { DataTestIdsEnum } from 'constants/dataTestIds.enum';
import { withStyles } from 'hocs/withStyles';
import { DecodeMethodEnum } from 'types';
import { decodeForDisplay } from 'utils/transactions/transactionInfoHelpers/decodeForDisplay';
import {
  SelectOptionType,
  TransactionDataDecodePropsType
} from './transactionDataDecode.types';

const TransactionDataDecodeComponent = ({
  className,
  data,
  onDecodeError,
  onDecode,
  styles
}: TransactionDataDecodePropsType) => {
  const rawMethodStr = capitalize(DecodeMethodEnum.raw.toString());
  const [method, setMethod] = useState<SelectOptionType>({
    label: rawMethodStr,
    value: rawMethodStr
  });

  const selectOptions = Object.values(DecodeMethodEnum).map((method) => {
    const methodStr = method.toString();

    return {
      label: capitalize(methodStr),
      value: methodStr
    };
  });

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectedOption = selectOptions.find(
      (option) => option.value === e.target.value
    );

    if (selectedOption) {
      setMethod(selectedOption);
    }
  };

  useEffect(() => {
    const { displayValue, validationWarnings } = decodeForDisplay({
      input: data,
      decodeMethod: DecodeMethodEnum[method.value]
    });

    onDecode(displayValue);

    if (validationWarnings.length > 0) {
      onDecodeError(validationWarnings);
    }
  }, [method, data]);

  return (
    <div className={classNames(styles?.transactionDataDecode, className)}>
      <select
        className={styles?.transactionDataDecodeSelect}
        data-testid={DataTestIdsEnum.transactionDataDecode}
        value={method.value}
        onChange={handleSelect}
      >
        {selectOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <FontAwesomeIcon
        icon={faChevronDown}
        className={styles?.transactionDataDecodeSelectIcon}
      />
    </div>
  );
};

export const TransactionDataDecode = withStyles(
  TransactionDataDecodeComponent,
  {
    ssrStyles: () =>
      import(
        'UI/TransactionData/components/TransactionDataDecode/transactionDataDecodeStyles.scss'
      ),
    clientStyles: () =>
      require('UI/TransactionData/components/TransactionDataDecode/transactionDataDecodeStyles.scss')
        .default
  }
);
