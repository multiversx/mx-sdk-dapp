import React, { useState } from 'react';

export const useGuardianScren = () => {
  const [error, setError] = useState('');
  const [isTouched, setIsTouched] = useState(true);
  const [value, setValue] = useState('');

  const checkValid = (value: string) => (value?.length > 0 ? '' : 'Required');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value;
    setValue(code);
    setIsTouched(true);
    setError(checkValid(code));
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value;
    setValue(code);
    setError(checkValid(code));
  };

  return {
    value,
    isValid: !error,
    error,
    setError,
    isTouched,
    setIsTouched,
    onChange,
    onBlur
  };
};
