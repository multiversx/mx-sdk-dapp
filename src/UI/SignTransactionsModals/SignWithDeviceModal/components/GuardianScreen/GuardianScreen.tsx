import React, { useEffect } from 'react';
import { useGuardianScren } from '../../hooks';

// TODO: @miro
import styles from './../../../../ledger/LedgerLoginContainer/addressRowStyles.scss';

const GUARDIAN_FIELD = 'guardian';

interface GuardianScreenPropsType {
  codeError?: string;
  onSetCode: (code: string) => void;
}

export const GuardianScreen = ({
  codeError,
  onSetCode
}: GuardianScreenPropsType) => {
  const { isValid, isTouched, error, setError, onChange, onBlur, value } =
    useGuardianScren();

  useEffect(() => {
    onSetCode(value);
  }, [value]);

  useEffect(() => {
    if (codeError) {
      setError(codeError);
    }
  }, [codeError]);

  return (
    <div className={styles.ledgerAddressTableBodyItem}>
      <label htmlFor={GUARDIAN_FIELD}>Guardian Code</label>

      <div>
        <input
          type='text'
          id={GUARDIAN_FIELD}
          name={GUARDIAN_FIELD}
          data-testid={GUARDIAN_FIELD}
          required={true}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete='off'
        />
      </div>

      {!isValid && isTouched && <div>{error || codeError}</div>}
    </div>
  );
};
