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

const customStyles = {
  control: (base: any) => ({
    ...base,
    backgroundColor: '#131313',
    border: 'none',
    borderRadius: '8px',
    boxShadow: 'none',
    cursor: 'pointer',
    margin: '0 0 8px 0',
    height: '24px',
    width: '120px'
  }),
  menu: (base: any) => ({
    ...base,
    background: 'none',
    border: 'none',
    borderRadius: '8px',
    marginTop: '2px'
  }),
  option: (
    base: any,
    { isFocused }: { isFocused: boolean; isSelected: boolean }
  ) => ({
    ...base,
    backgroundColor: isFocused ? '#393b3c' : '#18191a',
    color: '#ffffff',
    cursor: 'pointer',
    padding: '8px 12px',
    ':active': {
      backgroundColor: '#393b3c'
    }
  }),
  singleValue: (base: any) => ({
    ...base,
    color: '#9ba5b4'
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: '#9ba5b4'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
};

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
      isClearable={false}
      isSearchable={false}
      name='dataDecode'
      onChange={handleSelect}
      options={selectOptions}
      styles={customStyles}
      value={method}
    />
  );
};
