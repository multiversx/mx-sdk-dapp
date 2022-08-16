import { useEffect, useRef } from 'react';

export const useClosureRef = <T>(value: T) => {
  const refVal = useRef(value);

  useEffect(() => {
    refVal.current = value;
  }, [value]);

  return refVal;
};
