import React, { useEffect } from 'react';
import { DecodeMethodEnum } from 'types';
import { decodeForDisplay } from './decodeForDisplay';

export interface DataDecodeType {
  value: string;
  className?: string;
  initialDecodeMethod?: DecodeMethodEnum | string;
  setDecodeMethod?: React.Dispatch<React.SetStateAction<string>>;
  identifier?: string;
}

const decodeOptions = [
  {
    label: 'Raw',
    value: DecodeMethodEnum.raw
  },
  {
    label: 'Text',
    value: DecodeMethodEnum.text
  },
  {
    label: 'Decimal',
    value: DecodeMethodEnum.decimal
  },
  {
    label: 'Smart',
    value: DecodeMethodEnum.smart
  }
];

export const useDataDecode = ({
  value,
  initialDecodeMethod,
  setDecodeMethod,
  identifier
}: DataDecodeType) => {
  const [activeKey, setActiveKey] = React.useState(
    initialDecodeMethod &&
      Object.values<string>(DecodeMethodEnum).includes(initialDecodeMethod)
      ? initialDecodeMethod
      : DecodeMethodEnum.raw
  );

  const { displayValue, validationWarnings } = decodeForDisplay({
    input: value,
    decodeMethod: activeKey as DecodeMethodEnum,
    identifier
  });

  useEffect(() => {
    if (setDecodeMethod) {
      setDecodeMethod(activeKey);
    }
  }, [activeKey]);

  return {
    displayValue,
    validationWarnings,
    setActiveKey,
    decodeOptions
  };
};
