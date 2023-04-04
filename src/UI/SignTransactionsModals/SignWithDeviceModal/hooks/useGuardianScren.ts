import React, { useState } from 'react';

export const useGuardianScren = ({
  onSubmit,
  onCancel
}: {
  onSubmit: (code: string) => void;
  onCancel: () => void;
}) => {
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

  const hadleSubmit = () => {
    const error = checkValid(value);
    setError(error);
    setIsTouched(true);
    if (error) {
      return;
    }

    onSubmit(value);
  };

  const handleClose = () => {
    setValue('');
    setError('');
    setIsTouched(false);
    onCancel();
  };

  return {
    value,
    isValid: !error,
    error,
    setError,
    isTouched,
    setIsTouched,
    onChange,
    onBlur,
    hadleSubmit,
    handleClose
  };
};
