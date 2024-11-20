import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import capitalize from 'lodash/capitalize';
import Select, { SingleValue } from 'react-select';
import { DecodeMethodEnum } from 'types';
import { decodeForDisplay } from 'utils/transactions/transactionInfoHelpers/decodeForDisplay';
import { WithClassnameType } from '../../types';

interface SelectOptionType {
  label: string;
  value: string;
}

interface TransactionDataDecodePropsType extends WithClassnameType {
  data: string;
  onDecode: (decodedData: string) => void;
  onDecodeError: (errors: string[]) => void;
}

export const TransactionDataDecode = ({
  className,
  data,
  onDecodeError,
  onDecode
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

  const handleSelect = (event: SingleValue<SelectOptionType>) => {
    if (event) {
      setMethod(event);
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
    <Select
      className={classNames('transaction-data-decode', className)}
      classNamePrefix='data-decode'
      isClearable={false}
      isSearchable={false}
      name='dataDecode'
      onChange={handleSelect}
      options={selectOptions}
      value={method}
    />
  );
};
